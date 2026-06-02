import { useLang } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-dark to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 border border-gold/30 rounded-full text-gold text-xs uppercase tracking-[0.2em]">
          <span className="w-2 h-2 bg-gold rounded-full" />
          {t('hero.title')}
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight">
          {t('hero.slogan')}
          <span className="block text-gold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading italic font-normal mt-2">
            {t('hero.sloganEn')}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-widest text-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#fleet"
            className="px-8 py-4 border border-white/20 text-white uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all duration-300"
          >
            {t('hero.quote')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
