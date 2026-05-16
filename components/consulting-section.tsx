'use client'

import { Calendar, ArrowRight } from 'lucide-react'
import { useLanguage } from './language-context'

export function ConsultingSection() {
  const { t } = useLanguage()

  return (
    <section id="consulting" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.consulting.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.consulting.subtitle}
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.consulting.news.map((news, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <time>{news.date}</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {news.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {news.summary}
              </p>
              <a
                href="#consulting"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                {t.tools.viewMore}
                <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
