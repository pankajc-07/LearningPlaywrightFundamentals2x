import { test, expect } from '@playwright/test';

test('login form is reachable via steps', async ({ page }) => {

    // https://bugzz.atlassian.net/browse/VWO-115

    await test.step('open practice page', async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');
    });

    await test.step('fields are visible', async () => {
        await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    });

    await test.step('submit + assert validation', async () => {
        await page.getByRole('button', { name: /Login/i }).click();
        await expect(page.getByText(/required|invalid/i)).toBeVisible();
    });
});
console.log("*************************");

//Practical examples 
console.log("Example number 01");

test('Login through steps', async ({ page }) => {


    await test.step('Open the practice page', async () => {

        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter.html")

    })

    await test.step('Fields Are visible ', async () => {

        await expect(page.getByRole('textbox', { name: 'Email Address' })).toBeVisible();
        await expect(page.getByRole('textbox', { name: "Password" })).toBeVisible();
    })

    await test.step('Click on submit and assertion validation', async () => {
        // await page.getByRole('button', { name: /Loogin/i }).click();
        await page.getByTestId("login-button").click();
        await expect(page.getByText(/required|invalid/i)).toBeVisible();

        //await page.pause();
    })
})