import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { f } from '@faker-js/faker/dist/index-BSUsvzGS';
import { log } from 'node:console';

test.describe('FakerJS data-driven template', () => {
    test('should display the expected generated user details', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

        // Dynamic Data
        const expected_firstname = faker.person.firstName();
        const expected_email = faker.internet.email();
        const expected_password = faker.internet.password();
        console.log(expected_firstname);

        const telephone = faker.phone.number({ style: 'national' });
        const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' });

        const testUser = {
            name: expected_firstname,
            email: expected_email,
            password: expected_password
        }

        await page.getByRole("textbox", { name: "Username" }).fill(testUser.name);
        await page.getByRole("textbox", { name: "Password" }).fill(testUser.name);
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page.getByRole("alert")).toContainText('Username and password do not match any user in this service');
    });
});
console.log("*************************");

//Practical examples
console.log("Example number 01");

test.describe('Data-driven testing using Faker.com ', () => {
    test('Should display expected user details ', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

        const firstName = faker.person.firstName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        console.log("First name is :" + firstName);
        console.log("Email ID is : " + email);
        console.log("Password of email is :" + password);

        const testingUser = {
            name: firstName,
            email: email,
            password: password
        }

        await page.getByRole("textbox", { name: "Username" }).fill(testingUser.name);
        await page.getByRole("textbox", { name: "Password" }).fill(testingUser.name);
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page.getByRole("alert")).toContainText('Username and password do not match any user in this service');
    })
})