import { useLang } from '../context/LanguageContext';

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-dark-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/images/c1.PNG"
                alt="Luxury car interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30 -z-10 hidden sm:block" />
          </div>

          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium">
                {t('about.title')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              {t('about.heading')}
            </h2>
            <p className="text-gold font-heading italic text-lg mb-6">
              {t('about.subtitle')}
            </p>

            <p className="text-white/60 leading-relaxed mb-4">
              {t('about.p1')}
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              {t('about.p2')}
            </p>

            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gold">24/7</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Availability</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gold">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Satisfaction</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-gold">1</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">Premium Vehicle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
