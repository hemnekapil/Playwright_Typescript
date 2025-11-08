import { test, expect } from "@playwright/test";

test("navigating using diffrent selectors", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/");
  const nav = page.locator("nav");
  await nav.getByRole("link", { name: /^Practice$/i }).click();
  await expect(page).toHaveURL(/practice/);
});
test("login page", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("#username").fill("student");
  await page.locator('[name="password"]').fill("Password123");
  await page.getByRole("button", { name: "submit" }).click();
  await expect(page.locator(".post-title")).toHaveText(
    /Logged In Successfully/
  );
});

test("count navigation links", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/");
  const count = await page.locator("nav a").count();
  console.log(count);
  const links = page.locator("nav a");
  await links.first().textContent();
  await expect(links.first()).toHaveText("Home");
});

test("contact form selectors", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/contact/");
  await page.getByLabel("Email").fill("test@example.com");
  await page
    .getByRole("textbox", { name: "Comment or Message *" })
    .fill("Test message");
  await page.getByRole("button", { name: "Submit" }).click();
});
