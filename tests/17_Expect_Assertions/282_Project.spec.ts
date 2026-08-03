import { test, expect } from '@playwright/test';

test('Visible · enabled · disabled · checked', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    const automationCheckBox = page.getByRole('checkbox', { name: /UFT/ });
    await automationCheckBox.check();
    await expect(automationCheckBox).not.toBeChecked();

    const submitBtn = page.getByTestId('profile-submit');
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

    await expect(page).toHaveTitle(/QA Profile/);

    const appUrl = page.url();
    expect(appUrl).toContain('thetestingacademy');

    await page.pause();
});
console.log("*************************");

//Practical examples 
console.log("Example number 01");
test('Visible, enabled, disabled, checked, etc', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice.html");
    const automationToolCheckbox = page.getByRole('checkbox', { name: /Protractor/ });
    await automationToolCheckbox.check();
    await expect(automationToolCheckbox).not.toBeChecked();

    const resetButton = page.getByTestId("profile-reset");
    await expect(resetButton).toBeVisible();
    await expect(resetButton).toBeEnabled();

    await expect(page).toHaveTitle(/QA Profile/);

    const appURL = page.url();
    expect(appURL).toContain('profile-reset');

    await page.pause();
})
