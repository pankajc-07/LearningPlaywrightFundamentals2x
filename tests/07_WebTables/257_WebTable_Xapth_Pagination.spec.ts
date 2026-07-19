import { test, expect } from '@playwright/test';

test('Verify Element by Filter', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country
    const pageCount = 3;
    const allEmails: string[] = [];

    for (let p = 1; p <= pageCount; p++) {
        await page.getByTestId(`page-${p}`).click();
        const emails = await page.locator('#employees-tbody tr td[data-col="email"]').allInnerTexts();

        allEmails.push(...emails);
        console.log(allEmails);
    }
    await page.waitForTimeout(5000);
});
console.log("******************************************");

//Practice examples 
console.log("Example no. 1 ");
test('Web table with pagination using a for loop', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const pageCount01 = 3;
    const countryList: string[] = [];

    for (let i = 1; i <= pageCount01; i++) {
        await page.getByTestId(`page-${i}`).click();
        const country = await page.locator("#employees-tbody tr td[data-col='country']").allInnerTexts();

        countryList.push(...country);
        console.log(countryList);
    }
    await page.waitForTimeout(2000);
})
