import { create } from 'zustand'

interface FilterState {
  category?: string
  seller?: string
  minPrice?: number
  maxPrice?: number
  rating?: number
  inStock?: boolean
  sort?: 'price' | 'rating' | 'seller'
  direction?: 'asc' | 'desc'
  
  setCategory: (category?: string) => void
  setSeller: (seller?: string) => void
  setPriceRange: (min?: number, max?: number) => void
  setRating: (rating?: number) => void
  setInStock: (inStock?: boolean) => void
  setSort: (sort?: 'price' | 'rating' | 'seller', direction?: 'asc' | 'desc') => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  setCategory: (category) => set({ category }),
  setSeller: (seller) => set({ seller }),
  setPriceRange: (minPrice, maxPrice) => set({ minPrice, maxPrice }),
  setRating: (rating) => set({ rating }),
  setInStock: (inStock) => set({ inStock }),
  setSort: (sort, direction) => set({ sort, direction }),
  resetFilters: () => set({
    category: undefined,
    seller: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    rating: undefined,
    inStock: undefined,
    sort: undefined,
    direction: undefined
  })
})) 