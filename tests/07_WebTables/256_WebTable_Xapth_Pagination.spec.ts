import { test, expect } from '@playwright/test';

test('Verify Element by Filter and pegination', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country

    let name: string = "Luca Greco";
    let row;

    while (true) {
        row = page.locator('#employees-tbody tr').filter({ hasText: name });

        if (await row.count()) {
            break;
        }

        const next = page.getByTestId('next-page');
        if (await next.isDisabled()) throw new Error("Row not found!");
        await next.click();
    }

    const email = await row.locator('td[data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText();

    console.log(email, country);
    await page.waitForTimeout(2000);
});
console.log("******************************************");

//Practice examples 
console.log("Example no. 1 ");
test('Without pagination', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country
    const name = page.locator('#employees-tbody tr').filter({ hasText: 'Liam Walker' });

    const email = await name.locator('td[data-col="email"]').innerText();
    const country = await name.locator('td[data-col="country"]').innerText();

    console.log(email, country);
    console.log(`Email ID: ${email}`);
    console.log(`Country is: ${country}`);

    await page.waitForTimeout(2000);
});
console.log("******************************************");

console.log("Example no. 2 ");
test('Verify web table with pagination', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: string = "Lukas Schneider";
    let row;

    while (true) {
        row = page.locator("#employees-tbody tr").filter({ hasText: name });

        if (await row.count()) {
            break;
        }

        const next = page.getByTestId("next-page");
        if (await next.isDisabled()) throw new Error("Row not found!");
        await next.click();
    }

    const email = await row.locator("td[data-col='email']").innerText();
    const role = await row.locator("td[data-col='role']").innerText();

    console.log(`Email ID : ${email}`);
    console.log(`Role : ${role}`);
    await page.waitForTimeout(2000);
})

