import { expect, test, Locator } from "@playwright/test";

test("bootstarp hidden dropdown", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  //login steps
  await page.locator('input[name="username"]').fill("admin");
  await page.locator('input[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();
  //awit for dashboard to load
  await page.waitForTimeout(3000);
  //click pim using playwright locator
  await page.getByText("PIM").click();
  await page.waitForTimeout(2000);
  //capture all dropdown icons
  const dropdownIcons: Locator = page.locator("form i");
  const count = await dropdownIcons.count();
  console.log(`Number of dropdowns: ${count}`);
});

test("click job title dropdown", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  //find job title dropdown by label
  const jobTitleDropdown = page.locator('label:has-text("Job Title") + div i');
  await jobTitleDropdown.click();
});
