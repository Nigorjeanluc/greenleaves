import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const AnimatedCounter = ({ value, duration = 2 }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat().format(Math.floor(latest))
      }
    })
  }, [springValue])

  return <span ref={ref} />
}

const AnimatedStats = ({ variant = 'horizontal' }) => {
  const stats = [
    {
      id: 'production',
      value: 500,
      suffix: '+',
      label: 'Tons Produced',
      sublabel: 'Annually',
      icon: '🌾',
      color: 'leaf'
    },
    {
      id: 'varieties',
      value: 50,
      suffix: '+',
      label: 'Crop Varieties',
      sublabel: 'Available',
      icon: '🥬',
      color: 'earth'
    },
    {
      id: 'countries',
      value: 25,
      suffix: '+',
      label: 'Export Countries',
      sublabel: 'Worldwide',
      icon: '🌍',
      color: 'sky'
    },
    {
      id: 'sustainable',
      value: 100,
      suffix: '%',
      label: 'Sustainable',
      sublabel: 'Practices',
      icon: '♻️',
      color: 'harvest'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const getColorClasses = (color) => {
    const colors = {
      leaf: 'text-leaf-600 dark:text-leaf-400',
      earth: 'text-earth-600 dark:text-earth-400',
      sky: 'text-sky-600 dark:text-sky-400',
      harvest: 'text-harvest-600 dark:text-harvest-400'
    }
    return colors[color] || colors.leaf
  }

  const getBackgroundClasses = (color) => {
    const backgrounds = {
      leaf: 'bg-leaf-100 dark:bg-leaf-800/30',
      earth: 'bg-earth-100 dark:bg-earth-800/30',
      sky: 'bg-sky-100 dark:bg-sky-800/30',
      harvest: 'bg-harvest-100 dark:bg-harvest-800/30'
    }
    return backgrounds[color] || backgrounds.leaf
  }

  if (variant === 'cards') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={statVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`p-6 rounded-2xl text-center transition-all duration-300 ${getBackgroundClasses(stat.color)}`}
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className={`text-3xl lg:text-4xl font-bold mb-2 ${getColorClasses(stat.color)}`}>
              <AnimatedCounter value={stat.value} />
              {stat.suffix}
            </div>
            <h3 className="font-semibold text-soil-900 dark:text-leaf-100 mb-1">
              {stat.label}
            </h3>
            <p className="text-sm text-soil-600 dark:text-earth-300">
              {stat.sublabel}
            </p>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (variant === 'inline') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8 md:gap-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            variants={statVariants}
            className="text-center"
          >
            <div className={`text-4xl lg:text-5xl font-bold mb-2 ${getColorClasses(stat.color)}`}>
              <AnimatedCounter value={stat.value} />
              {stat.suffix}
            </div>
            <div className="text-soil-900 dark:text-leaf-100 font-medium">
              {stat.label}
            </div>
            <div className="text-sm text-soil-600 dark:text-earth-300">
              {stat.sublabel}
            </div>
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
      className="grid grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={statVariants}
          className="text-center group"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-5xl mb-4 inline-block"
          >
            {stat.icon}
          </motion.div>
          <div className={`text-4xl lg:text-5xl font-bold mb-2 ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform`}>
            <AnimatedCounter value={stat.value} />
            {stat.suffix}
          </div>
          <h3 className="font-semibold text-soil-900 dark:text-leaf-100 mb-1">
            {stat.label}
          </h3>
          <p className="text-sm text-soil-600 dark:text-earth-300">
            {stat.sublabel}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default AnimatedStats