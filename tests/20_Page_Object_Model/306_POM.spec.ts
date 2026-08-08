import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { faker } from '@faker-js/faker';
import { log } from 'node:console';

test.describe('POM with Login Page Simple', () => {

    test('Login with valid credns', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("admin", "password");
        await expect(page).toHaveTitle("TTACart - Login");
    });
});
console.log("*************************");

//Practical examples
console.log("Example number 01");

test.describe('Page Object Model with Login Page ', () => {

    test('Verify the error message on the screen. ', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login("admin11", "password11");

        const errorMsg = page.locator("#login-error");
        await expect(errorMsg).toBeVisible();
        const errorText = await errorMsg.textContent();
        console.log(errorText);
        await expect(errorMsg).toContainText("Username and password do not match");
    })
})


