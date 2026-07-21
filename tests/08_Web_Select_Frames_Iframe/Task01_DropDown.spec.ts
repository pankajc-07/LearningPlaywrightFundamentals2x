import { test, expect } from "@playwright/test";

test('Dropdown task 01 ', async ({ page }) => {
    await page.goto("https://www.spicejet.com/");

    await page.getByTestId("to-testID-origin").click();
    await page.locator('[data-testid="to-testID-origin"] input').fill("De")
    await page.getByText("Delhi", { exact: true }).click();

    await page.getByTestId("to-testID-destination").click();
    await page.locator('[data-testid="to-testID-destination"] input').fill('Ban')
    await page.getByText("Bengaluru", { exact: true }).click();

    await page.pause()
})
