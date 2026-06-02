import { useLang } from '../context/LanguageContext';

const quickLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.fleet', href: '#fleet' },
  { key: 'nav.contact', href: '#contact' },
] as const;

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative bg-dark-200 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-navy/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/images/logo-bg-removed.png" alt="Black Bird Services" className="h-12 w-auto mb-4" />
            <p className="text-white/40 text-sm leading-relaxed italic font-heading">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-gold transition-colors duration-300"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12148743618"
                  className="text-sm text-white/40 hover:text-gold transition-colors duration-300 block"
                >
                  +1 (214) 874-3618
                </a>
              </li>
              <li>
                <a
                  href="mailto:alexm900902@gmail.com"
                  className="text-sm text-white/40 hover:text-gold transition-colors duration-300 block break-all"
                >
                  alexm900902@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="text-center text-xs text-white/30">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
