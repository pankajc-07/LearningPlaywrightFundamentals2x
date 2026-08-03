import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Tasks for upload and download ', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto("https://app.thetestingacademy.com/student/settings");
    })

    test('', async ({ page }) => {

        // await page.pause();
        // await page.getByRole('textbox', { name: 'Email address' }).fill("chutepankaj@gmail.com");
        // await page.getByRole('button', { name: 'Continue', exact: true }).click();
        await page.locator("Upload Photo").click();

        await page.pause();
    })
})

