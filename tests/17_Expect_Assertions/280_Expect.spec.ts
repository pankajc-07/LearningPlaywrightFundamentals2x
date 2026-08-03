import { test, expect } from '@playwright/test'

test('2 Locator-based assertions', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');

    const heading = page.getByText('multiple element filters', { exact: true });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('filter', { timeout: 10000 });

    const email = page.getByRole('textbox', { name: 'Email Address' });
    await expect(email).toHaveAttribute('id', 'email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

    const footerLinks = page.locator('footer a');
    await expect(footerLinks).toHaveCount(16);
});
console.log("*************************");

//Practical examples 
console.log("Example number 01");

test('Locator-based assertions', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter.html");

    const heading = page.getByText("multiple element filters", { exact: true });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('filter', { timeout: 50000 });

    const email = page.getByRole('textbox', { name: 'Email Address' });
    await expect(email).toHaveAttribute('id', 'email');
    await expect(email).toHaveAttribute('type', 'email');
    await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

    const footerLinks = page.locator('footer a');
    await expect(footerLinks).toHaveCount(16);
})

