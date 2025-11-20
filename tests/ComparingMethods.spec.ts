import { expect, Locator, test } from "@playwright/test";

test("comparing methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const products: Locator = page.locator(".product-title");
  //   console.log(await products.nth(1).innerText());
  //   console.log(await products.nth(2).textContent());
  const count = await products.count();
  for (let i = 0; i < count; i++) {
    // const productName: string = await products.nth(i).innerText();
    // console.log(productName);
    const productName: string | null = await products.nth(i).textContent();
    console.log(productName);
  }
});
