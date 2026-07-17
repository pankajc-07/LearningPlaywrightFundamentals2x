import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();
const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;

test.describe('VWO Session Management - Combined Practice', () => {
    const SESSION_PATH = './user-session-practice03.json';

    test.beforeAll(async () => {
        // Verify we have credentials
        if (!VWO_USER || !VWO_PASS) {
            throw new Error('Missing VWO_USER/VWO_PASS in .env file');
        }
    });

    test('Save authentication session', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await test.step('Login to VWO', async () => {
            await page.goto('https://app.wingify.com/#/login');
            await page.fill('#login-username', VWO_USER);
            await page.fill('#login-password', VWO_PASS);
            await page.click('#js-login-btn');
            await page.waitForURL(/#\/(dashboard|home)/);
        });

        await test.step('Save session state', async () => {
            await context.storageState({ path: SESSION_PATH });
            console.log(`✅ Session saved to: ${SESSION_PATH}`);
        });

        await context.close();
    });

    test('Reuse saved session', async ({ browser }) => {
        const context = await browser.newContext({ storageState: SESSION_PATH });
        const page = await context.newPage();

        await test.step('Access protected page', async () => {
            await page.goto('https://app.wingify.com/#/dashboard');
            await expect(page).toHaveURL(/dashboard/);
            await expect(page.getByText('Welcome back')).toBeVisible();
        });

        await context.close();
    });
});