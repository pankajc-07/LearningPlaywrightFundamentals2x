import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = 'https://the-internet.herokuapp.com/upload';

// Create test file before all tests
if (!fs.existsSync(path.join(__dirname, 'testdata.txt'))) {
    fs.writeFileSync(path.join(__dirname, 'testdata.txt'), 'Test file content');
}

test.describe('FileUpload handling', () => {
    test('should upload file successfully', async ({ page }) => {
        await page.goto(URL);

        const filePath = path.join(__dirname, 'testdata.txt');
        await page.setInputFiles('#file-upload', filePath);
        await page.click('#file-submit');

        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toHaveText('testdata.txt');
    });
});
