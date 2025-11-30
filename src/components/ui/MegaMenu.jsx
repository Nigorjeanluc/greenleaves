import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const MegaMenu = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('greenhouse')

  const categories = {
    greenhouse: {
      title: 'Greenhouse Vegetables',
      description: 'Climate-controlled premium produce',
      image: '🍅',
      products: [
        { name: 'Premium Tomatoes', href: '/crops/premium-tomatoes' },
        { name: 'Bell Peppers', href: '/crops/bell-peppers' },
        { name: 'Cucumbers', href: '/crops/cucumbers' },
        { name: 'Eggplants', href: '/crops/eggplants' }
      ]
    },
    field: {
      title: 'Field Crops',
      description: 'Traditional field-grown excellence',
      image: '🌽',
      products: [
        { name: 'Sweet Corn', href: '/crops/sweet-corn' },
        { name: 'Green Beans', href: '/crops/green-beans' },
        { name: 'Carrots', href: '/crops/carrots' },
        { name: 'Onions', href: '/crops/onions' }
      ]
    },
    herbs: {
      title: 'Fresh Herbs',
      description: 'Aromatic herbs for culinary excellence',
      image: '🌿',
      products: [
        { name: 'Basil', href: '/crops/basil' },
        { name: 'Cilantro', href: '/crops/cilantro' },
        { name: 'Parsley', href: '/crops/parsley' },
        { name: 'Mint', href: '/crops/mint' }
      ]
    },
    seasonal: {
      title: 'Seasonal Produce',
      description: 'Limited-time specialty crops',
      image: '🥬',
      products: [
        { name: 'Seasonal Lettuce', href: '/crops/seasonal-lettuce' },
        { name: 'Spinach', href: '/crops/spinach' },
        { name: 'Kale', href: '/crops/kale' },
        { name: 'Arugula', href: '/crops/arugula' }
      ]
    }
  }

  const features = [
    {
      icon: '🌱',
      title: 'Organic Certified',
      description: 'International organic standards'
    },
    {
      icon: '📦',
      title: 'Custom Packaging',
      description: 'Tailored for your market'
    },
    {
      icon: '🚚',
      title: 'Global Shipping',
      description: 'Worldwide export capability'
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Mega Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-soil-900 border-t border-leaf-200 dark:border-soil-700 shadow-2xl z-50"
          >
            <div className="max-w-7xl mx-auto p-8">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Category Navigation */}
                <div className="lg:col-span-1">
                  <h3 className="font-semibold text-soil-900 dark:text-leaf-100 mb-4">
                    Product Categories
                  </h3>
                  <nav className="space-y-2">
                    {Object.entries(categories).map(([key, category]) => (
                      <button
                        key={key}
                        onMouseEnter={() => setActiveCategory(key)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          activeCategory === key
                            ? 'bg-leaf-100 dark:bg-leaf-800 text-leaf-700 dark:text-leaf-300'
                            : 'text-soil-600 dark:text-earth-300 hover:bg-leaf-50 dark:hover:bg-soil-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{category.image}</span>
                          <div>
                            <div className="font-medium">{category.title}</div>
                            <div className="text-xs opacity-75">{category.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-2">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-4xl">{categories[activeCategory].image}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-soil-900 dark:text-leaf-100">
                          {categories[activeCategory].title}
                        </h3>
                        <p className="text-soil-600 dark:text-earth-300">
                          {categories[activeCategory].description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {categories[activeCategory].products.map((product) => (
                        <a
                          key={product.name}
                          href={product.href}
                          className="p-4 rounded-lg border border-leaf-200 dark:border-soil-600 hover:border-leaf-400 dark:hover:border-leaf-600 hover:bg-leaf-50 dark:hover:bg-soil-800 transition-colors group"
                        >
                          <h4 className="font-medium text-soil-900 dark:text-leaf-100 group-hover:text-leaf-600 dark:group-hover:text-leaf-400">
                            {product.name}
                          </h4>
                          <p className="text-sm text-soil-600 dark:text-earth-300 mt-1">
                            View details & pricing
                          </p>
                        </a>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href={`/crops/${activeCategory}`}
                        className="inline-flex items-center text-leaf-600 hover:text-leaf-700 font-medium"
                      >
                        View all {categories[activeCategory].title.toLowerCase()} →
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Features & CTA */}
                <div className="lg:col-span-1">
                  <h3 className="font-semibold text-soil-900 dark:text-leaf-100 mb-4">
                    Why Choose Greenleaves
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {features.map((feature) => (
                      <div key={feature.title} className="flex items-start space-x-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h4 className="font-medium text-soil-900 dark:text-leaf-100 text-sm">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-soil-600 dark:text-earth-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-leaf-600 hover:bg-leaf-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                      Request Catalog
                    </button>
                    <button className="w-full border border-leaf-600 text-leaf-600 dark:text-leaf-400 hover:bg-leaf-600 hover:text-white py-3 px-4 rounded-lg font-medium transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MegaMenu