import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  async completePayment(name: string) {
    await expect(
      this.page.getByRole('heading', { name: 'Payment' })
    ).toBeVisible();

    await this.page.locator('input[name="name_on_card"]').fill(name);
    await this.page.locator('input[name="card_number"]').fill('4111111111111111');
    await this.page.locator('input[name="cvc"]').fill('123');
    await this.page.locator('input[name="expiry_month"]').fill('12');
    await this.page.locator('input[name="expiry_year"]').fill('2030');

    await this.page
      .getByRole('button', { name: 'Pay and Confirm Order' })
      .click();

    await expect(this.page.getByText('Order Placed!')).toBeVisible();

    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}