"use client";

import { useEffect } from "react";
import { AI_SOURCE_KEY, classifyAiSource, readAiSource } from "@/lib/ai-source";

// Runs once per page load, renders nothing. First touch wins: if the visitor
// arrived from an AI assistant, remember it for the session (it survives
// navigation, unlike the utm in the URL), tag the Clarity session and fire one
// event. Everything is best-effort: it must never break a page or a payment.
export function TrafficSource() {
  useEffect(() => {
    try {
      let src = readAiSource();
      let fresh = false;
      if (!src) {
        src = classifyAiSource(location.search, document.referrer, location.hostname);
        if (src) {
          sessionStorage.setItem(AI_SOURCE_KEY, src);
          fresh = true;
        }
      }
      if (!src) return;
      const tag = src;
      // Clarity loads after the page (lazyOnload), so wait for it instead of
      // calling a function that does not exist yet.
      let tries = 0;
      const timer = setInterval(() => {
        if (window.clarity) {
          clearInterval(timer);
          window.clarity("set", "ai_source", tag);
          if (fresh) window.clarity("event", `ai_visit_${tag}`);
        } else if (++tries > 20) {
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    } catch {
      // analytics must never break a page
    }
  }, []);
  return null;
}
