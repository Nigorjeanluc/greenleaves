import { motion } from 'framer-motion'
import { useState } from 'react'

const FilterPanel = ({ filters, onFilterChange, isOpen, onToggle }) => {
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    growingMethod: [],
    organic: false,
    availability: [],
    region: []
  })

  const filterOptions = {
    category: [
      { id: 'greenhouse-vegetables', label: 'Greenhouse Vegetables', count: 24 },
      { id: 'field-crops', label: 'Field Crops', count: 18 },
      { id: 'fresh-herbs', label: 'Fresh Herbs', count: 12 },
      { id: 'seasonal-produce', label: 'Seasonal Produce', count: 8 }
    ],
    growingMethod: [
      { id: 'greenhouse', label: 'Greenhouse', count: 32 },
      { id: 'field', label: 'Field Grown', count: 28 },
      { id: 'hydroponic', label: 'Hydroponic', count: 16 }
    ],
    availability: [
      { id: 'year-round', label: 'Year Round', count: 28 },
      { id: 'seasonal', label: 'Seasonal', count: 34 },
      { id: 'limited', label: 'Limited Season', count: 8 }
    ],
    region: [
      { id: 'europe', label: 'Europe', count: 45 },
      { id: 'north-america', label: 'North America', count: 38 },
      { id: 'middle-east', label: 'Middle East', count: 42 },
      { id: 'asia', label: 'Asia', count: 35 }
    ]
  }

  const handleFilterToggle = (filterType, value) => {
    const newFilters = { ...activeFilters }
    
    if (filterType === 'organic') {
      newFilters.organic = !newFilters.organic
    } else {
      const currentValues = newFilters[filterType]
      if (currentValues.includes(value)) {
        newFilters[filterType] = currentValues.filter(v => v !== value)
      } else {
        newFilters[filterType] = [...currentValues, value]
      }
    }
    
    setActiveFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      category: [],
      growingMethod: [],
      organic: false,
      availability: [],
      region: []
    }
    setActiveFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).reduce((count, value) => {
      if (Array.isArray(value)) return count + value.length
      return count + (value ? 1 : 0)
    }, 0)
  }

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full bg-white dark:bg-soil-800 p-4 rounded-lg shadow-sm border border-leaf-200 dark:border-soil-600"
        >
          <span className="font-medium text-soil-900 dark:text-leaf-100">
            Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
          </span>
          <span className="text-leaf-600">{isOpen ? '▲' : '▼'}</span>
        </button>
      </div>

      {/* Filter Panel */}
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0 
        }}
        className={`lg:block lg:opacity-100 lg:h-auto overflow-hidden`}
      >
        <div className="bg-white dark:bg-soil-800 rounded-lg shadow-sm border border-leaf-200 dark:border-soil-600 p-6">
          {/* Filter Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-soil-900 dark:text-leaf-100">
              Filter Products
            </h3>
            {getActiveFilterCount() > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-leaf-600 hover:text-leaf-700 font-medium"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-soil-900 dark:text-leaf-100 mb-3">Category</h4>
            <div className="space-y-2">
              {filterOptions.category.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.category.includes(option.id)}
                    onChange={() => handleFilterToggle('category', option.id)}
                    className="w-4 h-4 text-leaf-600 border-gray-300 rounded focus:ring-leaf-500"
                  />
                  <span className="ml-3 text-sm text-soil-700 dark:text-earth-300">
                    {option.label}
                  </span>
                  <span className="ml-auto text-xs text-soil-500 dark:text-earth-400">
                    ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Growing Method Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-soil-900 dark:text-leaf-100 mb-3">Growing Method</h4>
            <div className="space-y-2">
              {filterOptions.growingMethod.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.growingMethod.includes(option.id)}
                    onChange={() => handleFilterToggle('growingMethod', option.id)}
                    className="w-4 h-4 text-leaf-600 border-gray-300 rounded focus:ring-leaf-500"
                  />
                  <span className="ml-3 text-sm text-soil-700 dark:text-earth-300">
                    {option.label}
                  </span>
                  <span className="ml-auto text-xs text-soil-500 dark:text-earth-400">
                    ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Organic Certification */}
          <div className="mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={activeFilters.organic}
                onChange={() => handleFilterToggle('organic')}
                className="w-4 h-4 text-leaf-600 border-gray-300 rounded focus:ring-leaf-500"
              />
              <span className="ml-3 text-sm font-medium text-soil-700 dark:text-earth-300">
                Organic Certified Only
              </span>
            </label>
          </div>

          {/* Availability Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-soil-900 dark:text-leaf-100 mb-3">Availability</h4>
            <div className="space-y-2">
              {filterOptions.availability.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="availability"
                    checked={activeFilters.availability.includes(option.id)}
                    onChange={() => handleFilterToggle('availability', option.id)}
                    className="w-4 h-4 text-leaf-600 border-gray-300 focus:ring-leaf-500"
                  />
                  <span className="ml-3 text-sm text-soil-700 dark:text-earth-300">
                    {option.label}
                  </span>
                  <span className="ml-auto text-xs text-soil-500 dark:text-earth-400">
                    ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Export Region Filter */}
          <div>
            <h4 className="font-medium text-soil-900 dark:text-leaf-100 mb-3">Export Regions</h4>
            <div className="space-y-2">
              {filterOptions.region.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.region.includes(option.id)}
                    onChange={() => handleFilterToggle('region', option.id)}
                    className="w-4 h-4 text-leaf-600 border-gray-300 rounded focus:ring-leaf-500"
                  />
                  <span className="ml-3 text-sm text-soil-700 dark:text-earth-300">
                    {option.label}
                  </span>
                  <span className="ml-auto text-xs text-soil-500 dark:text-earth-400">
                    ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default FilterPanel