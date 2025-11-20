import { expect, test, Locator } from "@playwright/test";

test("Verify Css Locators", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page.locator("input#small-searchterms")).toBeVisible();
  //   const searchbox: Locator = page.locator("input#small-searchterms");
  //   await searchbox.fill("Shirt");
  //tag class
  //await page.locator("input.search-box-text").fill("Pant");
  //await page.locator("input[name=q]").fill("T-shirts");
  //await page.locator("[name=q]").fill("T-shirts");
  //tag class attribute value
  await page.locator(".search-box-text[value='Search store']").fill("T-Shirts");
});
