import React, { useState } from 'react';
import { Menu, X, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

export default function greenleavesClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      icon: '💻'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: '📱'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites',
      icon: '🌐'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences',
      icon: '🎨'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: '☁️'
    },
    {
      title: 'Consulting',
      description: 'Expert technology consulting and strategy',
      icon: '🤝'
    }
  ];

  const projects = [
    { name: 'E-Commerce Platform', category: 'Web Development' },
    { name: 'Mobile Banking App', category: 'Mobile Development' },
    { name: 'Healthcare Management System', category: 'Software Development' },
    { name: 'Education Portal', category: 'Web Development' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Greenleaves</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Portfolio</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Digital
              <span className="text-blue-600"> Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We transform ideas into powerful digital solutions that drive business growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">Recent projects we're proud of</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600"></div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
                  <h3 className="text-2xl font-semibold text-gray-900 mt-2">{project.name}</h3>
                  <button className="mt-4 text-blue-600 hover:text-blue-700 flex items-center">
                    View Project
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About greenleaves</h2>
              <p className="text-lg text-gray-600 mb-4">
                We are a team of passionate developers, designers, and innovators committed to creating exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With years of experience in the industry, we've helped businesses of all sizes achieve their digital transformation goals.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">30+</div>
                  <div className="text-gray-600 mt-2">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 mt-2">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600 mt-2">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg h-96"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss your next project</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">Kigali, Rwanda</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+250 XXX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@greenleaves.rw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Greenleaves</h3>
              <p className="text-gray-400">Building digital excellence through innovation and creativity.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition">Web Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 greenleaves. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
