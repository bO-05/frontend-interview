'use client'

import { useThemeStore } from '@/store/theme'
import { type ReactNode, useEffect } from 'react'
import { Navbar } from './Navbar'
import { BackToTop } from '../shared/BackToTop'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useThemeStore()

  useEffect(() => {
    const initialTheme = localStorage.getItem('theme-storage') 
      ? JSON.parse(localStorage.getItem('theme-storage')!).state.theme
      : 'light'
    
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-4">
        {children}
      </main>
      <BackToTop />
    </div>
  )
} 