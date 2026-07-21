import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    // ① Single — searchable
    await page.locator("#rs-single").click();
    await page.getByText("Cypress").click()
    // await page.pause();

    // ②  Multi — chips with remove
    await page.locator("#rs-multi").click();
    await page.getByText("Pytest", { exact: true }).click();
    await page.getByText("JUnit", { exact: true }).click();
    await page.keyboard.press("Escape");
    // await page.pause();

    // ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");
    await page.pause();

    //⑤ Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();
    await page.pause();
});
console.log("********************************");

//Practice Examples
console.log("Example 01");
test('Advance Dropdowns', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    //① Single — searchable
    await page.locator("#rs-single").click();
    await page.getByRole('option', { name: 'Playwright' }).click();
    //await page.getByText("Selenium").click();

    //② Multi — chips with remove
    await page.locator("#rs-multi").click();
    await page.getByText("Cucumber", { exact: true }).click();
    await page.getByText("Mocha", { exact: true }).click();
    await page.getByRole('option', { name: 'Playwright' }).click();
    await page.keyboard.press("Escape");

    //③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("performance", { exact: true }).click();
    await page.getByRole('option', { name: 'security' }).click();
    await page.keyboard.press("Escape")

    //⑤ Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("Pun");
    await expect(page.getByTestId('rs-async-menu')).toContainText("Pune");
    await page.getByRole('option', { name: 'Pune' }).click();

    //⑤ Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("hy");
    await expect(page.getByTestId("rs-async-menu")).toContainText("Hyderabad");
    await page.getByText("Hyderabad", { exact: true }).click();

    await page.pause();
})
