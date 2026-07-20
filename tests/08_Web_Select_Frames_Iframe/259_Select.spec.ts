import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Select!', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown", "Option 2");
    // await page.selectOption
    await page.pause();
});
console.log("********************************");

//Practice Examples

console.log("Example 01");

test('Basic dropdown Using select option', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown")

    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown", "Option 1");
    await page.pause();
})

