import { test, expect } from '@playwright/test';

test('Dynamic Web Tables Find email ID', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name: string = 'Mia Hoffmann';
    let row;

    while (true) {
        row = page.locator("#employees tbody tr").filter({ hasText: name });

        if (await row.count()) {
            break;
        }

        const next = page.getByTestId("next-page");
        if (await next.isDisabled()) throw new Error("Row not found!");
        await next.click();
    }

    const email = await row.locator("td[data-col = 'email']").innerText();
    console.log(`Name: ${name} has email ID: ${email}`);
})
