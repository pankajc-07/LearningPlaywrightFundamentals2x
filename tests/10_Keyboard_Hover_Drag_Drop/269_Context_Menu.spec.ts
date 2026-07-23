import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({ button: 'right' });

    const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions);

    await page.getByText('Copy', { exact: true }).first().click();

    await page.pause();
});
console.log("*************************************");

//Practice examples. 
console.log("Example 01");
test('', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");
    await page.locator("span.context-menu-one").first().click({ button: 'right' });

    const allOptions01: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions01);

    await page.getByText('Copy', { exact: true }).first().click();

    await page.pause();
})

