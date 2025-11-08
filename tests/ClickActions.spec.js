import { test } from "@playwright/test";

test("diffrent click types", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");
  // await page.locator("#hot-spot").click({ button: "right" });
  //await page.getByText("Double Click Me").dblclick();
  //await page.getByText("Right Click Me").click({ button: "right" });
  //await page.getByText("Click Me").click();
  await page.getByText("Click Me").click({ modifiers: ["Control"] });
});
