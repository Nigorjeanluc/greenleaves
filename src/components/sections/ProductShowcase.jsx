import { motion } from 'framer-motion'

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Tomatoes',
      category: 'Greenhouse',
      image: '🍅',
      moq: '500kg',
      availability: 'Year-round',
      description: 'Vine-ripened greenhouse tomatoes with exceptional flavor and shelf life.'
    },
    {
      id: 2,
      name: 'Fresh Lettuce',
      category: 'Hydroponic',
      image: '🥬',
      moq: '200kg',
      availability: 'Year-round',
      description: 'Crisp, clean lettuce grown in controlled hydroponic systems.'
    },
    {
      id: 3,
      name: 'Bell Peppers',
      category: 'Greenhouse',
      image: '🫑',
      moq: '300kg',
      availability: 'Year-round',
      description: 'Colorful, sweet bell peppers in red, yellow, and green varieties.'
    },
    {
      id: 4,
      name: 'Fresh Herbs',
      category: 'Field Grown',
      image: '🌿',
      moq: '50kg',
      availability: 'Seasonal',
      description: 'Aromatic herbs including basil, cilantro, and parsley.'
    }
  ]

  return (
    <section id="products" className="py-20 bg-white dark:bg-soil-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-soil-900 dark:text-leaf-50 mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-soil-600 dark:text-earth-300 max-w-3xl mx-auto">
            Discover our range of fresh, sustainably grown crops. Each product meets international quality standards 
            and is available for wholesale export worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-leaf-50 dark:bg-soil-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              
              <div className="mb-4">
                <span className="inline-block bg-leaf-100 dark:bg-leaf-800 text-leaf-700 dark:text-leaf-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-soil-900 dark:text-leaf-100 mb-2">
                  {product.name}
                </h3>
                <p className="text-soil-600 dark:text-earth-300 text-sm mb-4">
                  {product.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-soil-500 dark:text-earth-400">MOQ:</span>
                  <span className="font-medium text-soil-700 dark:text-earth-200">{product.moq}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-soil-500 dark:text-earth-400">Availability:</span>
                  <span className="font-medium text-soil-700 dark:text-earth-200">{product.availability}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-leaf-600 hover:bg-leaf-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  Get Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-leaf-600 text-leaf-600 dark:text-leaf-400 hover:bg-leaf-600 hover:text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductShowcase