import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import TrustBadges from '../components/ui/TrustBadges'
import AnimatedStats from '../components/ui/AnimatedStats'

const AboutUs = () => {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  const timeline = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Greenleaves was founded with a vision to transform Rwandan agriculture and connect local farmers to global markets.',
      image: '🌱'
    },
    {
      year: '2019',
      title: 'First Greenhouse',
      description: 'Construction of our first climate-controlled greenhouse facility, introducing modern farming techniques to Rwanda.',
      image: '🏭'
    },
    {
      year: '2020',
      title: 'Organic Certification',
      description: 'Achieved international organic certification, establishing our commitment to sustainable farming practices.',
      image: '🌿'
    },
    {
      year: '2021',
      title: 'Export Expansion',
      description: 'First international exports to European markets, marking our entry into the global agriculture trade.',
      image: '🌍'
    },
    {
      year: '2022',
      title: 'Technology Integration',
      description: 'Implementation of IoT sensors and smart farming technology across all facilities.',
      image: '📱'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Received international awards for sustainable agriculture and community impact.',
      image: '🏆'
    }
  ]

  const team = [
    {
      name: 'Jean Baptiste Uwimana',
      role: 'Founder & CEO',
      bio: 'Agricultural engineer with 15+ years experience in sustainable farming and international trade.',
      image: '👨‍🌾'
    },
    {
      name: 'Marie Claire Mukamana',
      role: 'Head of Operations',
      bio: 'Expert in greenhouse management and quality control with deep knowledge of export standards.',
      image: '👩‍💼'
    },
    {
      name: 'David Nkurunziza',
      role: 'Sustainability Director',
      bio: 'Environmental scientist focused on implementing eco-friendly farming practices.',
      image: '👨‍🔬'
    },
    {
      name: 'Sarah Ingabire',
      role: 'International Sales',
      bio: 'International business specialist managing global partnerships and market expansion.',
      image: '👩‍💻'
    }
  ]

  const values = [
    {
      title: 'Sustainability',
      description: 'We prioritize environmental stewardship in every aspect of our operations.',
      icon: '♻️'
    },
    {
      title: 'Quality',
      description: 'Uncompromising commitment to producing the highest quality crops.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Embracing technology and modern techniques to improve efficiency.',
      icon: '💡'
    },
    {
      title: 'Community',
      description: 'Supporting local farmers and contributing to Rwanda\'s economic growth.',
      icon: '🤝'
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1920&h=1080&fit=crop" 
            alt="Rwanda landscape background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-primary-100/80 via-secondary-50/80 to-neutral-100/80 dark:from-primary-900/80 dark:via-secondary-900/80 dark:to-neutral-900/80"
        />
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white drop-shadow-lg mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-neutral-100 drop-shadow-md mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Our Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 rounded-lg font-semibold transition-colors drop-shadow-md"
              >
                Meet the Team
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800 to-secondary-800 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=600&fit=crop" 
                alt="Rwanda agricultural landscape" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-600/20 flex items-center justify-center">
                <span className="text-9xl">🇷🇼</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Measurable results from our commitment to excellence
            </p>
          </motion.div>

          <AnimatedStats variant="cards" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              From humble beginnings to international recognition
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-800 transform -translate-x-1/2" />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
                      <div className="text-3xl mb-4">{item.image}</div>
                      <div className="text-2xl font-serif font-bold text-primary-700 dark:text-primary-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-neutral-900" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-lg"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              The passionate people behind Greenleaves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  {member.name}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              International recognition of our quality and practices
            </p>
          </motion.div>

          <TrustBadges variant="grid" />
        </div>
      </section>
    </div>
  )
}

export default AboutUs