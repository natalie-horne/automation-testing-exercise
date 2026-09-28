import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async completeCheckout() {
    await this.page.getByText('Proceed To Checkout').click();

    await expect(this.page.getByText('Address Details')).toBeVisible();
    await expect(this.page.getByText('Review Your Order')).toBeVisible();

    await this.page
      .locator('textarea[name="message"]')
      .fill('Please leave the order at the front door.');

    await this.page.getByRole('link', { name: 'Place Order' }).click();
  }
}