// Layered, gently-animated illustration for the homepage hero — built from
// the same honest illustration language as NotepadMark (no fabricated
// product photography), composed as three depth layers (two sticker
// badges + the notepad) that drift independently for a "motion graphic"
// feel. Ambient only, never scroll-triggered, transform-only so it's
// gated cleanly behind prefers-reduced-motion in globals.css.
export function HeroIllustration() {
  return (
    <svg
      width="340"
      height="360"
      viewBox="0 0 340 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustración de papelería personalizada Yume: recetario y stickers"
      className="hero-illustration max-w-full"
    >
      {/* back sticker badge */}
      <g className="layer-a" style={{ transformOrigin: "58px 250px" }}>
        <circle cx="58" cy="250" r="46" fill="var(--brand-tint)" stroke="var(--line)" strokeWidth="2" />
        <text x="58" y="246" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" letterSpacing="2" fill="var(--brand-deep)">
          YUME
        </text>
        <circle cx="58" cy="262" r="3" fill="var(--brand)" />
      </g>

      {/* front sticker badge */}
      <g className="layer-b" style={{ transformOrigin: "284px 96px" }}>
        <circle cx="284" cy="96" r="38" fill="var(--brand)" />
        <text x="284" y="92" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" letterSpacing="2" fill="#fff">
          YUME
        </text>
        <circle cx="284" cy="106" r="2.5" fill="#fff" />
      </g>

      {/* washi-tape accent */}
      <rect x="196" y="18" width="70" height="22" rx="2" fill="var(--brand-tint)" opacity="0.9" transform="rotate(-8 231 29)" />

      {/* notepad, front-most layer */}
      <g className="layer-c" style={{ transformOrigin: "170px 190px" }}>
        <rect x="70" y="40" width="200" height="260" rx="10" fill="var(--paper-raised)" stroke="var(--line)" strokeWidth="2" />
        <rect x="70" y="40" width="200" height="46" rx="10" fill="var(--brand)" />
        <rect x="70" y="76" width="200" height="10" fill="var(--brand)" />
        <circle cx="96" cy="63" r="7" fill="#fff" />
        <text x="113" y="68" fontFamily="Georgia, serif" fontSize="16" letterSpacing="3" fill="#fff">
          YUME
        </text>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="90" y1={122 + i * 22} x2="250" y2={122 + i * 22} stroke="var(--line)" strokeWidth="1.5" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <circle key={i} cx="70" cy={50 + i * 22} r="2.6" fill="var(--paper)" stroke="var(--line)" strokeWidth="1" />
        ))}
      </g>
    </svg>
  );
}
