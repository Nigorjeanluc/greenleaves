import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const CartDrawer = ({ isOpen, onClose, items = [] }) => {
  // Focus trap and escape key handling
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, onClose])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const drawerVariants = {
    hidden: { 
      x: '100%',
      transition: { type: 'spring', damping: 25, stiffness: 200 }
    },
    visible: { 
      x: 0,
      transition: { type: 'spring', damping: 25, stiffness: 200 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col reduce-motion"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
              <h2 id="cart-title" className="text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-100">
                Shopping Cart
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150"
                aria-label="Close cart"
              >
                ✕
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-body">
                    Add some premium crops to get started
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className="flex items-center space-x-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
                    >
                      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-2xl">
                        {item.image}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-serif font-semibold text-neutral-900 dark:text-neutral-100">
                          {item.name}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-body">
                          {item.quantity} × ${item.price}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-serif font-semibold text-primary-700 dark:text-primary-400">
                          ${(item.quantity * item.price).toFixed(2)}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-xs text-neutral-500 hover:text-red-500 transition-colors mt-1"
                        >
                          Remove
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-t border-neutral-200 dark:border-neutral-700 p-6 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <span className="font-serif font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                    Total
                  </span>
                  <span className="font-serif font-bold text-xl text-primary-700 dark:text-primary-400">
                    ${items.reduce((sum, item) => sum + (item.quantity * item.price), 0).toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-700 hover:bg-primary-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-150 reduce-motion"
                  >
                    Proceed to Checkout
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-primary-700 text-primary-700 dark:text-primary-400 hover:bg-primary-700 hover:text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-150 reduce-motion"
                  >
                    Request Quote
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer