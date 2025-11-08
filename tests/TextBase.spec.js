import { test, expect } from "@playwright/test";

test("text selector example", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/");
  //By exact text
  //await page.locator("text=courses").first().click();
  //modern way
  await page.getByText("Home").click();
  //By role  + text
  await page.getByRole("link", { name: "Contact" }).click();
  //case insensitive
  // case-insensitive match using a regex
  //await page.getByRole("link", { name: "practice" }).click();
  await page.locator("text=practice").first().click();
});
