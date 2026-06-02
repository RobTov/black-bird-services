import { useLang } from '../context/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

export default function Fleet() {
  const { t } = useLang();

  const features: { key: TranslationKey; icon: string }[] = [
    { key: 'fleet.feature1', icon: '🪑' },
    { key: 'fleet.feature2', icon: '👥' },
    { key: 'fleet.feature3', icon: '🌡️' },
    { key: 'fleet.feature4', icon: '📺' },
  ];

  return (
    <section id="fleet" className="relative py-24 lg:py-32 bg-dark-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/[0.02] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium">
              {t('fleet.title')}
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {t('fleet.heading')}
          </h2>
          <p className="text-white/40 font-heading italic text-lg">
            {t('fleet.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-16/9 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80"
                alt="Cadillac XT6"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gold/30 -z-10 hidden sm:block" />
          </div>

          <div>
            <h3 className="text-3xl font-heading font-bold text-gold mb-2">
              {t('fleet.carName')}
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              {t('fleet.p1')}
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              {t('fleet.p2')}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.key} className="flex items-center gap-3 p-3 bg-dark/50 border border-white/5">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-sm text-white/70">{t(f.key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
