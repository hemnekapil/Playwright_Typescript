import { expect, test, Locator } from "@playwright/test";

test("auto suggest dropdown", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  //Locate search box
  await page.locator('input[name="q"]').fill("smart");
});
//wait for options to load
test("auto suggest dropdown with wait", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  await page.locator('input[name="q"]').fill("smart");
  //important wait for ajax call
  await page.waitForTimeout(3000);
  //capture all suggestion options
  const options: Locator = page.locator("ul > li");
  //count options
  const count: number = await options.count();
  console.log(`Number of suggested options: ${count}`);
});
//using for loop with nth()
test("print auggestions with for loop", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  await page.locator('input[name="q"]').fill("smart");
  await page.waitForTimeout(3000);
  //ccapture all suggestions
  const options: Locator = page.locator("ul > li");
  const count: number = await options.count();
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    console.log(text);
  }
});

test("print suggestion with alltextcontent", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  await page.locator('input[name="q"]').fill("smart");
  await page.waitForTimeout(3000);
  //capture all suggestions
  const options: Locator = page.locator("ul > li");

  const optionText: string[] = await options.allTextContents();
  for (const option of optionText) {
    console.log(option);
  }
});

test("select smartphone specific suggestion", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  await page.locator('input[name="q"]').fill("smart");
  await page.waitForTimeout(3000);
  const options: Locator = page.locator("ul > li");
  // const count: number = await options.count();
  // for (let i = 0; i < count; i++) {
  //   const text = await options.nth(i).innerText();
  //   if (text === "smartphone") {
  //     await options.nth(i).click();
  //     break;
  //   }
  // }
  //get all text
  const optionText: string[] = await options.allTextContents();
  //find index of smartphone
  const index = optionText.indexOf("smartphone");
  if (index !== -1) {
    await options.nth(index).click();
  }
  await page.waitForTimeout(5000);
});

test("auto suggest dropdown complete", async ({ page }) => {
  await page.goto("https://www.flipkart.com");
  //fill search box
  await page.locator('input[name="q"]').fill("smart");
  //wait for ajax crictical
  await page.waitForTimeout(3000);
  //capture all options
  const options: Locator = page.locator("ul > li");
  //count options
  const count: number = await options.count();
  console.log(`Number of suggested options: ${count}`);
  //print all options
  console.log("All suggestions");
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    console.log(text);
  }
  //select specific option
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    if (text === "smartphone") {
      await options.nth(i).click();
      break;
    }
  }
  //verify navigation
  await page.waitForTimeout(5000);
  expect(page.url()).toContain("smartphone");
});
