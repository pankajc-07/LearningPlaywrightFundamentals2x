import { test, expect } from '@playwright/test';
import { fa, faker } from '@faker-js/faker';

function generateUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        telephone: faker.phone.number({ style: 'international' }),
        password: faker.internet.password()
    }
}

test(`Register single user via generateUser()`, async ({ page }) => {
    const user = generateUser();

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
    await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
    await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
    await page.getByRole('button', { name: 'Save profile' }).click();
    await expect(page.locator('#submission-output')).toContainText(user.firstName);
});
console.log("*************************");

//Practical examples
console.log("Example number 01");

function generateUserInfo() {
    return {

        firstName01: faker.person.firstName(),
        lastName01: faker.person.lastName(),
        email01: faker.internet.email(),
        telephone01: faker.phone.number({ style: 'international' }),
        password01: faker.internet.password()
    }
}

test(`Registered single user via generateUserInfo()`, async ({ page }) => {

    const user = generateUserInfo();

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName01);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName01);
    await page.getByRole('textbox', { name: 'Email' }).fill(user.email01);
    await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password01);
    await page.getByRole('button', { name: 'Save profile' }).click();
    await expect(page.locator('#submission-output')).toContainText(user.firstName01);
})
