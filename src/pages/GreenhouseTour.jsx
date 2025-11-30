import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const GreenhouseTour = () => {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const [activeSection, setActiveSection] = useState('overview')
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const sections = [
    {
      id: 'overview',
      title: 'Greenhouse Overview',
      description: 'State-of-the-art climate-controlled facilities spanning 50 hectares',
      image: '🏭',
      stats: [
        { label: 'Total Area', value: '50 hectares' },
        { label: 'Annual Production', value: '500+ tons' },
        { label: 'Crop Varieties', value: '25+' }
      ]
    },
    {
      id: 'climate',
      title: 'Climate Control Systems',
      description: 'Advanced environmental monitoring and control technology',
      image: '🌡️',
      features: [
        'Automated temperature regulation (18-28°C)',
        'Humidity control (60-80% RH)',
        'CO2 enrichment systems',
        'LED grow light supplementation'
      ]
    },
    {
      id: 'irrigation',
      title: 'Smart Irrigation',
      description: 'Precision water and nutrient delivery systems',
      image: '💧',
      features: [
        'Drip irrigation with sensors',
        'Automated nutrient mixing',
        'Water recycling systems',
        'Soil moisture monitoring'
      ]
    },
    {
      id: 'monitoring',
      title: 'IoT Monitoring',
      description: 'Real-time data collection and analysis',
      image: '📊',
      features: [
        '24/7 environmental monitoring',
        'Predictive analytics',
        'Mobile app integration',
        'Alert systems'
      ]
    }
  ]

  const productionCycle = [
    { stage: 'Seeding', duration: '1-2 weeks', description: 'Controlled germination in seed trays' },
    { stage: 'Transplanting', duration: '2-3 weeks', description: 'Moving seedlings to growing beds' },
    { stage: 'Vegetative Growth', duration: '4-6 weeks', description: 'Rapid plant development phase' },
    { stage: 'Flowering', duration: '2-3 weeks', description: 'Pollination and fruit set' },
    { stage: 'Harvest', duration: '4-8 weeks', description: 'Continuous harvesting period' }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&h=1080&fit=crop" 
            alt="Modern greenhouse interior" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-primary-100/70 via-secondary-50/70 to-neutral-100/70 dark:from-primary-900/70 dark:via-secondary-900/70 dark:to-neutral-900/70"
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-serif font-bold text-white drop-shadow-lg mb-6">
              {t('greenhouse.title')}
            </h1>
            <p className="text-xl text-neutral-100 drop-shadow-md mb-8 max-w-2xl mx-auto">
              {t('greenhouse.subtitle')}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('greenhouse.tour')}
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🌱
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 text-6xl opacity-20"
        >
          🍅
        </motion.div>
      </section>

      {/* Interactive Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="flex bg-white dark:bg-neutral-800 rounded-2xl p-2 shadow-lg">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-primary-700 text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                  }`}
                >
                  <span className="text-2xl mr-2">{section.image}</span>
                  {section.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active Section Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                {sections.find(s => s.id === activeSection)?.title}
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                {sections.find(s => s.id === activeSection)?.description}
              </p>

              {/* Stats or Features */}
              {sections.find(s => s.id === activeSection)?.stats && (
                <div className="grid grid-cols-3 gap-4">
                  {sections.find(s => s.id === activeSection).stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <div className="text-2xl font-serif font-bold text-primary-700 dark:text-primary-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {sections.find(s => s.id === activeSection)?.features && (
                <ul className="space-y-3">
                  {sections.find(s => s.id === activeSection).features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full" />
                      <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-800 to-secondary-800 rounded-2xl overflow-hidden relative">
                <img 
                  src={activeSection === 'overview' ? 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=450&fit=crop' :
                       activeSection === 'climate' ? 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=450&fit=crop' :
                       activeSection === 'irrigation' ? 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&h=450&fit=crop' :
                       'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=450&fit=crop'}
                  alt={`Greenhouse ${activeSection}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-600/20 flex items-center justify-center">
                  <span className="text-8xl">{sections.find(s => s.id === activeSection)?.image}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Cycle Timeline */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {t('greenhouse.production_cycles')}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              From seed to harvest: Our optimized growing process
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary-200 dark:bg-primary-800 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {productionCycle.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-neutral-800 z-10" />
                  
                  <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-lg mt-8">
                    <h3 className="font-serif font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {stage.stage}
                    </h3>
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {stage.duration}
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GreenhouseTour