import { Locator, test, expect } from "@playwright/test";
import { text } from "stream/consumers";

// test("single select dropdown-all methods", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");

//   //through visible text
//   await page.locator("#country").selectOption("India");
//   await page.waitForTimeout(2000);
//   //throught value attribute
//   await page.locator("#country").selectOption({ value: "uk" });
//   await page.waitForTimeout(2000);
//   //throuogh label
//   await page.locator("#country").selectOption({ label: "India" });
//   await page.waitForTimeout(2000);
//   //through index
//   await page.locator("#country").selectOption({ index: 3 });
//   await page.waitForTimeout(2000);
// });

// test("count dropdown options", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //get all options
//   const dropdownOptions: Locator = page.locator("#country > option");
//   //Assert count
//   await expect(dropdownOptions).toHaveCount(10);
// });

// test("count with wrong expectation", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const dropdownOptions: Locator = page.locator("#country > option");
//   //wrong count with fail
//   await expect(dropdownOptions).toHaveCount(10);
// });

// test("extract all option texts", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const dropdownOptions: Locator = page.locator("#country > option");
//   //get all text contents
//   const optionsText: string[] = await dropdownOptions.allTextContents();
//   console.log(optionsText);
// });
// test("extract and trim option texts", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const dropdownOptions: Locator = page.locator("#country > option");
//   //get and trim all texts
//   const optionsText: string[] = (await dropdownOptions.allTextContents()).map(
//     (text) => text.trim()
//   );
//   //console.log(optionsText);
//   //verify japan exits
//   // expect(optionsText).toContain("Japan");
//   // expect(optionsText).toContain("France");
//   // expect(optionsText).toContain("India");
//   //printing all dropdown options
//   for (const option of optionsText) {
//     console.log(option);
//   }
// });

// test("multi-select by visisble text", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //select multiple options by visisble text
//   //await page.locator("#colors").selectOption(["Red", "Blue", "Green"]);
//   // await page
//   //   .locator("#colors")
//   //   .selectOption([{ value: "red" }, { value: "green" }, { value: "white" }]);
//   // await page
//   //   .locator("#colors")
//   //   .selectOption([{ label: "Red" }, { label: "Green" }, { label: "Yellow" }]);
//   //select by index
//   await page
//     .locator("#colors")
//     .selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]);
//   await page.waitForTimeout(2000);
// });
//multi selecte dropdown advance operation
// test("count multi-select options", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const colorOptions: Locator = page.locator("#colors > option");
//   await expect(colorOptions).toHaveCount(7);
//   //await page.waitForTimeout(5000);
// });
//extracting and verifying option
// test("verify option exists in multi-select", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const colorOptions: Locator = page.locator("#colors > option");
//   const optionsText: string[] = (await colorOptions.allTextContents()).map(
//     (text) => text.trim()
//   );
//   expect(optionsText).toContain("Blue");
//   expect(optionsText).toContain("Yellow");
// });
//check if dropdown is optionally alphabetically sorted
// test("verify options are sorted", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const colorOptions: Locator = page.locator("#colors > option");
//   const optionsText: string[] = (await colorOptions.allTextContents()).map(
//     (text) => text.trim()
//   );
//   //create sorted array
//   // const sortedArray = [...optionsText].sort();
//   //compare
//   //expect(optionsText).toEqual(sortedArray);
//   //use set to find duplicates
//   // const uniqueOptions = new Set(optionsText);
//   // expect(optionsText.length).toBe(uniqueOptions.size);

// });
// test("multi select dropdown complete opration", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //select multiple options by visible text
//   await page.locator("#colors").selectOption(["Red", "Blue", "Green"]);
//   await page.waitForTimeout(2000);
//   //select a value
//   //select by value
//   await page
//     .locator("#colors")
//     .selectOption([{ value: "red" }, { value: "white" }, { value: "yellow" }]);
//   await page.waitForTimeout(2000);
//   //select by label
//   await page
//     .locator("#colors")
//     .selectOption([{ label: "Red" }, { label: "Green" }, { label: "Yellow" }]);
//   await page.waitForTimeout(2000);
//   //select index
//   await page
//     .locator("#colors")
//     .selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]);
//   await page.waitForTimeout(2000);
//   //count options
//   const colorOptions: Locator = page.locator("#color > option");
//   await expect(colorOptions).toHaveCount(5);
//   //extract and varify options
//   const optionsText: string[] = (await colorOptions.allTextContents()).map(
//     (text) => text.trim()
//   );
//   expect(optionsText).toContain("Blue");
//   expect(optionsText).toContain("Yellow");
//   //print all options
//   console.log("All color options");
//   for (const option of optionsText) {
//     console.log(option);
//   }
// });
