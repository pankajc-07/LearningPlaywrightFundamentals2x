import { test, expect } from '@playwright/test';

test('This is Student login test ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter?");

    await page.locator("#email").fill("pankaj1234@gmail.com");
    await page.locator("#password").fill("abcd1234");
    await page.locator("//input[@type='checkbox']").first().click();
    await page.getByTestId("login-button").click();

    const currentURL = page.url();
    console.log("Current URL: " + currentURL);
    expect(currentURL).toBe('https://app.thetestingacademy.com/playwright/multiple_element_filter?email=pankaj1234%40gmail.com&password=abcd1234&remember=yes#login-success');
    await page.pause();
})


