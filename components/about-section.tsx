'use client'

import { Award, Users, Globe } from 'lucide-react'
import { useLanguage } from './language-context'

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    { icon: Award, title: t.about.experience, description: '深耕跨境电商领域' },
    { icon: Users, title: t.about.expertise, description: '专业运营团队' },
    { icon: Globe, title: t.about.global, description: '深入了解拉美市场' },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.about.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl md:text-8xl font-bold text-primary mb-4">8+</div>
                <div className="text-xl text-foreground font-medium">{t.about.experience}</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
