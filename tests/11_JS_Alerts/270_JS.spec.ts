import { test, expect } from '@playwright/test';

test('JS Alert accept 1', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Register the dialog handler BEFORE triggering the alert

    page.once('dialog', async dialog => {
        console.log('Alert type:', dialog.type());
        console.log('Alert message:', dialog.message());
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
    });

    await page.getByRole('button', { name: "Click for JS Alert" }).click();
    // // await page.getByText('Click for JS Alert').click();
    // // await page.locator('//button[text()="Click for JS Alert"]').click();
    // // await page.locator('button', { hasText: 'Click for JS Alert' }).click();


    // page.once('dialog', async dialog => {
    //     console.log('Alert type:', dialog.type());
    //     expect(dialog.type()).toBe('confirm');
    //     console.log('Alert message:', dialog.message());
    //     expect(dialog.message()).toBe('I am a JS Confirm');
    //     await dialog.accept();
    //     //await dialog.dismiss();
    // });

    // await page.locator('button', { hasText: 'Click for JS Confirm' }).click();

    const inputText = 'Hello from The Testing Academy';

    // page.once('dialog', async dialog => {
    //     expect(dialog.type()).toBe('prompt');
    //     expect(dialog.defaultValue()).toBe('');
    //     await dialog.accept(inputText);
    //     //await dialog.dismiss();
    // });

    await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
});
console.log("*************************************");

//Practice examples. 
console.log("Example 01");

test('JavaScript Alerts', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    /* page.once('dialog', async dialog01 => {
         console.log('Alert type ', dialog01.type());
         console.log('Alert Message ', dialog01.message());
         expect(dialog01.message()).toBe("I am a JS Alert");
         await dialog01.accept();
     });
 
     await page.getByRole('button', { name: "Click for JS Alert" }).click();
     // await page.getByText('Click for JS Alert').click();
     // await page.locator('//button[text()="Click for JS Alert"]').click();
     // await page.locator('button', { hasText: 'Click for JS Alert' }).click();
     await page.pause();*/

    /* page.once('dialog', async dialog02 => {
         console.log('Alert type ', dialog02.type());
         expect(dialog02.type()).toBe('confirm');
 
         console.log('Alert Message', dialog02.message());
         expect(dialog02.message()).toBe("I am a JS Confirm");
 
         await dialog02.accept();
         // await dialog02.dismiss();
     })
 
     await page.locator('button', { hasText: 'Click for JS Confirm' }).click();*/

    const inputText = 'Hello from The Testing Academy';

    page.once('dialog', async dialog03 => {
        expect(dialog03.type()).toBe('prompt');
        expect(dialog03.defaultValue()).toBe("");
        await dialog03.accept(inputText);
        //await dialog03.dismiss();
    })
    await page.locator('button', { hasText: 'Click for JS Prompt' }).click();

    await page.pause();
});

