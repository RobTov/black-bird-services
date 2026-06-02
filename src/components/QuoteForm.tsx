import { useState, type FormEvent } from 'react';
import { useLang } from '../context/LanguageContext';

const serviceTypes: { key: string; labelKey: string }[] = [
  { key: 'Airport', labelKey: 'services.airport' },
  { key: 'Hourly/As Directed', labelKey: 'services.hourly' },
  { key: 'Point-to-Point', labelKey: 'services.pointToPoint' },
  { key: 'Wedding', labelKey: 'services.wedding' },
  { key: 'Other', labelKey: 'services.other' },
  { key: 'Birthday Party', labelKey: 'services.birthday' },
  { key: 'Prom', labelKey: 'services.prom' },
  { key: 'City Tour', labelKey: 'services.cityTour' },
  { key: 'Concert', labelKey: 'services.concert' },
  { key: 'Round Trip', labelKey: 'services.roundTrip' },
];

const timeOptions: string[] = [];
for (let h = 0; h < 24; h++) {
  for (let m = 0; m < 60; m += 30) {
    const hour = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const ampm = h < 12 ? 'AM' : 'PM';
    const min = m === 0 ? '00' : '30';
    timeOptions.push(`${hour}:${min}${ampm}`);
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  destination: string;
  serviceType: string;
  hours: string;
  passengers: string;
  phone: string;
  email: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  pickupDate: '',
  pickupTime: '',
  pickupLocation: '',
  destination: '',
  serviceType: '',
  hours: '1',
  passengers: '1',
  phone: '',
  email: '',
};

export default function QuoteForm() {
  const { t } = useLang();
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let val = e.target.value;
    if (field === 'passengers') {
      const n = parseInt(val);
      if (n < 1) val = '1';
      if (n > 4) val = '4';
    }
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const inputClass = 'w-full bg-dark-300/50 border border-white/10 px-4 py-3 text-white text-sm outline-none focus:border-gold/50 transition-colors duration-300 placeholder:text-white/20';
  const labelClass = 'block text-xs uppercase tracking-widest text-white/50 mb-2';
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-navy/30 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium">
              {t('form.title')}
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            {t('form.title')}
          </h2>
          <p className="text-white/40 font-heading italic text-lg">
            {t('form.subtitle')}
          </p>
        </div>

        {status === 'success' && (
          <div className="mb-8 p-4 bg-gold/10 border border-gold/30 text-gold text-center text-sm">
            {t('form.success')}
          </div>
        )}
        {status === 'error' && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-center text-sm">
            {t('form.error')}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>
              {t('form.firstName')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <input
              type="text"
              required
              value={form.firstName}
              onChange={update('firstName')}
              className={inputClass}
              placeholder={t('form.firstName')}
            />
          </div>

          <div>
            <label className={labelClass}>
              {t('form.lastName')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <input
              type="text"
              required
              value={form.lastName}
              onChange={update('lastName')}
              className={inputClass}
              placeholder={t('form.lastName')}
            />
          </div>

          <div>
            <label className={labelClass}>
              {t('form.pickupDate')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <input
              type="date"
              required
              value={form.pickupDate}
              onChange={update('pickupDate')}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              {t('form.pickupTime')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <select
              required
              value={form.pickupTime}
              onChange={update('pickupTime')}
              className={selectClass}
            >
              <option value="">{t('form.selectTime')}</option>
              {timeOptions.map((tOpt) => (
                <option key={tOpt} value={tOpt}>{tOpt}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              {t('form.pickupLocation')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <input
              type="text"
              required
              value={form.pickupLocation}
              onChange={update('pickupLocation')}
              className={inputClass}
              placeholder={t('form.pickupLocation')}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>{t('form.destination')}</label>
            <input
              type="text"
              value={form.destination}
              onChange={update('destination')}
              className={inputClass}
              placeholder={t('form.destination')}
            />
          </div>

          <div>
            <label className={labelClass}>
              {t('form.serviceType')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <select
              required
              value={form.serviceType}
              onChange={update('serviceType')}
              className={selectClass}
            >
              <option value="">{t('form.selectService')}</option>
              {serviceTypes.map((st) => (
                <option key={st.key} value={st.key}>{t(st.labelKey as any)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>
              {t('form.hours')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <select
              required
              value={form.hours}
              onChange={update('hours')}
              className={selectClass}
            >
              <option value="">{t('form.selectHours')}</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>
              {t('form.passengers')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <input
              type="number"
              required
              min={1}
              max={4}
              value={form.passengers}
              onChange={update('passengers')}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              {t('form.phone')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={update('phone')}
              className={inputClass}
              placeholder="+1 (214) 874-3618"
            />
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              {t('form.email')} <span className="text-gold">{t('form.required')}</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              className={inputClass}
              placeholder="email@example.com"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-gold text-dark font-bold text-sm uppercase tracking-[0.2em] hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-gold/20"
            >
              {status === 'loading' ? 'SENDING...' : t('form.submit')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
