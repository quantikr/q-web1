import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('/')

    // Check if the title is present
    const title = page.getByRole('heading', {
      name: /welcome to next\.js with typescript and tailwind/i,
    })
    await expect(title).toBeVisible()
  })

  test('should have proper dark mode support', async ({ page }) => {
    await page.goto('/')

    // Check initial light mode
    await expect(page).toHaveClass('body', /bg-background/)

    // TODO: Add dark mode toggle test when implemented
  })

  test('should be responsive', async ({ page }) => {
    await page.goto('/')
    git
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 })
    await expect(page.getByRole('main')).toBeVisible()

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.getByRole('main')).toBeVisible()
  })
})
