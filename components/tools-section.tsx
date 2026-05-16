'use client'

import { ArrowRight, Store, BarChart3, Target } from 'lucide-react'
import { useLanguage } from './language-context'
import type { Language } from '@/lib/i18n'

const toolIcons = [Store, BarChart3, Target]

// SEO ALT tags for tool icons (multi-language support)
const toolAltTags: Record<Language, string[]> = {
  zh: [
    'Mercado Libre卖家工具图标',
    '跨境电商ERP管理系统图标',
    '拉美市场广告投放工具图标',
  ],
  en: [
    'Mercado Libre seller tools icon',
    'ERP management system for e-commerce',
    'LATAM e-commerce ad management tools',
  ],
  es: [
    'Icono de herramientas de vendedor de Mercado Libre',
    'Icono del sistema de gestión ERP para e-commerce',
    'Icono de herramientas de publicidad para LATAM',
  ],
  ru: [
    'Иконка инструментов продавца Mercado Libre',
    'Иконка системы управления ERP для электронной коммерции',
    'Иконка рекламных инструментов для LATAM',
  ],
}

export function ToolsSection() {
  const { t, language } = useLanguage()
  const currentAltTags = toolAltTags[language]

  const tools = [
    {
      icon: toolIcons[0],
      altTag: currentAltTags[0],
      title: t.tools.card1.title,
      description: t.tools.card1.description,
      color: 'bg-blue-50 border-blue-100',
      iconBg: 'bg-blue-500',
      hoverShadow: 'hover:shadow-blue-100',
    },
    {
      icon: toolIcons[1],
      altTag: currentAltTags[1],
      title: t.tools.card2.title,
      description: t.tools.card2.description,
      color: 'bg-cyan-50 border-cyan-100',
      iconBg: 'bg-cyan-500',
      hoverShadow: 'hover:shadow-cyan-100',
    },
    {
      icon: toolIcons[2],
      altTag: currentAltTags[2],
      title: t.tools.card3.title,
      description: t.tools.card3.description,
      color: 'bg-indigo-50 border-indigo-100',
      iconBg: 'bg-indigo-500',
      hoverShadow: 'hover:shadow-indigo-100',
    },
  ]

  return (
    <section id="tools" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.tools.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.tools.subtitle}
          </p>
        </div>

        {/* Tool Cards - 加阴影和hover效果 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <article
                key={index}
                className={`group bg-card rounded-2xl border-2 ${tool.color} overflow-hidden shadow-sm hover:shadow-xl ${tool.hoverShadow} transition-all duration-300 hover:-translate-y-2`}
                aria-label={tool.altTag}
              >
                {/* Icon Area */}
                <div className="p-8 pb-0">
                  <div 
                    className={`w-16 h-16 ${tool.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-6`}
                    role="img"
                    aria-label={tool.altTag}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  {/* nofollow for single-page site without detail pages */}
                  <a
                    href="#tools"
                    rel="nofollow"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
                  >
                    {t.tools.viewMore}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
