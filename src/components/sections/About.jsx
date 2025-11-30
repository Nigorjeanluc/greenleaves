import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Sustainable Farming',
      description: 'Eco-friendly practices that protect Rwanda\'s natural resources while maximizing yield quality.'
    },
    {
      icon: '🏭',
      title: 'Modern Greenhouses',
      description: 'Climate-controlled facilities ensuring consistent quality and year-round production.'
    },
    {
      icon: '🌍',
      title: 'Global Standards',
      description: 'International certifications and quality controls meeting the highest export requirements.'
    },
    {
      icon: '📦',
      title: 'Reliable Supply',
      description: 'Consistent delivery schedules and flexible packaging options for global distribution.'
    }
  ]

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-neutral-800 dark:to-neutral-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop" 
          alt="Sustainable farming background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-soil-900 dark:text-leaf-50 mb-6">
              Growing Excellence in
              <span className="text-leaf-600 dark:text-leaf-400 block">
                Rwanda's Heart
              </span>
            </h2>
            
            <p className="text-lg text-soil-600 dark:text-earth-300 mb-8 leading-relaxed">
              Greenleaves combines traditional Rwandan agricultural wisdom with cutting-edge farming technology. 
              Our commitment to sustainability and quality has made us a trusted partner for international buyers 
              seeking premium African produce.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-leaf-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-soil-900 dark:text-leaf-100">Certified Organic</h4>
                  <p className="text-soil-600 dark:text-earth-300">International organic certification standards</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-soil-900 dark:text-leaf-100">Fair Trade Practices</h4>
                  <p className="text-soil-600 dark:text-earth-300">Supporting local communities and farmers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-harvest-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-soil-900 dark:text-leaf-100">Quality Assurance</h4>
                  <p className="text-soil-600 dark:text-earth-300">Rigorous testing and quality control processes</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-soil-800 p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-soil-900 dark:text-leaf-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-soil-600 dark:text-earth-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About