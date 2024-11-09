'use client'

import { useFilterStore } from '@/store/filter'
import { mockProducts } from '@/mocks/products'
import { useState } from 'react'

export function FilterPanel() {
  const [isOpen, setIsOpen] = useState(true)
  const filters = useFilterStore()

  const categories = Array.from(new Set(mockProducts.map(p => p.category)))
  const sellers = Array.from(new Set(mockProducts.map(p => p.seller)))
  const maxPrice = Math.max(...mockProducts.map(p => p.price))

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Filters</h2>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-lg
                     hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isOpen ? '−' : '+'}
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 space-y-6">
          {/* Category Filter */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-400">Category</h3>
            <select 
              value={filters.category || ''} 
              onChange={(e) => filters.setCategory(e.target.value || undefined)}
              className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700
                       text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Seller Filter */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-400">Seller</h3>
            <select 
              value={filters.seller || ''} 
              onChange={(e) => filters.setSeller(e.target.value || undefined)}
              className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700
                       text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Sellers</option>
              {sellers.map(seller => (
                <option key={seller} value={seller}>{seller}</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-400">Price Range</h3>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice || ''}
                onChange={(e) => filters.setPriceRange(
                  e.target.value ? Number(e.target.value) : undefined,
                  filters.maxPrice
                )}
                className="w-1/2 p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700
                         text-gray-900 dark:text-gray-100
                         placeholder:text-gray-500 dark:placeholder:text-gray-400
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice || ''}
                onChange={(e) => filters.setPriceRange(
                  filters.minPrice,
                  e.target.value ? Number(e.target.value) : undefined
                )}
                className="w-1/2 p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700
                         text-gray-900 dark:text-gray-100
                         placeholder:text-gray-500 dark:placeholder:text-gray-400
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-400">Minimum Rating</h3>
            <select 
              value={filters.rating || ''} 
              onChange={(e) => filters.setRating(e.target.value ? Number(e.target.value) : undefined)}
              className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700
                       text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Any Rating</option>
              {[4, 3, 2, 1].map(rating => (
                <option key={rating} value={rating}>{rating}+ ⭐</option>
              ))}
            </select>
          </div>

          {/* Stock Filter */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.inStock || false}
              onChange={(e) => filters.setInStock(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 
                       focus:ring-blue-500 dark:border-gray-600"
            />
            <span className="text-sm text-gray-900 dark:text-gray-100">In Stock Only</span>
          </label>

          {/* Sort Options */}
          <div className="space-y-2">
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-400">Sort By</h3>
            <select 
              value={`${filters.sort || ''}-${filters.direction || ''}`}
              onChange={(e) => {
                const [sort, direction] = e.target.value.split('-') as ['price' | 'rating' | 'seller' | '', 'asc' | 'desc' | '']
                filters.setSort(sort || undefined, direction || undefined)
              }}
              className="w-full p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
              <option value="seller-desc">Recommended Sellers</option>
            </select>
          </div>

          {/* Reset Button */}
          <button
            onClick={filters.resetFilters}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 
                     dark:hover:bg-gray-600 rounded-lg transition-colors text-sm
                     text-gray-900 dark:text-gray-100"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  )
}
