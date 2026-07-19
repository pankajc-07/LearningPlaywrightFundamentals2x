import { test, expect } from '@playwright/test';

test('Static web table', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const country = await page.locator("//td[text()='Yoshi Tannamuri']/following-sibling::td").innerText();
    console.log(`Country name: ${country}`);
})
console.log("**************************");

test('Static Web Table Option 2', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let contact: string = "Yoshi Tannamuri"

    const name = page.locator("#companies-table tbody tr").filter({ hasText: contact });
    const country = await name.locator("td[data-col='country']").innerText();
    console.log(`Country of ${contact} is ${country}`);
})
