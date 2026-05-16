'use client'

import { Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from './language-context'

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#tools', label: t.nav.tools },
    { href: '#consulting', label: t.nav.consulting },
    { href: '#about', label: t.nav.about },
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-extrabold text-xl">M</span>
              </div>
              <span className="font-extrabold text-2xl text-background">Melitoolhub</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hgm123002@outlook.com"
                  className="flex items-center gap-3 text-background/70 hover:text-primary text-sm transition-colors"
                >
                  <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hgm123002@outlook.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary text-sm transition-colors"
                >
                  <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Shaanxi, China</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
