import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 pt-16">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-100 via-secondary-50 to-neutral-100 dark:from-primary-900 dark:via-secondary-900 dark:to-neutral-900"
        />
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute inset-0 w-full h-full opacity-20"
        >
          <img 
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop" 
            alt="Greenhouse background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-serif font-bold text-white drop-shadow-lg mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              Premium
              <span className="text-primary-300 drop-shadow-lg block">
                Rwandan Crops
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-neutral-100 drop-shadow-md mb-8 leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              From our sustainable greenhouses and fertile fields to your global markets. 
              Experience the finest quality vegetables, herbs, and crops grown with care in Rwanda's rich soil.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 reduce-motion"
              >
                Browse Products
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-primary-700 text-primary-700 dark:text-primary-400 hover:bg-primary-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 reduce-motion"
              >
                Request Quote
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 drop-shadow-md font-serif">50+</div>
                <div className="text-sm text-neutral-200 drop-shadow-sm font-body">Crop Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 drop-shadow-md font-serif">25+</div>
                <div className="text-sm text-neutral-200 drop-shadow-sm font-body">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 drop-shadow-md font-serif">100%</div>
                <div className="text-sm text-neutral-200 drop-shadow-sm font-body">Sustainable</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-800 dark:to-secondary-800">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=500&fit=crop" 
                alt="Fresh greenhouse crops from Rwanda" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 font-serif">Fresh from Rwanda</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-body">Greenhouse & field-grown excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero