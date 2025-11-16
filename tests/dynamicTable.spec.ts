import { expect, test, Locator } from "@playwright/test";

test("verify chrome CPU load in dynamic table", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/dynamic-table");
  const table = await page.locator("table.table tbody");
  await expect(table).toBeVisible();
  //select all the rows, the find numebr of rows
  const rows: Locator[] = await table.locator("tr").all();
  console.log(`Number of rows in table ${rows.length}`);
  expect(rows).toHaveLength(4);

  let cpuLoad = "";

  for (const row of rows) {
    const processName: string = await row.locator("td").nth(0).innerText();
    if (processName === "Chrome") {
      //cpuLoad = await row.locator('td:has-text("%")').innerText();
      cpuLoad = await row.locator("td", { hasText: "%" }).innerText();
      console.log(`cpu load of chorme: ${cpuLoad}`);
      break;
    }
  }
  //step2: compare it with value in yellow laable
  let yellowboxtext: string = await page.locator("#chrome-cpu").innerText();
  console.log(`Chrome CPU load from yellow box: ${yellowboxtext}`);
  if (yellowboxtext.includes(cpuLoad)) {
    console.log(`Cpu load of chrome is equal`);
  } else {
    console.log("cpu load chrome is not equal");
  }
  expect(yellowboxtext).toContain(cpuLoad);
});
