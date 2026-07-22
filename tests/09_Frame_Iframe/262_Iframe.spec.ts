import { test, expect, FrameLocator } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let vechileFrame: FrameLocator = await page.frameLocator("#frame-one");

    await vechileFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
    await vechileFrame.locator('#RESULT_TextField-2').fill('Pramod Dutta');
    await vechileFrame.locator('#RESULT_TextField-3').fill('2012');
    await vechileFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    await vechileFrame.locator('#RESULT_TextField-4').fill('2015');

    await vechileFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');

    await vechileFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vechileFrame.locator("#vehicle-output").innerText();
    console.log(output);

    // page.locator("Hi")

    await page.pause();
});
console.log("*************************************");

//Practice examples. 
console.log("Example 01");

test('I frame Example 1 ', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    let frame01: FrameLocator = await page.frameLocator("#frame-one");

    await frame01.locator("#RESULT_TextField-1").fill("Toyota");
    await frame01.locator("#RESULT_TextField-2").fill("Pankaj");
    await frame01.locator("#RESULT_TextField-3").fill("MH-12-AA1111");
    await frame01.locator("#RESULT_RadioButton-1").selectOption("SUV");

    await frame01.locator("#RESULT_TextField-4").fill("2026");

    await frame01.locator("#RESULT_TextArea-1").fill("Great Car, nice features and good driving Experience");

    await frame01.getByText('Submit registration', { exact: true }).click();
    //vehicle-output
    let outPut01 = await frame01.locator("#vehicle-output").innerText();
    console.log(outPut01);

    let mainPage01 = await page.locator("#page-title").innerText();
    console.log(`This is main page: ${mainPage01}`);

    await page.pause();
});

