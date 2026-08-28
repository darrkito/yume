// Stylized illustration of a prescription-pad-style notepad, since no real
// product photography exists yet — an honest illustrative placeholder
// rather than fabricated stock photography. Swap for real photos once
// available (see products[].image).
export function NotepadMark({ compact = false }: { compact?: boolean }) {
  const w = compact ? 220 : 320;
  const h = compact ? 280 : 400;
  return (
    <svg width={w} height={h} viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recetario médico personalizado Yume">
      <rect x="10" y="10" width="300" height="380" rx="10" fill="var(--paper-raised)" stroke="var(--line)" strokeWidth="2" />
      <rect x="10" y="10" width="300" height="70" rx="10" fill="var(--brand)" />
      <rect x="10" y="60" width="300" height="20" fill="var(--brand)" />
      <circle cx="45" cy="45" r="9" fill="white" />
      <text x="68" y="52" fontFamily="Georgia, serif" fontSize="22" letterSpacing="4" fill="white">
        YUME
      </text>
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={i} x1="34" y1={120 + i * 24} x2="286" y2={120 + i * 24} stroke="var(--line)" strokeWidth="1.5" />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <circle key={i} cx="10" cy={20 + i * 24} r="3" fill="var(--paper)" stroke="var(--line)" strokeWidth="1" />
      ))}
    </svg>
  );
}
