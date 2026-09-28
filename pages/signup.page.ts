import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import type { TestUser } from '../helpers/test-data';

export class SignupPage {
  constructor(private page: Page) {}

  async registerNewUser(user: TestUser) {
    await this.page.getByRole('link', { name: 'Signup / Login' }).click();

    await expect(this.page.getByText('New User Signup!')).toBeVisible();

    await this.page.getByPlaceholder('Name').fill(user.name);

    await this.page
      .locator('form')
      .filter({ hasText: 'Signup' })
      .getByPlaceholder('Email Address')
      .fill(user.email);

    await this.page.getByRole('button', { name: 'Signup' }).click();

    await expect(
      this.page.getByText('Enter Account Information')
    ).toBeVisible();

    await this.page.locator('#id_gender1').check();
    await this.page.locator('#password').fill(user.password);

    await this.page.locator('#days').selectOption('10');
    await this.page.locator('#months').selectOption('5');
    await this.page.locator('#years').selectOption('1990');

    await this.page.locator('#first_name').fill(user.firstName);
    await this.page.locator('#last_name').fill(user.lastName);
    await this.page.locator('#address1').fill(user.address);

    await this.page.locator('#country').selectOption('New Zealand');

    await this.page.locator('#state').fill(user.state);
    await this.page.locator('#city').fill(user.city);
    await this.page.locator('#zipcode').fill(user.postcode);
    await this.page.locator('#mobile_number').fill(user.mobile);

    await this.page.getByRole('button', { name: 'Create Account' }).click();

    await expect(this.page.getByText('Account Created!')).toBeVisible();

    await this.page.getByRole('link', { name: 'Continue' }).click();

    await expect(
      this.page.getByText(`Logged in as ${user.name}`)
    ).toBeVisible();
  }

  async deleteAccount() {
    await this.page.getByRole('link', { name: 'Delete Account' }).click();

    await expect(this.page.getByText('Account Deleted!')).toBeVisible();

    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}