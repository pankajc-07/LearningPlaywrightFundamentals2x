import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');
    const headerText = await mainFrame.locator('h2').innerText();
    console.log(headerText);

    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames: ' + allFrames.length);

    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));

    }

    let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();
    await page.pause();
});
console.log("*************************************");

//Practice examples. 
console.log("Example 01");

test('Multiple Frames ', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    let mainFrame01: FrameLocator = await page.frameLocator("[name='main']");
    let sideFrame01: FrameLocator = await page.frameLocator("[name='side']");
    let footerFrame01: FrameLocator = await page.frameLocator("[name='footer']");

    let mainHeading = await mainFrame01.locator("#main-heading").innerText();
    console.log(mainHeading);

    let sideHeading = await sideFrame01.locator("#side-title").innerText();
    console.log(sideHeading);

    let footerHeading = await footerFrame01.getByTestId("footer-build").innerText();
    console.log(footerHeading);

    const allFrames: Locator[] = await page.locator("//frame").all();
    console.log("Total number of frames: " + allFrames.length);

    for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ':', await frame.getAttribute('src'));
    }

    await sideFrame01.getByTestId("side-link-footer").click();
    await page.pause();
});
