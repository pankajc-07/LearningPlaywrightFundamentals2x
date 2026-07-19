import { test, expect } from '@playwright/test';

test('Verify Element by Filter', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();

    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();

    await page.waitForTimeout(2000);
});
console.log("******************************************");

//Practice examples 
test('How to handle dynamic web tables', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    await page.locator("//td[text()='Meera.Rao']/preceding-sibling::td/input[@type='checkbox']").click();

    await page.locator("tr:has(td:text('Neha.Patel'))").locator("td").first().click();

    await page.locator("tr:has(td:text('Ananya.Iyer'))").locator("td").first().click();

    const value01 = await page.locator("tr:has(td:text('Ananya.Iyer'))").locator("td").nth(3).innerText();
    console.log(`User Role: ${value01}`);

    const value02 = await page.locator("tr:has(td:text('Ishaan.Das'))").locator("td").last().innerText();
    console.log(`Status: ${value02}`);

    await page.waitForTimeout(2000);
})

