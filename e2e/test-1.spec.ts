import { expect, test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await expect(page.getByRole('heading', { name: 'You did it!' })).toContainText('You did it!')
})
