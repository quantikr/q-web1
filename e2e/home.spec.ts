import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('/')

    // Check if the title is present
    const title = page.getByRole('heading', {
      name: /transform your digital future with confidence/i,
    })
    await expect(title).toBeVisible()

    // Check subtitle
    const subtitle = page.getByText(
      /innovative solutions powered by expertise/i
    )
    await expect(subtitle).toBeVisible()
  })

  test('should have proper dark mode support', async ({ page }) => {
    await page.goto('/')

    // Check initial light mode
    const body = page.locator('body')
    await expect(body).toHaveAttribute('class', /bg-background/)

    // Click theme toggle
    await page.getByRole('button', { name: /toggle theme/i }).click()

    // Verify dark mode is active
    await expect(body).toHaveAttribute('class', /dark/)

    // Verify dark mode styles are applied
    const main = page.locator('main')
    await expect(main).toHaveCSS('background-color', /rgb\(10, 10, 10\)/)
  })

  test('should be responsive', async ({ page }) => {
    await page.goto('/')

    // Test desktop view (1280x720)
    await page.setViewportSize({ width: 1280, height: 720 })
    await expect(page.getByRole('main')).toBeVisible()

    // Verify desktop layout
    const featureGrid = page.locator('.grid')
    await expect(featureGrid).toHaveCSS('grid-template-columns', /3/)

    // Test tablet view (768x1024)
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.getByRole('main')).toBeVisible()

    // Verify tablet layout adjustments
    await expect(featureGrid).toHaveCSS('gap', '3rem')

    // Test mobile view (375x667)
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.getByRole('main')).toBeVisible()

    // Verify mobile layout
    await expect(featureGrid).not.toHaveCSS('grid-template-columns', /3/)
  })

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/')

    // Check hero CTA
    const heroCta = page.getByRole('button', { name: /learn more/i })
    await expect(heroCta).toBeVisible()
    await expect(heroCta).toHaveClass(/btn-accent/)

    // Check bottom CTA
    const bottomCta = page.getByRole('button', { name: /get started/i })
    await expect(bottomCta).toBeVisible()
    await expect(bottomCta).toHaveClass(/btn-accent/)
  })
})
