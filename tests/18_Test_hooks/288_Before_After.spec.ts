import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    // run once per worker — e.g. seed test data, spin a docker container
    console.log('beforeAll — server is up');
});

test.beforeEach(async ({ page }) => {
    // run before every test — e.g. log in, seed cookies
    await page.goto('https://app.thetestingacademy.com/playwright/');
});

test('practice index has 25 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(29);
});

test('sidebar collapse button works', async ({ page }) => {
    await page.getByLabel('Toggle sidebar').first().click();
    await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
    }
});


test.afterAll(async () => {
    console.log('afterAll — tear down');
});
console.log("*************************");

//Practical examples 
console.log("Example number 01");

test.beforeAll(async () => {

    console.log("This is the first block");

})

test.beforeEach(async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/');
})

test('Practice index', async ({ page }) => {
    // await expect(page.locator('.index-card')).toHaveCount(29);
    await expect(page.locator('.index-card')).toHaveCount(35);
})

test('Sidebar Button works', async ({ page }) => {

    await page.getByLabel('Toggle sidebar').first().click();
    await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');

})

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
    }
});

test.afterAll(async () => {
    console.log('afterAll — tear down');
});
