import { expect, test } from "@playwright/test";

test("input actions", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  //fill() - fast, replaces entire value
  // await page.locator("#username").fill("student");
  //clear input
  // await page.locator("#username").clear();
  //Fill and press enter
  //await page.locator("#username").fill("student");
  //await page.locator("#username").press("Enter");
  await page.locator("#username").type("student", { delay: 100 });
});
test("keybraod actions", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/contact/");
  //Press single key
  //await page.locator("#wpforms-161-field_0").press("Tab");
  //Press key combinations
  //   await page.keyboard.press("Control+A");
  //   await page.keyboard.press("Control+C");
  //   await page.keyboard.press("Control+V");
  //type text on specific level
  //await page.keyboard.type("Hello World");
  //Press and hold
  await page.keyboard.down("Shift");
  await page.keyboard.press("A");
  await page.keyboard.up("Shift");
});

//checkboxes and dropdowns
test("form element actions", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
  //checkbox -check/uncheck
  const checkbox = page.locator('input[name="checkboxes[]"][value="cb1"]');
  if (!(await checkbox.isChecked())) {
    await checkbox.check();
  }
  //radio buttons
  await page.locator('input[name="radioval"][value="rd2"]').check();
  //dropdown
  await page.selectOption('select[name="dropdown"]', "dd4");
  //submit
  await page.click('input[type="submit"]');
  //verify submistion result
  await expect(page).toHaveURL(
    "https://testpages.herokuapp.com/pages/forms/html-form/submit"
  );
  //await expect(page.locator('body')).toContainText('kapil')
});
//Hover and scroll
test("other interactions", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/");
  //Hover over element
  //await page.locator("nav a").last().hover();
  //scroll elemnt into view
  await page.locator("footer").scrollIntoViewIfNeeded();
});
