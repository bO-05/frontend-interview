'use client'

import { useSearchStore } from '@/store/search'
import { useEffect, useState } from 'react'

export function SearchBar() {
  const [input, setInput] = useState('')
  const setSearch = useSearchStore((state) => state.setSearch)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input)
    }, 300)

    return () => clearTimeout(timer)
  }, [input, setSearch])

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-400">🔍</span>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 
                 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                 placeholder:text-gray-500 dark:placeholder:text-gray-400
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
      />
    </div>
  )
} 