import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, changeLanguage, languages } = useLanguage()

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-secondary-100 dark:bg-neutral-700 hover:bg-secondary-200 dark:hover:bg-neutral-600 transition-colors"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {currentLang?.code.toUpperCase()}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-xs text-neutral-500"
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-600 z-20"
            >
              <div className="py-2">
                {languages.map((language) => (
                  <motion.button
                    key={language.code}
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                    onClick={() => {
                      changeLanguage(language.code)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-left transition-colors ${
                      currentLanguage === language.code
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                    {currentLanguage === language.code && (
                      <span className="ml-auto text-primary-600 dark:text-primary-400">✓</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSelector