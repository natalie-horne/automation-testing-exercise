import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/signup.page';
import { ProductsPage } from '../pages/products.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';
import { createTestUser } from '../helpers/test-data';
import { blockAds } from '../helpers/ads';

test('Test Case 14 - register while checkout', async ({ page }) => {
  await blockAds(page);
  
  const user = createTestUser();

  const signupPage = new SignupPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);

  // Open application
  await page.goto('/');
  await expect(page).toHaveTitle(/Automation Exercise/);

  // Add product to cart before registering
  await productsPage.addFirstProductToCart();

  // Start checkout
  await page.getByText('Proceed To Checkout').click();

  // Verify registration is required
  await expect(page.getByText('Register / Login account')).toBeVisible();

    // Register during checkout
  await page.getByRole('link', { name: 'Register / Login' }).click();

  await signupPage.registerNewUser(user);

  // Return to cart after registration
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page).toHaveURL(/view_cart/);

  // Resume checkout
  await checkoutPage.completeCheckout();

  // Complete payment
  await paymentPage.completePayment(user.name);

  // Delete account
  await signupPage.deleteAccount();
});