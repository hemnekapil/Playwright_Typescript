import { Locator, test, expect } from "@playwright/test";

test("single select dropdown-all methods", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  //through visible text
  await page.locator("#country").selectOption("India");
  await page.waitForTimeout(2000);
  //throught value attribute
  await page.locator("#country").selectOption({ value: "uk" });
  await page.waitForTimeout(2000);
  //throuogh label
  await page.locator("#country").selectOption({ label: "India" });
  await page.waitForTimeout(2000);
  //through index
  await page.locator("#country").selectOption({ index: 3 });
  await page.waitForTimeout(2000);
});
