# Greenleaves Technical Implementation Guide

## Project Overview
**Greenleaves** - Premium Rwandan agriculture export website with e-commerce functionality, multi-language support, and advanced branding features.

## Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Internationalization**: react-i18next
- **State Management**: React Context + Hooks
- **Build Tool**: Vite with optimizations

## Architecture

### Directory Structure
```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, ProductShowcase, About
│   ├── ui/             # Reusable UI components
│   ├── ecommerce/      # Cart, Checkout, Payment
│   └── branding/       # Brand-specific components
├── pages/              # Full page components
├── contexts/           # React contexts (Theme, Language)
├── hooks/              # Custom React hooks
├── data/               # Mock data and API responses
├── locales/            # Translation files
├── lib/                # Utilities and configurations
└── types/              # TypeScript definitions
```

## Key Features Implemented

### 1. Multi-Language Support (i18n)
- **Languages**: English, French, Kinyarwanda
- **Implementation**: react-i18next with browser detection
- **Fallback**: English as default language
- **Storage**: localStorage for persistence

```jsx
// Usage example
import { useTranslation } from 'react-i18next'
const { t } = useTranslation()
return <h1>{t('hero.title')}</h1>
```

### 2. E-commerce Functionality
- **Product Catalog**: Filterable and sortable product grid
- **Shopping Cart**: Slide-out drawer with spring animations
- **Product Details**: MOQ, pricing tiers, availability
- **Quote System**: Request quotes for bulk orders

### 3. Branding & Design System
- **Color Palette**: Agriculture-themed (primary green, secondary terracotta, neutrals)
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Animations**: Framer Motion with performance optimization
- **Responsive**: Mobile-first design approach

### 4. Advanced Pages
- **Home**: Hero with parallax, product showcase, company stats
- **Product Catalog**: Advanced filtering, sorting, grid/list views
- **Greenhouse Tour**: Interactive sections, production timeline
- **About Us**: Company story, team profiles, timeline, values
- **Contact**: Multi-purpose contact forms
- **News/Blog**: Article management system

## Component Library

### Core Components
```jsx
// Product Card with hover animations
<ProductCard product={product} index={0} />

// Filter Panel with slide animations
<FilterPanel 
  filters={filters}
  onFilterChange={setFilters}
  isOpen={isOpen}
  onToggle={setIsOpen}
/>

// Cart Drawer with spring physics
<CartDrawer 
  isOpen={isCartOpen}
  onClose={() => setIsCartOpen(false)}
  items={cartItems}
/>

// Language Selector
<LanguageSelector />

// Trust Badges with multiple variants
<TrustBadges variant="grid" />

// Animated Statistics
<AnimatedStats variant="cards" />
```

## Data Schema

### Product Interface
```typescript
interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: string
  images: ProductImage[]
  moq: string
  availability: string
  pricing: { base: number; unit: string }
  certifications: string[]
  origin: string
  growingMethod: 'greenhouse' | 'field' | 'hydroponic'
  organic: boolean
  featured: boolean
  leadTime: string
  shippingZones: string[]
}
```

## Animation System

### Performance-Optimized Animations
```jsx
// Hero parallax with transform optimization
const y = useTransform(scrollYProgress, [0, 1], [0, -100])

// Product card hover with scale and lift
whileHover={{ y: -8, scale: 1.03 }}
transition={{ duration: 0.2 }}

// Staggered grid animations
transition={{ delay: index * 0.1 }}

// Spring physics for drawers
transition={{ type: 'spring', damping: 25, stiffness: 200 }}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Internationalization Setup

### Translation Files Structure
```
locales/
├── en/translation.json    # English
├── fr/translation.json    # French
└── rw/translation.json    # Kinyarwanda
```

### Language Context Implementation
```jsx
const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setCurrentLanguage(lng)
    localStorage.setItem('language', lng)
  }
  
  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
```

## Recommended Integrations

### 1. Payment Processing
```jsx
// Stripe integration for cards
import { loadStripe } from '@stripe/stripe-js'
const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY)

// PayPal for alternative payments
import { PayPalButtons } from "@paypal/react-paypal-js"

// Invoice/Terms for wholesale
const wholesalePayment = {
  method: 'invoice',
  terms: 'net-30',
  creditLimit: 50000
}
```

### 2. Headless CMS (Recommended: Sanity)
```javascript
// Sanity schema for products
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'moq', title: 'Minimum Order Quantity', type: 'string' },
    { name: 'pricing', title: 'Pricing', type: 'object', fields: [
      { name: 'base', title: 'Base Price', type: 'number' },
      { name: 'unit', title: 'Unit', type: 'string' }
    ]},
    { name: 'certifications', title: 'Certifications', type: 'array', of: [{ type: 'string' }] }
  ]
}
```

### 3. Shipping Integration (Shippo)
```jsx
const calculateShipping = async (destination, weight) => {
  const response = await fetch('/api/shipping/rates', {
    method: 'POST',
    body: JSON.stringify({ destination, weight, origin: 'RW' })
  })
  return response.json()
}
```

### 4. Analytics & SEO
```jsx
// Google Analytics 4
import { gtag } from 'ga-gtag'
gtag('config', 'GA_MEASUREMENT_ID')

// Structured Data (JSON-LD)
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "brand": "Greenleaves",
  "offers": {
    "@type": "Offer",
    "price": product.pricing.base,
    "priceCurrency": "USD"
  }
}
```

## Performance Optimization

### Image Optimization
```jsx
// Modern image formats with fallbacks
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Product" loading="lazy" />
</picture>

// Responsive images
<img 
  srcSet="image-400.webp 400w, image-800.webp 800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  src="image-800.webp"
  alt="Product"
/>
```

### Code Splitting
```jsx
// Lazy load pages
const ProductCatalog = lazy(() => import('./pages/ProductCatalog'))
const GreenhouseTour = lazy(() => import('./pages/GreenhouseTour'))

// Wrap in Suspense
<Suspense fallback={<LoadingSpinner />}>
  <ProductCatalog />
</Suspense>
```

### Critical CSS
```javascript
// Vite config for critical CSS extraction
export default {
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    }
  }
}
```

## Testing Strategy

### Unit Testing (Recommended: Vitest + Testing Library)
```jsx
import { render, screen } from '@testing-library/react'
import { LanguageProvider } from '../contexts/LanguageContext'
import ProductCard from './ProductCard'

const renderWithProviders = (component) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  )
}

test('renders product information', () => {
  const product = { name: 'Test Product', /* ... */ }
  renderWithProviders(<ProductCard product={product} />)
  expect(screen.getByText('Test Product')).toBeInTheDocument()
})
```

### Accessibility Testing
```javascript
// Automated a11y testing with axe
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)

test('should not have accessibility violations', async () => {
  const { container } = renderWithProviders(<ProductCard product={product} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

## Lighthouse Performance Targets
- **Performance**: 90+
- **Accessibility**: 100
- **Best Practices**: 90+
- **SEO**: 90+

## Deployment Checklist

### Environment Variables
```bash
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_...
REACT_APP_PAYPAL_CLIENT_ID=...
REACT_APP_SANITY_PROJECT_ID=...
REACT_APP_GA_MEASUREMENT_ID=G-...
REACT_APP_API_BASE_URL=https://api.greenleaves.rw
```

### Build Optimization
```javascript
// Vite production config
export default {
  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
}
```

### SEO Meta Tags
```jsx
// Dynamic meta tags per page
<Helmet>
  <title>{product.name} - Premium Crops from Rwanda | Greenleaves</title>
  <meta name="description" content={product.description} />
  <meta property="og:title" content={product.name} />
  <meta property="og:description" content={product.description} />
  <meta property="og:image" content={product.images[0]} />
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>
```

## Next Steps for Production

1. **Backend API Development**
   - Product management endpoints
   - Order processing system
   - User authentication
   - Payment processing integration

2. **CMS Integration**
   - Sanity Studio setup
   - Content modeling
   - Image optimization pipeline
   - Editorial workflow

3. **Advanced Features**
   - Real-time inventory tracking
   - Advanced search with Algolia
   - Customer dashboard
   - Order tracking system

4. **Performance Monitoring**
   - Core Web Vitals tracking
   - Error monitoring (Sentry)
   - Analytics implementation
   - A/B testing setup

The current implementation provides a solid foundation for a premium agriculture export website with modern web technologies, excellent performance, and comprehensive internationalization support.