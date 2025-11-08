import { test, expect } from "@playwright/test";

test("modern selectors", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  //By role (Best practice - accessibilty friendly)
  await page.getByRole("textbox", { name: "username" }).fill("student");
  await page.getByRole("textbox", { name: "password" }).fill("Password123");
  //   await page.getByRole("button", { name: "Submit" }).click();
  //by labale (for form inputes)
  //   await page.getByLabel("Username").fill("student");
  //   await page.getByLabel("Password").fill("Password123");
  //By placeholder
  //   await page.getByPlaceholder("Enter username").fill("student");
  //get by test ID
  //by test id
  await page.locator("#submit").click();
  //By title
  //   await page.getByTitle("Submit").click();
});
