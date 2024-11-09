'use client'

import { useThemeStore } from '@/store/theme'
import { SearchBar } from '../search/SearchBar'
import { CartDrawer } from '../cart/CartDrawer'
import Link from 'next/link'

export function Navbar() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🛍️</span>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Bitwyre E-Shop
            </span>
          </Link>

          <div className="flex-1 max-w-2xl mx-4">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  )
} 