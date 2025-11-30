import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../contexts/ThemeContext'
import LanguageSelector from '../ui/LanguageSelector'

const Header = ({ onNavigate, onCartOpen, cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()

  const navItems = [
    { name: t('nav.home'), key: 'home' },
    { name: t('nav.products'), key: 'products' },
    { name: t('nav.about'), key: 'about' },
    { name: t('nav.greenhouse'), key: 'greenhouse' },
    { name: t('nav.sustainability'), key: 'sustainability' },
    { name: t('nav.contact'), key: 'contact' }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-leaf-50/95 dark:bg-soil-900/95 backdrop-blur-sm border-b border-leaf-200 dark:border-soil-700 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-leaf-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌱</span>
            </div>
            <span className="font-display font-bold text-xl text-leaf-700 dark:text-white">
              Greenleaves
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                whileHover={{ y: -2 }}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary-200 dark:bg-neutral-700 hover:bg-secondary-300 dark:hover:bg-neutral-600 transition-colors"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartOpen}
              className="relative p-2 rounded-lg bg-secondary-200 dark:bg-neutral-700 hover:bg-secondary-300 dark:hover:bg-neutral-600 transition-colors"
            >
              🛒
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {t('hero.cta_quote')}
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary-200 dark:bg-neutral-700"
            >
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden py-4 border-t border-primary-200 dark:border-neutral-700"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.key)
                  setIsMenuOpen(false)
                }}
                className="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header