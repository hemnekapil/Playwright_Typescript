import { expect, Locator, test } from "@playwright/test";

test("Read data from all the table pages", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/zero_configuration.html"
  );
  let morepages = true;

  while (morepages) {
    const rows = await page.locator("#example tbody tr").all();
    for (let row of rows) {
      console.log(`${await row.innerText()}`);
    }
    await page.waitForTimeout(2000);
    //button[aria-label='Next']
    //button[aria-controls='example']:has-text("›")
    const nextButton: Locator = page.locator("button[aria-label='Next']");
    const isDisabled = await nextButton.getAttribute("class");
    if (isDisabled?.includes("disabled")) {
      morepages = false;
    } else {
      await nextButton.click();
    }
  }
});
test("Filter the rows and check the rows count ", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/zero_configuration.html"
  );
  const dropdown: Locator = page.locator("#dt-length-0");
  await dropdown.selectOption({ label: "25" });
  const rows = await page.locator("#example tbody tr").all();
  expect(rows.length).toBe(25); //asseration
  const rows2 = page.locator("#example tbody tr");
  await expect(rows2).toHaveCount(25);
});
test(" Search for specific data in table ", async ({ page }) => {
  await page.goto(
    "https://datatables.net/examples/basic_init/zero_configuration.html"
  );
  const searchbox: Locator = page.locator("#dt-search-0");
  searchbox.fill("Paul Byrd");
  const rows = await page.locator("#example tbody tr").all();
  if (rows.length >= 1) {
    let matchFound = false;
    for (let row of rows) {
      const text = await row.innerText();
      if (text.includes("Paul Byrd")) {
        console.log("Record exits- found");
        matchFound = true;
        break;
      }
    }
    expect(matchFound).toBeTruthy();
  } else {
    console.log("No Rows found with search text");
  }
});
