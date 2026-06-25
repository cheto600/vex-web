interface WohnNowLogoProps {
  /** Color de marca (acento) para "now" y el tejado */
  accent?: string
  /** Color de la palabra "wohn" — claro sobre fondos oscuros */
  base?: string
  /** Tamaño de fuente en px */
  size?: number
}

export default function WohnNowLogo({
  accent = '#1D4ED8',
  base = '#FFFFFF',
  size = 24,
}: WohnNowLogoProps) {
  const roofWidth = size * 2.6

  return (
    <div
      className="relative inline-flex flex-col items-center leading-none"
      style={{ fontFamily: "'Manrope', sans-serif", paddingTop: size * 0.42 }}
    >
      <svg
        viewBox="0 0 70 17"
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: 0, width: roofWidth, color: accent }}
        aria-hidden="true"
      >
        <path
          d="M7 15 L35 3 L63 15"
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ fontSize: size, letterSpacing: '-0.04em' }}>
        <span style={{ fontWeight: 300, color: base }}>wohn</span>
        <span style={{ fontWeight: 800, color: accent }}>now</span>
      </span>
    </div>
  )
}
