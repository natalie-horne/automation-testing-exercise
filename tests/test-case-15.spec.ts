import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/signup.page';
import { ProductsPage } from '../pages/products.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';
import { createTestUser } from '../helpers/test-data';
import { blockAds } from '../helpers/ads';

test('Test Case 15 - register before checkout', async ({ page }) => {
  await blockAds(page);

  const user = createTestUser();

  const signupPage = new SignupPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);

  // Open application
  await page.goto('/');
  await expect(page).toHaveTitle(/Automation Exercise/);

  // Register before checkout
  await signupPage.registerNewUser(user);

  // Add product to cart
  await productsPage.addFirstProductToCart();

  // Complete checkout
  await checkoutPage.completeCheckout();

  // Complete payment
  await paymentPage.completePayment(user.name);

  // Delete account
  await signupPage.deleteAccount();
});