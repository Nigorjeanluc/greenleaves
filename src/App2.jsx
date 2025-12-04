import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ProductShowcase from './components/sections/ProductShowcase'
import About from './components/sections/About'
import Footer from './components/layout/Footer'
import ProductCatalog from './pages/ProductCatalog'
import GreenhouseTour from './pages/GreenhouseTour'
import AboutUs from './pages/AboutUs'
import CartDrawer from './components/ui/CartDrawer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductCatalog />
      case 'greenhouse':
        return <GreenhouseTour />
      case 'about':
        return <AboutUs />
      default:
        return (
          <main>
            <Hero />
            <ProductShowcase />
            <About />
          </main>
        )
    }
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header 
          onNavigate={setCurrentPage} 
          onCartOpen={() => setIsCartOpen(true)}
          cartItemCount={cartItems.length}
        />
        {renderPage()}
        <Footer />
        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
        />
      </div>
    </LanguageProvider>
  )
}

export default App
