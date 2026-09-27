import { expect, Page } from '@playwright/test';

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

    await expect(this.page.getByText('Added!')).toBeVisible();

    await this.page.getByRole('link', { name: 'View Cart' }).click();

    await expect(this.page).toHaveURL(/view_cart/);
  }
}