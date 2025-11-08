import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  //click on login button - property
  await page.locator("id=login2").click();
  //provide username
  await page.locator("input[id='loginusername']").fill("kapil");
  //provide password
  await page.locator("input[id='loginpassword']").fill("Act@753");
  //click on login button
  await page.locator("//button[normalize-space()='Log in']").click();
  //verify logout
  //   const logoutlink = await page.locator("//a[normalize-space()='Log out']");
  //   await expect(logoutlink).toBeVisible();
  //   await page.close();
});
