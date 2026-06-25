import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'
import WohnNowLogo from './WohnNowLogo'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4'

const NAV_LINKS = ['Funktionen', 'Für Vermieter', 'Für Mieter', 'Preise']

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background video — raw, no overlay.
          Mobile: object-cover (full screen) with the frame shifted left
          so the cabin + seated man stay in view.
          md+: object-cover centered (desktop unchanged). */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-[38%_center] md:object-center"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Foreground */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <div className="px-6 pt-6 md:px-12 lg:px-16">
          <nav className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
            <WohnNowLogo accent="#1D4ED8" base="#FFFFFF" size={24} />

            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm transition-colors hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <button className="hidden rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 md:block">
              Kostenlos starten
            </button>

            {/* Mobile hamburger — only visible on mobile */}
            <button
              className="flex items-center justify-center rounded-lg p-1 text-white md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>

          {/* Mobile menu panel — only visible on mobile */}
          {menuOpen && (
            <div className="liquid-glass mt-2 flex flex-col gap-1 rounded-xl p-3 md:hidden">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="mt-1 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                Kostenlos starten
              </button>
            </div>
          )}
        </div>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {/* Left column */}
            <div className="max-w-xl">
              <AnimatedHeading
                text={'Schäden melden.\nOhne Anrufe.'}
                className="mb-4 text-4xl font-normal md:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.04em' }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="mb-5 max-w-md text-base text-gray-200 md:text-lg">
                  WohnNow verbindet Vermieter und Mieter – Schäden einfach per
                  App melden, Status verfolgen, schneller erledigt.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="rounded-lg bg-white px-8 py-3 font-medium text-black">
                    Kostenlos starten
                  </button>
                  <button className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
                    So funktioniert's
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right column */}
            <div className="mt-8 flex items-end justify-start lg:mt-0 lg:justify-end">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
                  <span className="text-lg font-light md:text-xl lg:text-2xl">
                    Melden. Sehen. Erledigt.
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
