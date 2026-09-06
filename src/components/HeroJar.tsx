"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Matter from "matter-js";

const WIDTH = 320;
const HEIGHT = 360;

// Jar body interior (the vertical-sided section below the neck/shoulder,
// where dropped items actually collect) — physics walls are placed to
// match the drawn outline below exactly, not an approximation.
const BODY_LEFT = 60;
const BODY_RIGHT = 260;
const BODY_TOP = 150;
const BODY_BOTTOM = 330;

const BRAND = "#7c0000";
const BRAND_DEEP = "#560000";
const BRAND_TINT = "#f4e3e0";
const LINE = "#e7ded7";

// Small brand touches rendered as data-URI SVGs so Matter can use them as
// sprite textures alongside the two real product photos — same honest
// "illustration, not fabricated photography" language as HeroIllustration.
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
        d={`M 95 15 Q 160 28 225 15
            L 232 60 Q 235 80 260 ${BODY_TOP}
            L 260 ${BODY_BOTTOM} Q 260 345 235 345
            L 85 345 Q 60 345 60 ${BODY_BOTTOM}
            L 60 ${BODY_TOP} Q 85 80 88 60 Z`}
        stroke={LINE}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M 95 15 Q 160 28 225 15" stroke={BRAND} strokeWidth="2.5" strokeLinecap="round" />
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

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;
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
    const items = [
      Bodies.rectangle(120, -40, 70, 52, {
        angle: -0.15,
        render: { sprite: { texture: "/recetario-medico.webp", xScale: 70 / 567, yScale: 70 / 567 } },
      }),
      Bodies.rectangle(180, -120, 54, 70, {
        angle: 0.1,
        render: { sprite: { texture: "/stickers-logo-muestra.webp", xScale: 70 / 1164, yScale: 70 / 1164 } },
      }),
      Bodies.circle(140, -220, 34, {
        render: { sprite: { texture: stickerBadgeDataUri(BRAND, "#fff"), xScale: 68 / 80, yScale: 68 / 80 } },
      }),
      Bodies.circle(200, -300, 26, {
        render: { sprite: { texture: stickerBadgeDataUri(BRAND_TINT, BRAND_DEEP), xScale: 52 / 80, yScale: 52 / 80 } },
      }),
      Bodies.rectangle(160, -380, 70, 26, {
        angle: 0.3,
        render: { sprite: { texture: washiTapeDataUri(), xScale: 1, yScale: 1 } },
      }),
    ];

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } } });
    render.mouse = mouse;

    Composite.add(engine.world, [...walls, ...items, mouseConstraint]);

    // Keep dropped items inside the visible canvas even if flung hard —
    // an invisible ceiling/side guard well outside the jar, not part of
    // its visual walls.
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
          <Image src="/recetario-medico.webp" alt="" width={64} height={48} className="absolute rotate-[-8deg] rounded object-cover" style={{ left: 95, top: 230 }} />
          <Image src="/stickers-logo-muestra.webp" alt="" width={50} height={64} className="absolute rotate-[6deg] rounded object-cover" style={{ left: 165, top: 245 }} />
          {/* eslint-disable-next-line @next/next/no-img-element -- inline data: URI illustrations, next/image doesn't handle these */}
          <img src={stickerBadgeDataUri(BRAND, "#fff")} alt="" className="absolute h-14 w-14" style={{ left: 80, top: 270 }} />
          {/* eslint-disable-next-line @next/next/no-img-element -- inline data: URI illustrations, next/image doesn't handle these */}
          <img src={stickerBadgeDataUri(BRAND_TINT, BRAND_DEEP)} alt="" className="absolute h-10 w-10" style={{ left: 200, top: 200 }} />
          {/* eslint-disable-next-line @next/next/no-img-element -- inline data: URI illustrations, next/image doesn't handle these */}
          <img src={washiTapeDataUri()} alt="" className="absolute rotate-[10deg]" style={{ left: 130, top: 190, width: 60 }} />
        </div>
      )}
    </div>
  );
}
