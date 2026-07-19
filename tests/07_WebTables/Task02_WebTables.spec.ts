import { test, expect } from '@playwright/test';

test('Web Tables task ', async ({ page }) => {
    const username = "admin";
    const password = "Awesomeqa@4321";

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill(username);
    await page.locator("//input[@name='password']").fill(password);
    await page.locator("//button[@type='submit']").click();

    const firstPart = "//div[@class='oxd-table-card'][";
    const secondPart = "]/div[@role='row']/div[@role='cell'][";
    const thirdPart = "]";

    await page.waitForSelector("//div[@class='oxd-table-card']", { state: 'visible' });
    const rowsCount = await page.locator("//div[@class='oxd-table-card']").count();
    console.log("Total rows : " + rowsCount);

    const columns = page.locator("//div[@class='oxd-table-card'][1]/div[@role='row']/div[@role='cell']");
    const columnsCount = await columns.count();
    console.log("Total columns : " + columnsCount);

    for (let i = 1; i <= rowsCount; i++) {
        for (let j = 1; j <= columnsCount; j++) {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(dynamicPath);

            const data = await page.locator(dynamicPath).innerText();
            //console.log(data);

            if (data.includes('Terminated')) {
                const statusPath = `${dynamicPath}`;
                const statusText = await page.locator(statusPath).innerText();
                console.log(`Status text is : ${statusText}`);

                console.log(`Row: ${i}`);

                await page.locator('i[class="oxd-icon bi-trash"]').nth(i).click();
                await page.waitForTimeout(5000);

                //Screenshot
                await page.screenshot({ path: 'tests/Screenshots/sceernShot01.png', fullPage: true })
                break;
            }
        }
    }
    // await page.pause();
})

