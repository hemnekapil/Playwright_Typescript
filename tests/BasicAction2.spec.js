import { test, expect, Locator } from "@playwright/test";

test("Text input Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const textBox = page.locator("#name");
});
