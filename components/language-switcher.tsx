'use client'

import { useState } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from './language-context'
import { languages, Language } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(l => l.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:bg-secondary transition-colors text-sm font-medium"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span>{currentLang?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-40 rounded-lg border border-border bg-card shadow-lg z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
