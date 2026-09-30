"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// matter-js is ~27 KB gz and the jar is hidden below sm anyway: on phones
// neither the physics library nor the canvas should ever load.
const HeroJar = dynamic(() => import("@/components/HeroJar").then((m) => m.HeroJar), { ssr: false });

export function HeroJarLazy() {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return wide ? <HeroJar /> : null;
}
