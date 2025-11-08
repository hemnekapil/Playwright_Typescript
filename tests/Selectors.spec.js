import { test, expect } from "@playwright/test";

test("CSS selector examples", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  //BY ID(fastest more relible)
  await page.locator("#username").fill("student");
  //by attribute
  await page.locator('input[type="password"]').fill("Password123");
  //   await page.locator(".btn").click();
  //   //By tag name
  //   await page.locator("h1").textContent();
  //Child selector
  await page.locator("section button").click();
});
