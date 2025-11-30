import { motion } from 'framer-motion'
import { useState } from 'react'

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 reduce-motion"
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900 dark:to-secondary-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {product.image}
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.organic && (
            <span className="bg-primary-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Organic
            </span>
          )}
          {product.featured && (
            <span className="bg-secondary-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute top-3 right-3 flex flex-col gap-2"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-white/90 dark:bg-neutral-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-150 reduce-motion"
          >
            ❤️
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-white/90 dark:bg-neutral-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-150 reduce-motion"
          >
            👁️
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {product.category}
          </span>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1 font-serif">
            {product.name}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-2 font-body">
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-500 dark:text-neutral-400">MOQ:</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-200">{product.moq}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500 dark:text-neutral-400">Availability:</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-200">{product.availability}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500 dark:text-neutral-400">Origin:</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-200">{product.origin || 'Rwanda'}</span>
          </div>
        </div>

        {/* Pricing */}
        {product.pricing && (
          <div className="mb-4 p-3 bg-primary-50 dark:bg-neutral-700 rounded-lg">
            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1 font-body">Starting from</div>
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-400 font-serif">
              ${product.pricing.base}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">/{product.pricing.unit}</span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-primary-700 hover:bg-primary-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-150 reduce-motion"
          >
            Get Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 border border-primary-700 text-primary-700 dark:text-primary-400 hover:bg-primary-700 hover:text-white rounded-lg text-sm font-medium transition-colors duration-150 reduce-motion"
          >
            Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard