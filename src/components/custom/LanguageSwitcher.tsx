'use client';

import { Locale } from '@/i18n/config';
import { getCurrentLocaleFromCookie, setLocale } from '@/utils/locale';
import { useState, useEffect, useRef } from 'react';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>('id');
  const switcherRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
  ];

  const handleLanguageChange = (code: Locale) => {
    setSelectedLanguage(code);
    setLocale(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const userLocale = getCurrentLocaleFromCookie()
    setSelectedLanguage(userLocale ? userLocale : 'id');
  }, []);

  return (
    <div ref={switcherRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-full w-full px-3 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition cursor-pointer"
      >
        {selectedLanguage.toUpperCase()}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as Locale)}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition cursor-pointer"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
