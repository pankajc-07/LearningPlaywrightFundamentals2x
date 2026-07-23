import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Hover and click on the link.', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');
    await page.getByText("Add-ons", { exact: true }).hover();
    await page.getByText('FlyEarly', { exact: true }).click();

    // https://app.thetestingacademy.com/playwright/widgets/hover-menu

    await page.pause();
});
console.log("*************************************");

//Practice examples. 
console.log("Example 01");

test("Hover over page ", async ({ page }) => {
    await page.goto("https://www.spicejet.com/");

    await page.getByText("Add-ons", { exact: true }).hover();
    await page.getByText("FlyEarly", { exact: true }).click();

    await page.pause();
})
