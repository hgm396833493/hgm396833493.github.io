'use client'

import { ArrowRight, CheckCircle, Calendar, Star, Users, Globe } from 'lucide-react'
import { useLanguage } from './language-context'
import type { Language } from '@/lib/i18n'

// SEO ALT labels for stat icons (multi-language)
const statIconAltLabels: Record<Language, Record<string, string>> = {
  zh: {
    years: '8年电商经验',
    tools: '工具测评&评级',
    clients: '卖家成功案例',
    countries: '拉美国家覆盖',
  },
  en: {
    years: '8 Years E-Commerce Experience',
    tools: 'Tool Reviews & Ratings',
    clients: 'Seller Success Stories',
    countries: 'LATAM Countries Covered',
  },
  es: {
    years: '8 Años de Experiencia E-Commerce',
    tools: 'Evaluaciones de Herramientas',
    clients: 'Casos de Éxito de Vendedores',
    countries: 'Países LATAM Cubiertos',
  },
  ru: {
    years: '8 Лет Опыта E-Commerce',
    tools: 'Обзоры Инструментов',
    clients: 'Истории Успеха Продавцов',
    countries: 'Страны LATAM Охвачены',
  },
}

export function HeroSection() {
  const { t, language } = useLanguage()
  const altLabels = statIconAltLabels[language]

  const stats = [
    { value: '8+', labelKey: 'years', icon: Calendar },
    { value: '50+', labelKey: 'tools', icon: Star },
    { value: '1000+', labelKey: 'clients', icon: Users },
    { value: '20+', labelKey: 'countries', icon: Globe },
  ]

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Professional LATAM E-commerce Tools</span>
          </div>

          {/* Heading - 字重区分增强节奏感 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            <span className="font-extrabold">{t.hero.title.split(' ').slice(0, 3).join(' ')}</span>
            <br className="hidden md:block" />
            <span className="font-medium text-primary">{t.hero.title.split(' ').slice(3).join(' ')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border rounded-xl font-semibold text-foreground hover:bg-secondary hover:border-primary/30 transition-all"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        {/* Stats - 数字更大更粗，带图标，使用i18n翻译 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const statLabels = t.stats as Record<string, string>
            const iconAlt = altLabels[stat.labelKey]
            return (
              <div 
                key={index} 
                className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-primary" aria-label={iconAlt} role="img" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{statLabels[stat.labelKey] || stat.labelKey}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
