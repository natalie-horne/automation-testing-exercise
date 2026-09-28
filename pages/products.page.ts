import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page.getByRole('link', { name: 'Products' }).click();

    await expect(this.page).toHaveURL(/products/);

    await this.page
      .locator('.productinfo')
      .first()
      .getByText('Add to cart')
      .click();

    await expect(
    this.page.getByRole('heading', { name: 'Added!' })
    ).toBeVisible({ timeout: 10000 });

    await this.page.getByRole('link', { name: 'View Cart' }).click();

    await expect(this.page).toHaveURL(/view_cart/);
  }
}