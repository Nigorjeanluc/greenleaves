import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/ui/ProductCard'
import FilterPanel from '../components/ui/FilterPanel'
import mockData from '../data/mockProducts.json'

const ProductCatalog = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState({})
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    setProducts(mockData.products)
    setFilteredProducts(mockData.products)
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Apply filters
    if (filters.category?.length > 0) {
      filtered = filtered.filter(product => 
        filters.category.includes(product.category)
      )
    }

    if (filters.organic) {
      filtered = filtered.filter(product => product.organic)
    }

    if (filters.growingMethod?.length > 0) {
      filtered = filtered.filter(product => 
        filters.growingMethod.includes(product.growingMethod)
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.base - b.pricing.base
        case 'name':
          return a.name.localeCompare(b.name)
        case 'moq':
          return parseInt(a.moq) - parseInt(b.moq)
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [products, filters, sortBy])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=1080&fit=crop" 
          alt="Fresh vegetables background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-serif font-bold text-white drop-shadow-lg mb-4">
            {t('products.title')}
          </h1>
          <p className="text-lg text-neutral-100 drop-shadow-md max-w-3xl">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <div className="flex items-center space-x-4">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {filteredProducts.length} products found
            </span>
            
            {/* View Mode Toggle */}
            <div className="flex bg-neutral-200 dark:bg-neutral-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                List
              </button>
            </div>
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-900 dark:text-neutral-100"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="moq">Sort by MOQ</option>
          </select>
        </motion.div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-80">
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
              isOpen={true}
              onToggle={() => {}}
            />
          </div>

          {/* Mobile Filter */}
          <div className="lg:hidden w-full">
            <FilterPanel
              filters={filters}
              onFilterChange={setFilters}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  viewMode={viewMode}
                />
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  No products found
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Try adjusting your filters or search terms
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCatalog