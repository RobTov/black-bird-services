import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import type { Language } from '../i18n/translations';

const flagSvg = (lang: Language) => {
  if (lang === 'en') {
    return (
      <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm shadow-sm">
        <clipPath id="uk"><path d="M0 0h60v30H0z" /></clipPath>
        <g clipPath="url(#uk)">
          <path fill="#012169" d="M0 0h60v30H0z" />
          <path fill="#FFF" d="m0 0 60 30m0-30L0 30" stroke="#FFF" strokeWidth="6" />
          <path fill="#C8102E" d="m0 0 60 30m0-30L0 30" stroke="#C8102E" strokeWidth="2" />
          <path fill="#FFF" d="M30 0v30M0 15h60" stroke="#FFF" strokeWidth="10" />
          <path fill="#C8102E" d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="4" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 30 20" className="w-6 h-4 rounded-sm shadow-sm">
      <rect width="30" height="20" fill="#C60B1E" />
      <rect y="5" width="30" height="10" fill="#FFC400" />
      <circle cx="15" cy="10" r="3" fill="#C60B1E" />
    </svg>
  );
};

const navLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.fleet', href: '#fleet' },
  { key: 'nav.contact', href: '#contact' },
] as const;

export default function Navbar() {
  const { lang, t, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-heading font-bold text-gold tracking-wider">
              BLACK BIRD
            </span>
            <span className="hidden sm:inline text-xs text-white/60 font-heading italic tracking-widest">
              Services
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors duration-300"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang('en')}
              className={`p-1.5 rounded transition-all duration-200 ${lang === 'en' ? 'ring-2 ring-gold scale-110' : 'opacity-50 hover:opacity-80'}`}
              title="English"
            >
              {flagSvg('en')}
            </button>
            <button
              onClick={() => setLang('es')}
              className={`p-1.5 rounded transition-all duration-200 ${lang === 'es' ? 'ring-2 ring-gold scale-110' : 'opacity-50 hover:opacity-80'}`}
              title="Español"
            >
              {flagSvg('es')}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-2 p-2 text-white/80 hover:text-gold"
              aria-label="Menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-200/95 backdrop-blur-md border-t border-gold/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors py-2"
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
