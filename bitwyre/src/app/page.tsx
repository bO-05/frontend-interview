import { FilterPanel } from '@/components/filters/FilterPanel'
import { ProductGrid } from '@/components/products/ProductGrid'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 p-4">
        {/* Sidebar - collapsible on mobile */}
        <aside className="lg:w-64 flex-shrink-0">
          <FilterPanel />
        </aside>
        
        {/* Main content */}
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </div>
  )
}
