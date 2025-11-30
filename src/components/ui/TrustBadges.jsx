import { motion } from 'framer-motion'

const TrustBadges = ({ variant = 'horizontal' }) => {
  const badges = [
    {
      id: 'organic',
      icon: '🌱',
      title: 'Organic Certified',
      subtitle: 'USDA & EU Standards',
      color: 'leaf'
    },
    {
      id: 'fairtrade',
      icon: '🤝',
      title: 'Fair Trade',
      subtitle: 'Ethical Sourcing',
      color: 'earth'
    },
    {
      id: 'globalgap',
      icon: '🌍',
      title: 'GlobalGAP',
      subtitle: 'Food Safety Certified',
      color: 'sky'
    },
    {
      id: 'iso',
      icon: '⭐',
      title: 'ISO 22000',
      subtitle: 'Quality Management',
      color: 'harvest'
    },
    {
      id: 'export',
      icon: '📦',
      title: 'Export Licensed',
      subtitle: '25+ Countries',
      color: 'soil'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const getColorClasses = (color) => {
    const colors = {
      leaf: 'bg-leaf-100 dark:bg-leaf-800 text-leaf-700 dark:text-leaf-300 border-leaf-200 dark:border-leaf-600',
      earth: 'bg-earth-100 dark:bg-earth-800 text-earth-700 dark:text-earth-300 border-earth-200 dark:border-earth-600',
      sky: 'bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-600',
      harvest: 'bg-harvest-100 dark:bg-harvest-800 text-harvest-700 dark:text-harvest-300 border-harvest-200 dark:border-harvest-600',
      soil: 'bg-soil-100 dark:bg-soil-700 text-soil-700 dark:text-soil-300 border-soil-200 dark:border-soil-500'
    }
    return colors[color] || colors.leaf
  }

  if (variant === 'grid') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${getColorClasses(badge.color)}`}
          >
            <div className="text-3xl mb-2">{badge.icon}</div>
            <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
            <p className="text-xs opacity-75">{badge.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            variants={badgeVariants}
            whileHover={{ scale: 1.1 }}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full border text-sm ${getColorClasses(badge.color)}`}
          >
            <span className="text-lg">{badge.icon}</span>
            <span className="font-medium">{badge.title}</span>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Default horizontal variant
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8"
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.id}
          variants={badgeVariants}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center group cursor-pointer"
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-2 transition-all duration-300 group-hover:shadow-lg ${getColorClasses(badge.color)}`}>
            <span className="text-2xl">{badge.icon}</span>
          </div>
          <h3 className="font-semibold text-soil-900 dark:text-leaf-100 mb-1 group-hover:text-leaf-600 dark:group-hover:text-leaf-400 transition-colors">
            {badge.title}
          </h3>
          <p className="text-sm text-soil-600 dark:text-earth-300">
            {badge.subtitle}
          </p>
          
          {/* Connector line (except for last item) */}
          {index < badges.length - 1 && (
            <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-leaf-200 dark:bg-soil-600 transform translate-x-4" />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TrustBadges