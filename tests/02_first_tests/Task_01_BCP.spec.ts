import { test, expect } from '@playwright/test';

test("Two context", async ({ browser }) => {
    let ttaCartContext = await browser.newContext();
    let ttaCartPage = await ttaCartContext.newPage();

    let ttaBankContext = await browser.newContext();
    let ttaBankPage = await ttaBankContext.newPage();

    await ttaCartPage.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await ttaBankPage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")

    console.log("TTA cart page URL: ", ttaCartPage.url());
    console.log("TTA bank page URL: ", ttaBankPage.url());

    await ttaBankContext.close();
    await ttaCartContext.close();
})

