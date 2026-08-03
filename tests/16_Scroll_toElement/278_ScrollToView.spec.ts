import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Scroll to Element - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    });

    test('scroll to view', async ({ page }) => {
        // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you

        // await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        // await page.getByTestId('deep-anchor').click();

        // // 2x scrollBy 1000 px
        // //  page.evaluate - this can execute a JS code
        // await page.evaluate(() => window.scrollBy(0, 1000));

        //   // // 3) jump to bottom
        // await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // await expect(page.getByTestId('cta-button')).toBeEnabled();

        //    // // 4) jump back to top
        // await page.evaluate(() => window.scrollTo(0, 0));

        // 5) lazy list grows past 10 once visible
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();

        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const list = page.getByTestId('lazy-list').locator('li');
        const initialCount = await list.count();

        // scroll the LAST existing item into view — item 11 does not exist yet,
        // so nth(10) would just wait until the test times out.
        await list.last().scrollIntoViewIfNeeded();
        // poll untill the new items appened.

        await expect.poll(async () => list.count(), {
            message: 'expected items > 10',
            timeout: 10_000
        }).toBeGreaterThan(initialCount);

        const finalCount = await list.count();
        console.log(finalCount);
    });
});
console.log("*************************");

//Practical examples 
console.log("Example number 01");

test.describe('Page scroll', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");
    })

    test('Scroll to view', async ({ page }) => {

        // await page.getByTestId("deep-anchor").scrollIntoViewIfNeeded();
        // await page.locator("#section-mid").scrollIntoViewIfNeeded()

        // Scroll by X and Y axis => This should be avoided. As X and Y axis change according to the size of the Screen. 
        // await page.evaluate(() => window.scrollBy(0, 1000));
        // await page.evaluate(() => window.scrollBy(1000, 0));
        // await page.evaluate(() => window.scrollBy(1000, 2000))

        // Scroll to bottom
        // await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
        // await expect(page.getByTestId('cta-button')).toBeEnabled();

        // Scroll back to top
        // await page.evaluate(() => window.scrollTo(0, 0));

        // Lazy load scrol
        /* await page.getByTestId("section-lazy").scrollIntoViewIfNeeded();
        // await page.getByTestId("lazy-list").scrollIntoViewIfNeeded();

        // const list = page.getByTestId("lazy-list").locator('li');
        // const initalCount = await list.count();

        // await page.getByTestId("lazy-item-10").scrollIntoViewIfNeeded();

        // const upadatedlist = page.getByTestId("lazy-list").locator('li');
        // const updatedCount = await list.count();

       console.log(initalCount, updatedCount);*/

        await page.getByTestId("section-lazy").scrollIntoViewIfNeeded();

        await page.getByTestId("lazy-list").scrollIntoViewIfNeeded();

        const list = page.getByTestId("lazy-list").locator('li');
        const initalCount = await list.count();

        await list.last().scrollIntoViewIfNeeded();

        await expect.poll(async () => list.count(), {
            message: 'expected items > 10',
            timeout: 10000
        }).toBeGreaterThan(initalCount);

        const finalCount = await list.count();
        console.log(finalCount);

        await page.pause()
    })
})


