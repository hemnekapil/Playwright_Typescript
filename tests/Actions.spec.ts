import { test, expect, Locator } from "@playwright/test";

// test("Text input Actions", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   const textBox: Locator = page.locator("#name");
//   await expect(textBox).toBeVisible();
//   await expect(textBox).toBeEnabled();

//   const maxLength: string | null = await textBox.getAttribute("maxlength");
//   expect(maxLength).toBe("15");
//   await textBox.fill("kpie");
//   const entredValue: string = await textBox.inputValue();
//   console.log("Input value of first name:", entredValue);
//   expect(entredValue).toBe("kpie");
//   await page.waitForTimeout(3000);
// });

// test("select radio button", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const maleRadio: Locator = page.locator("#male");
//   const femaleRadio: Locator = page.locator("#female");
//   //select the radio button
//   // await maleRadio.check();
//   // await femaleRadio.check();
//   // //asserations for radio buttons
//   // await expect(maleRadio).toBeVisible();
//   // //verify enabled
//   // await expect(maleRadio).toBeEnabled();
//   //Before selection
//   const checkedBefore = await maleRadio.isChecked();
//   console.log(`Checked before:${checkedBefore}`);
//   await maleRadio.check();
//   await page.waitForTimeout(3000);
//   //After selection
//   const checkedAfter = await maleRadio.isChecked();
//   console.log(`Checked After: ${checkedAfter}`);
// });
// test("radio button action complete", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const maleRadio: Locator = page.locator("#male");
//   //verify visisbility
//   await expect(maleRadio).toBeVisible();
//   //varify enabled
//   await expect(maleRadio).toBeEnabled();
//   //check current state
//   const checkedBefore = await maleRadio.isChecked();
//   expect(checkedBefore).toBe(false);
//   //select radio button
//   await maleRadio.check();
//   //verify selection method1
//   const checkedAfter = await maleRadio.isChecked();
//   expect(checkedAfter).toBe(true);
//   //verify selection (method2-prefferd)
//   await expect(maleRadio).toBeChecked();
//   //wait to see result
//   await page.waitForTimeout(2000);
// });

test("verify input visibility", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  const textbox: Locator = page.locator("#name");
  //Verify element is visible
  // await expect(textbox).toBeVisible();
  //await expect(textbox).toBeEnabled();
  //const maxLength: string | null = await textbox.getAttribute("maxLength");
  //console.log(`Max Length:${maxLength}`);
  // expect(maxLength).toBe("15");
  //capture diffrent attributes
  // const id = await textbox.getAttribute("id");
  // const type = await textbox.getAttribute("type");
  // const placeholder = await textbox.getAttribute("placeholder");
  // const maxLength = await textbox.getAttribute("maxlength");
  // console.log(`ID:${id}`);
  // console.log(`Type:${type}`);
  // console.log(`Placeholder:${placeholder}`);
  // console.log(`Max Length: ${maxLength}`);
});
// test("fill input with text", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const textBox: Locator = page.locator("#name");
//   //fill the input with text
//   await textBox.fill("Kpie");
//   //retrive the value
//   const enteredValue: string = await textBox.inputValue();

//   //verify value
//   console.log(`Entered value: ${enteredValue}`);
//   expect(enteredValue).toBe("Kpie");
// });

// test.only("Run only specific test and skip others", async({page})=>{

// })

// //locating checkboxes
// test("select single checkbox", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //by id
//   //const sundayCheckBox:Locator = await page.locator('#sunday')
//   //by lable
//   const sundayCheckBox1: Locator = page.getByLabel("Sunday");
//   const mondayCheckbox: Locator = page.getByLabel("Monday");
//   //multiple checkboxes
//   //const allCheckBoxes:Locator = page.locator('input[type="checkbox"]');
//   //Select checkbox
//   await sundayCheckBox1.check();
//   await mondayCheckbox.check();
//   //verify selection
//   await expect(sundayCheckBox1).toBeChecked();
//   await expect(mondayCheckbox).toBeChecked();
//   //deslect method that is uncheck
//   await sundayCheckBox1.uncheck();
//   await expect(sundayCheckBox1).not.toBeChecked();
// });

// test("select all checkboxes using labals", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //Dfine array of checkbox labels
//   const checkboxLables = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   //iterate and select each
//   for (const label of checkboxLables) {
//     const checkbox: Locator = page.getByLabel(label);
//     await checkbox.check();
//     await expect(checkbox).toBeChecked();
//   }
// });

// //using locator count
// test("select all checkboxes by locator", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //get all checkboxes
//   const allCheckBoxes: Locator = page.locator('input[type="checkbox"]');
//   //get count
//   const count = await allCheckBoxes.count();
//   //iterate and select each
//   for (let i = 0; i < count; i++) {
//     await allCheckBoxes.nth(i).check();
//   }
//   //verify all are checked
//   for (let i = 0; i < count; i++) {
//     await expect(allCheckBoxes.nth(i)).toBeChecked();
//   }
// });
// test("select multiple checkboxes with foreach", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const checkboxLables = ["Sunday", "Tuesday", "Thursday"];
//   for (const label of checkboxLables) {
//     const checkbox = page.getByLabel(label);
//     await checkbox.check();
//   }
// });
// //complete checkbox test
// test.only("checkbox action complete", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //Select single chekcbox
//   const sundayCheckBox = page.getByLabel("Sunday");
//   await sundayCheckBox.check();
//   await expect(sundayCheckBox).toBeChecked();
//   //select multiple checkboxes
//   const daysToSelect = ["Monday", "Wednesday", "Friday"];
//   for (const day of daysToSelect) {
//     const checkbox = page.getByLabel(day);
//     await checkbox.check();
//     await expect(checkbox).toBeChecked();
//   }
//   //uncheck one
//   await sundayCheckBox.uncheck();
//   await expect(sundayCheckBox).not.toBeChecked();
//   //verify others still checked
//   for (const day of daysToSelect) {
//     await expect(page.getByLabel(day)).toBeChecked();
//   }
// });

// test("text input actions", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const textBox: Locator = page.locator("#name");
//   //Assseration
//   await expect(textBox).toBeVisible();
//   await expect(textBox).toBeEnabled();
//   //Get maxlength atrribute
//   const maxLength = await textBox.getAttribute("maxLength");
//   expect(maxLength).toBe("15");
//   //fill the data
//   await textBox.fill("Kpie");
//   //retrive and varify value
//   const entredValue = await textBox.inputValue();
//   expect(entredValue).toBe("KPie");
//   //wait for visual
//   await page.waitForTimeout(2000);
// });

// test("radio button actions", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   const maleRadio: Locator = page.locator("#male");
//   //verify initial state
//   await expect(maleRadio).toBeVisible();
//   await expect(maleRadio).toBeEnabled();
//   const notChecked = await maleRadio.isChecked();
//   expect(notChecked).toBe(false);
//   //select radio button
//   await maleRadio.check();
//   //verify selction
//   await expect(maleRadio).toBeChecked();
//   await page.waitForTimeout(2000);
// });
// test.only("checkbox actions", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com");
//   //select single checkbox
//   const sundayCheckBox = page.getByLabel("Sunday");
//   await sundayCheckBox.check();
//   await expect(sundayCheckBox).toBeChecked();
//   //selct multiple checkboxes
//   const days = ["Monday", "Tuesday", "Friday"];
//   for (const day of days) {
//     const checkbox = page.getByLabel(day);
//     await checkbox.check();
//     await expect(checkbox).toBeChecked();
//   }
//   //uncheck one
//   await sundayCheckBox.uncheck();
//   await expect(sundayCheckBox).not.toBeChecked();
//   await page.waitForTimeout(2000);
// });
