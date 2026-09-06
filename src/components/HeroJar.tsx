"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Matter from "matter-js";

const WIDTH = 420;
const HEIGHT = 380;

// Jar body interior (the vertical-sided section below the neck/shoulder,
// where dropped items collect) — physics walls match the drawn outline
// below exactly, not an approximation. Wider than the first pass, per
// feedback that the jar read as too narrow.
const BODY_LEFT = 79;
const BODY_RIGHT = 341;
const BODY_TOP = 158;
const BODY_BOTTOM = 348;

// An item released above this line (i.e. dragged back out through the
// jar's mouth) is treated as having left the jar and gets respawned
// above the canvas to fall back in, instead of being left to rest
// wherever gravity happens to carry it outside — checked in the reference
// site (amywang.vercel.app) confirmed it does NOT do this (items dragged
// clear of the jar just fall back under plain gravity); this is a
// deliberate departure to keep the jar's contents always looking "inside
// the jar", not the reference's actual behavior.
const ESCAPE_Y = BODY_TOP - 10;

const BRAND = "#7c0000";
const BRAND_DEEP = "#560000";
const BRAND_TINT = "#f4e3e0";
const LINE = "#e7ded7";

// Small brand touches rendered as data-URI SVGs so Matter can use them as
// sprite textures alongside the two real product photos — same honest
// "illustration, not fabricated photography" language as the old
// HeroIllustration this component replaced.
function stickerBadgeDataUri(bg: string, fg: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="40" cy="40" r="38" fill="${bg}" stroke="${LINE}" stroke-width="2"/><text x="40" y="37" text-anchor="middle" font-family="Georgia,serif" font-size="13" letter-spacing="1.5" fill="${fg}">YUME</text><circle cx="40" cy="49" r="2.5" fill="${fg}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function washiTapeDataUri() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="26"><rect width="70" height="26" rx="2" fill="${BRAND_TINT}"/><rect x="4" y="4" width="62" height="4" fill="white" opacity="0.5"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Jar outline, drawn once and reused both as the visible SVG and as the
// mental model for where the physics walls below go.
function JarOutline() {
  return (
    <svg width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} fill="none" className="pointer-events-none absolute inset-0" aria-hidden="true">
      <path
        d={`M 125 16 Q 210 30 295 16
            L 305 63 Q 308 84 ${BODY_RIGHT} ${BODY_TOP}
            L ${BODY_RIGHT} ${BODY_BOTTOM} Q ${BODY_RIGHT} 364 308 364
            L 112 364 Q ${BODY_LEFT} 364 ${BODY_LEFT} ${BODY_BOTTOM}
            L ${BODY_LEFT} ${BODY_TOP} Q 112 84 116 63 Z`}
        stroke={LINE}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M 125 16 Q 210 30 295 16" stroke={BRAND} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeroJar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    // Client-only OS/browser motion preference — not state derived from
    // props/render, so this doesn't fit the rule's target case.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced !== false || !canvasRef.current) return;

    const { Engine, Render, Runner, Bodies, Body, Composite, Mouse, MouseConstraint, Events } = Matter;
    const engine = Engine.create();
    engine.gravity.y = 1;

    const render = Render.create({
      canvas: canvasRef.current,
      engine,
      options: { width: WIDTH, height: HEIGHT, background: "transparent", wireframes: false, pixelRatio: window.devicePixelRatio || 1 },
    });

    const wallOpts = { isStatic: true, render: { visible: false } };
    const walls = [
      Bodies.rectangle(BODY_LEFT, (BODY_TOP + BODY_BOTTOM) / 2, 6, BODY_BOTTOM - BODY_TOP, wallOpts),
      Bodies.rectangle(BODY_RIGHT, (BODY_TOP + BODY_BOTTOM) / 2, 6, BODY_BOTTOM - BODY_TOP, wallOpts),
      Bodies.rectangle((BODY_LEFT + BODY_RIGHT) / 2, BODY_BOTTOM, BODY_RIGHT - BODY_LEFT, 6, wallOpts),
    ];

    // Real product photo natural sizes (567x421 and 900x1164) — scale
    // computed to preserve aspect ratio, never stretched to a square.
    // Sized up from the first pass to match the wider jar.
    const items = [
      Bodies.rectangle(158, -40, 82, 61, {
        angle: -0.15,
        render: { sprite: { texture: "/recetario-medico.webp", xScale: 82 / 567, yScale: 82 / 567 } },
      }),
      Bodies.rectangle(236, -120, 63, 82, {
        angle: 0.1,
        render: { sprite: { texture: "/stickers-logo-muestra.webp", xScale: 82 / 1164, yScale: 82 / 1164 } },
      }),
      Bodies.circle(184, -220, 39, {
        render: { sprite: { texture: stickerBadgeDataUri(BRAND, "#fff"), xScale: 78 / 80, yScale: 78 / 80 } },
      }),
      Bodies.circle(263, -300, 30, {
        render: { sprite: { texture: stickerBadgeDataUri(BRAND_TINT, BRAND_DEEP), xScale: 60 / 80, yScale: 60 / 80 } },
      }),
      Bodies.rectangle(210, -380, 80, 30, {
        angle: 0.3,
        render: { sprite: { texture: washiTapeDataUri(), xScale: 80 / 70, yScale: 30 / 26 } },
      }),
    ];

    function respawn(body: Matter.Body) {
      const margin = 30;
      const x = BODY_LEFT + margin + Math.random() * (BODY_RIGHT - BODY_LEFT - margin * 2);
      Body.setPosition(body, { x, y: -60 - Math.random() * 160 });
      Body.setVelocity(body, { x: 0, y: 0 });
      Body.setAngularVelocity(body, 0);
    }

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } } });
    render.mouse = mouse;

    // @types/matter-js's IEvent doesn't declare the `body` property that
    // Matter actually attaches to "enddrag" events at runtime.
    Events.on(mouseConstraint, "enddrag", (event: Matter.IEvent<Matter.MouseConstraint>) => {
      const body = (event as Matter.IEvent<Matter.MouseConstraint> & { body?: Matter.Body }).body;
      if (!body) return;
      const outOfJar = body.position.y < ESCAPE_Y || body.position.x < BODY_LEFT - 40 || body.position.x > BODY_RIGHT + 40;
      if (outOfJar) respawn(body);
    });

    Composite.add(engine.world, [...walls, ...items, mouseConstraint]);

    // Keep dropped items inside the visible canvas even if flung hard —
    // an invisible ceiling/side guard well outside the jar, not part of
    // its visual walls. The enddrag check above handles the common case
    // (dropped above the jar); this is a backstop for edge cases like a
    // fast throw that carries a body past the guard before release.
    const guardOpts = { isStatic: true, render: { visible: false } };
    Composite.add(engine.world, [
      Bodies.rectangle(WIDTH / 2, HEIGHT + 20, WIDTH * 2, 20, guardOpts),
      Bodies.rectangle(-20, HEIGHT / 2, 20, HEIGHT * 2, guardOpts),
      Bodies.rectangle(WIDTH + 20, HEIGHT / 2, 20, HEIGHT * 2, guardOpts),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.getContext("2d")?.clearRect(0, 0, WIDTH, HEIGHT);
    };
  }, [reduced]);

  return (
    <div className="relative" style={{ width: WIDTH, height: HEIGHT }}>
      <JarOutline />
      {reduced === false && <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="relative cursor-grab active:cursor-grabbing" />}
      {reduced !== false && (
        // Reduced-motion / not-yet-known fallback: items pre-arranged at
        // rest, no simulation, so the hero never depends on JS physics
        // finishing to look composed.
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/recetario-medico.webp" alt="" width={72} height={54} className="absolute rotate-[-8deg] rounded object-cover" style={{ left: 130, top: 250 }} />
          <Image src="/stickers-logo-muestra.webp" alt="" width={58} height={74} className="absolute rotate-[6deg] rounded object-cover" style={{ left: 215, top: 265 }} />
          {/* eslint-disable-next-line @next/next/no-img-element -- inline data: URI illustrations, next/image doesn't handle these */}
          <img src={stickerBadgeDataUri(BRAND, "#fff")} alt="" className="absolute h-16 w-16" style={{ left: 105, top: 290 }} />
          {/* eslint-disable-next-line @next/next/no-img-element -- inline data: URI illustrations, next/image doesn't handle these */}
          <img src={stickerBadgeDataUri(BRAND_TINT, BRAND_DEEP)} alt="" className="absolute h-12 w-12" style={{ left: 265, top: 215 }} />
          {/* eslint-disable-next-line @next/next/no-img-element -- inline data: URI illustrations, next/image doesn't handle these */}
          <img src={washiTapeDataUri()} alt="" className="absolute rotate-[10deg]" style={{ left: 170, top: 205, width: 68 }} />
        </div>
      )}
    </div>
  );
}
