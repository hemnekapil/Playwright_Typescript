import { expect, test, Locator } from "@playwright/test";

test("auto suggest dropdown", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  //Locate search box
  await page.locator('input[name="q"]').fill("smart");
});
//wait for options to load
test("auto suggest dropdown with wait", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  await page.locator('input[name="q"]').fill("smart");
  //important wait for ajax call
  await page.waitForTimeout(3000);
  //capture all suggestion options
  const options: Locator = page.locator("ul > li");
  //count options
  const count: number = await options.count();
});
