import { Page } from '@playwright/test';

export async function blockAds(page: Page) {
  await page.route(
    /googlesyndication\.com|doubleclick\.net|googleadservices\.com/,
    async (route) => {
      await route.abort();
    }
  );
}