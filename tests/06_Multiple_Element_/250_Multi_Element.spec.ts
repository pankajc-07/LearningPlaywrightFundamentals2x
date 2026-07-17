import { test, expect } from '@playwright/test';

test('Basic verify how to handle multiple elements ', async ({ page }) => {

    // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const rightPanelLinksTexts: string[] = await page.locator("a.list-group-item").allInnerTexts();

    console.log(rightPanelLinksTexts.length);

    for (const link of rightPanelLinksTexts) {
        console.log(link);
    }
    for (let i = 0; i < rightPanelLinksTexts.length; i++) {
        console.log(rightPanelLinksTexts[i]);
    }

    for (const linkText of rightPanelLinksTexts) {
        if (linkText === "Forgotten Password") {
            await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }
});
console.log("****************************************");

//Practice examples 
console.log("Example Number 01");

test('How To handle multiple elements', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const panelLinks: string[] = await page.locator("a.list-group-item").allInnerTexts();

    console.log(panelLinks.length);

    for (const links01 of panelLinks) {
        console.log(links01);
    }

    for (let i = 0; i < panelLinks.length; i++) {
        console.log(panelLinks[i]);
    }

    for (const linksText of panelLinks) {
        if (linksText === "Forgotten Password") {
            await page.getByText(linksText).first().click();
        }
    }
    //await page.waitForTimeout(5000);

    const rtPannelLinks = await page.locator("a.list-group-item").all();
    for (const links of rtPannelLinks) {
        console.log(await links.getAttribute("href"));
    }
})
