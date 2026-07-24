import { test, expect } from '@playwright/test';

test('Hover over page and accept', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    await page.getByTestId("nav-add-ons").hover();
    //await page.getByTestId("test-id-Meal").click();
    await page.getByTestId("test-id-Wifi").click();
    await page.pause();
});

