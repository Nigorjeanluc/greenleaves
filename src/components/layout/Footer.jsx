import { motion } from 'framer-motion'

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: ['Greenhouse Vegetables', 'Field Crops', 'Fresh Herbs', 'Seasonal Produce']
    },
    {
      title: 'Services',
      links: ['Wholesale Export', 'Custom Packaging', 'Quality Assurance', 'Logistics Support']
    },
    {
      title: 'Company',
      links: ['About Us', 'Sustainability', 'Certifications', 'Careers']
    },
    {
      title: 'Support',
      links: ['Contact Us', 'Request Quote', 'Shipping Info', 'FAQ']
    }
  ]

  return (
    <footer className="bg-soil-900 dark:bg-soil-950 text-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 bg-leaf-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🌱</span>
              </div>
              <span className="font-display font-bold text-2xl text-leaf-300">
                Greenleaves
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-earth-300 mb-6 leading-relaxed"
            >
              Premium Rwandan crops grown with sustainable practices for global markets. 
              Your trusted partner in quality agricultural exports.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-4"
            >
              <div className="w-10 h-10 bg-earth-600 rounded-full flex items-center justify-center hover:bg-earth-500 transition-colors cursor-pointer">
                <span>📧</span>
              </div>
              <div className="w-10 h-10 bg-earth-600 rounded-full flex items-center justify-center hover:bg-earth-500 transition-colors cursor-pointer">
                <span>📱</span>
              </div>
              <div className="w-10 h-10 bg-earth-600 rounded-full flex items-center justify-center hover:bg-earth-500 transition-colors cursor-pointer">
                <span>🌐</span>
              </div>
            </motion.div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <h3 className="font-semibold text-leaf-300 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-earth-300 hover:text-leaf-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-soil-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-earth-400 text-sm mb-4 md:mb-0">
            © 2024 Greenleaves Rwanda. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-earth-400 hover:text-leaf-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-earth-400 hover:text-leaf-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-earth-400 hover:text-leaf-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer