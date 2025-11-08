import { test, expect } from "@playwright/test";

test.describe("Login page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
  });
  test("valid login redirects to dasboard", async ({ page }) => {
    await page.fill("#username", "student");
    await page.fill("#password", "Password123");
    await page.click("#submit");
    await expect(page).toHaveURL(/.*logged-in-successfully/);
  });
  test("invalid username shows error", async ({ page }) => {
    await page.fill("#username", "wronguser");
    await page.fill("#password", "Password123");
    await page.click("#submit");
    await expect(page.locator("#error")).toBeVisible();
  });
  test("invalid password shows error", async ({ page }) => {
    await page.fill("#username", "student");
    await page.fill("#password", "kpie123");
    await page.click("#submit");
    await expect(page.locator(".show")).toBeVisible();
  });
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `failure-${testInfo.title}-${Date.now()}.png`,
      });
    }
  });
});

test.describe("Dashboard tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
  });
  test("logout button is visible", async ({ page }) => {
    await expect(page.locator(".wp-block-group")).toBeVisible();
  });
});
