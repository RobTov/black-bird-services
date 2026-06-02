import { useLang } from '../context/LanguageContext';

const serviceKeys = [
  'services.airport',
  'services.hourly',
  'services.pointToPoint',
  'services.wedding',
  'services.cityTour',
  'services.concert',
  'services.prom',
  'services.birthday',
  'services.roundTrip',
] as const;

const icons = [
  '✈️',
  '🕐',
  '↔️',
  '💍',
  '🏙️',
  '🎵',
  '🎓',
  '🎂',
  '🔄',
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-navy/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium">
              {t('services.title')}
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-white/40 font-heading italic text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceKeys.map((key, i) => (
            <div
              key={key}
              className="group relative p-6 bg-dark-200/50 border border-white/5 hover:border-gold/30 transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-2xl block mb-3">{icons[i]}</span>
                <h3 className="text-white font-heading text-xl font-semibold group-hover:text-gold transition-colors duration-300">
                  {t(key)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
