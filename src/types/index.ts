export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: string
  images: ProductImage[]
  variants: ProductVariant[]
  availability: Availability
  moq: MOQ
  leadTime: LeadTime
  pricing: Pricing
  certifications: string[]
  origin: string
  growingMethod: 'greenhouse' | 'field' | 'hydroponic'
  organic: boolean
  featured: boolean
  seo: SEOData
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  width: number
  height: number
  format: 'webp' | 'avif' | 'jpg'
  sizes: string[]
}

export interface ProductVariant {
  id: string
  name: string
  sku: string
  packSize: string
  unit: string
  weight: number
  dimensions: Dimensions
}

export interface Availability {
  status: 'available' | 'seasonal' | 'limited' | 'out-of-stock'
  seasons: string[]
  harvestMonths: number[]
  nextAvailable?: string
}

export interface MOQ {
  quantity: number
  unit: string
  notes?: string
}

export interface LeadTime {
  min: number
  max: number
  unit: 'days' | 'weeks'
  notes?: string
}

export interface Pricing {
  currency: string
  tiers: PricingTier[]
  wholesale: boolean
  negotiable: boolean
}

export interface PricingTier {
  minQuantity: number
  maxQuantity?: number
  price: number
  unit: string
}

export interface Dimensions {
  length: number
  width: number
  height: number
  unit: 'cm' | 'in'
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  schema: Record<string, any>
}

export interface CartItem {
  productId: string
  variantId: string
  quantity: number
  price: number
  currency: string
}

export interface ShippingZone {
  id: string
  name: string
  countries: string[]
  rates: ShippingRate[]
  restrictions?: string[]
}

export interface ShippingRate {
  method: string
  price: number
  currency: string
  estimatedDays: number
  trackingAvailable: boolean
}