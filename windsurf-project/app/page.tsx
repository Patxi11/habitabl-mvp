'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Logo from '@/components/Logo'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRight, Building2, Users, Target, MapPin, TrendingUp, Shield, Search, FileText, Home, CheckCircle, Rocket } from 'lucide-react'

export default function HomePage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Logo variant="full" size="lg" className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight tracking-tight max-w-7xl mx-auto">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
              {t('home.hero.exploreProjects')}
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:border-gray-600 hover:bg-gray-900 transition-colors">
              {t('nav.signUp')}
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pt-8 pb-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              {t('home.process.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">01</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step1.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step1.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">02</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step2.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step2.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">03</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step3.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step3.description')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">04</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step4.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step4.description')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {/* Step 5 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">05</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step5.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step5.description')}
              </p>
            </div>

            {/* Step 6 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">06</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step6.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step6.description')}
              </p>
            </div>

            {/* Step 7 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">07</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step7.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step7.description')}
              </p>
            </div>

            {/* Step 8 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-gray-300" />
              </div>
              <div className="text-xs text-gray-500 mb-2">08</div>
              <h3 className="text-sm font-medium mb-2 text-white">{t('home.process.step8.title')}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('home.process.step8.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <h3 className="text-lg font-medium mb-3 text-white">{t('home.cta.participate.title')}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {t('home.cta.participate.description')}
              </p>
              <Link href="/signup?type=participate" className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                {t('home.cta.participate.button')}
              </Link>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <h3 className="text-lg font-medium mb-3 text-white">{t('home.cta.promote.title')}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {t('home.cta.promote.description')}
              </p>
              <Link href="/signup?type=promote" className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                {t('home.cta.promote.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-gray-400">
                  <Logo size="sm" />
                </div>
                <span className="text-lg font-medium text-white">HABITABLE</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                {t('footer.tagline')}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">{t('footer.platform')}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/projects" className="hover:text-white transition-colors">{t('nav.exploreProjects')}</Link></li>
                  <li><Link href="/submit" className="hover:text-white transition-colors">{t('nav.submitProject')}</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">{t('footer.community')}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/signup" className="hover:text-white transition-colors">{t('footer.join')}</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link></li>
                  <li><Link href="/support" className="hover:text-white transition-colors">{t('footer.support')}</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-white text-sm">{t('footer.legal')}</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
