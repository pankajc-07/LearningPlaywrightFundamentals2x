import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const columnA = page.locator('#column-a');
    const columnB = page.locator('#column-b');

    await columnA.dragTo(columnB);
    await page.pause();
});
console.log("*************************************");

//Practice examples. 
console.log("Example 01");

test('Simple Drag and Drop', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    const valA = page.locator("#column-a");
    const valB = page.locator("#column-b");

    await valB.dragTo(valA);
    await page.pause();
})
