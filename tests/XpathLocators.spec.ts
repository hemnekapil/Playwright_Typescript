import { expect, test, Locator } from "@playwright/test";

test("xpath demo in playwright", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  //asbolute path
  //const logo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
  const absoluteLogo: Locator = page.locator(
    "//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]"
  );
  await expect(absoluteLogo).toBeVisible();

  //relative path
  const relativeLogo: Locator = page.locator(
    "//img[@alt='Tricentis Demo Web Shop']"
  );
  await expect(relativeLogo).toBeVisible();

  //contains method
  const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
  const productsCount: number = await products.count();
  console.log(`Compueter related products: ${productsCount}`);
  expect(productsCount).toBeGreaterThan(3);
  console.log(
    `First computer related product: ${await products.first().textContent()}`
  );
  let productTitles: string[] = await products.allTextContents();
  for (let pt of productTitles) {
    console.log(pt);
  }
});
