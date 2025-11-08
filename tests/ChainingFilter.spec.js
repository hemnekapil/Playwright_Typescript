import { test, expect } from "@playwright/test";

test("advanced locator techniques", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/");
  //find the parant and child
  // await page.locator(".menu").locator("a").nth(4).click();
  //filer by text
  //await page.locator("a").filter({ hasText: "Practice" }).click();
  // await page.locator("li").nth(2).click();
  //get first/last
  //   await page.locator("nav a").first().click();
  //   await page.locator("nav a").last().click();
  //count elemnts
  const count = await page.locator("a").count();
  console.log(`Found ${count} links`);
  //has specific child
  //   await page
  //     .locator("li")
  //     .filter({ has: page.locator("a") })
  //     .click();
});
