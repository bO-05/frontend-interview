import { test, expect } from '@playwright/test'

test.describe('Cross-browser testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000')
  })

  test('Core features', async ({ page }) => {
    // Search debouncing
    await test.step('Search debouncing', async () => {
      const searchInput = page.getByPlaceholder('Search products...')
      await searchInput.type('headphones')
      await page.waitForTimeout(300)
      await expect(page.getByText('Wireless Headphones')).toBeVisible()
    })

    // Multiple filtering
    await test.step('Multiple filtering', async () => {
      // Category filter
      const categorySelect = page.locator('select').first()
      await categorySelect.selectOption('Electronics')
      
      // Wait for filtered results
      await expect(page.getByText('Wireless Headphones')).toBeVisible()
      await expect(page.getByText('Gaming Chair')).not.toBeVisible()

      // Price range
      await page.getByPlaceholder('Min').fill('100')
      await page.getByPlaceholder('Max').fill('300')
      
      // Rating filter
      const ratingSelect = page.locator('select', { hasText: 'Any Rating' })
      await ratingSelect.selectOption('4')
      
      // Stock filter
      await page.getByLabel('In Stock Only').check()
      
      // Verify filtered results exist
      await expect(page.getByText('No results')).not.toBeVisible()
    })

    // Sorting
    await test.step('Sorting', async () => {
      const sortSelect = page.locator('select', { hasText: 'Featured' })
      await sortSelect.selectOption('price-desc')
      await sortSelect.selectOption('seller-desc')
    })

    // Cart persistence
    await test.step('Cart persistence', async () => {
      await page.getByRole('button', { name: /Add to Cart/i }).first().click()
      await page.reload()
      await expect(page.locator('[data-testid="cart-badge"]')).toBeVisible()
      
      // Check cart items persist
      await page.getByRole('button', { name: '🛒' }).click()
      await expect(page.getByText('Subtotal:')).toBeVisible()
      
      // Close cart drawer before theme toggle
      await page.getByRole('button', { name: '✕' }).click()
      await page.waitForTimeout(300) // Wait for drawer animation
    })

    // Theme toggle
    await test.step('Theme toggle', async () => {
      await page.getByRole('button', { name: '🌙' }).click()
      await expect(page.locator('html')).toHaveClass(/dark/)
    })
  })

  test('Video features', async ({ page }) => {
    // Video autoplay
    await test.step('Video autoplay', async () => {
      const productCard = page.locator('.group').first()
      await productCard.hover()
      const video = productCard.locator('video')
      await expect(video).toBeVisible()
    })
  })

  test('Responsive design', async ({ page }) => {
    // Mobile view
    await test.step('Mobile view', async () => {
      await page.setViewportSize({ width: 375, height: 667 })
      await expect(page.locator('.grid-cols-1')).toBeVisible()
    })

    // Tablet view
    await test.step('Tablet view', async () => {
      await page.setViewportSize({ width: 768, height: 1024 })
      await expect(page.locator('.sm\\:grid-cols-2')).toBeVisible()
    })

    // Desktop view
    await test.step('Desktop view', async () => {
      await page.setViewportSize({ width: 1440, height: 900 })
      await expect(page.locator('.xl\\:grid-cols-4')).toBeVisible()
    })
  })

  // Previous test are already passed
  // Add new test at the end
  test('Error handling', async ({ page }) => {
    await test.step('Network error handling', async () => {
      // Force all API requests to fail
      await page.route('**/api/products**', route => route.abort())
      
      // Wait for all retries to finish (3 retries with exponential backoff)
      await page.reload()
      await page.waitForTimeout(6000) // Wait for all retries to complete
      
      // Now check error UI
      await expect(page.locator('[data-testid="error-message"]')).toBeVisible()
      await expect(page.locator('[data-testid="retry-button"]')).toBeVisible()
    })
  })
}) 