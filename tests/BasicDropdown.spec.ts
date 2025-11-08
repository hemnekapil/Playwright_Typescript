import { Locator, test, expect } from "@playwright/test";

test("Select by visible text", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  //select by visible text
  // await page.locator("#country").selectOption("Japan");
  //select by value attribute

  //wait to see selection
  await page.waitForTimeout(5000);
});
