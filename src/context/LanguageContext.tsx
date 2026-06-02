import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import translations, { type Language } from '../i18n/translations';

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  lang: Language;
  t: (key: TranslationKey) => string;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('bb-lang') as Language | null;
  if (stored === 'en' || stored === 'es') return stored;
  const navLang = navigator.language || navigator.languages?.[0] || '';
  return navLang.startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('bb-lang', l);
  };

  const t = (key: TranslationKey): string => translations[lang][key] || key;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
