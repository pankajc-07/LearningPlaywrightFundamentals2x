import { test, expect } from '@playwright/test';

test("Two contexts", async ({ browser }) => {
    let contextOne = await browser.newContext();
    let pageOne = await contextOne.newPage();

    let contextTwo = await browser.newContext();
    let pageTwo = await contextTwo.newPage();

    await pageOne.goto("abcd.com");
    await pageTwo.goto("efgh.com");

    await contextTwo.close();
    await contextOne.close();
})
