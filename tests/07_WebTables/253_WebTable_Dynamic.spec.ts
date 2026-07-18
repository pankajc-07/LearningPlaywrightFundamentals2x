import { test, expect } from '@playwright/test';

test.describe('Web Table Tests', () => {

    test('test_web_table_login - structured extraction', async ({ page }) => {
        await page.goto('https://awesomeqa.com/webtable1.html');

        const rows = page.locator('table[summary="Sample Table"] tbody tr');
        const rowCount = await rows.count();
        console.log(rowCount);

        for (let i = 0; i <= rowCount; i++) {
            const rowData = await rows.nth(i).locator('td').allInnerTexts();
            console.log(`Row ${i + 1}:`, rowData);
        }
    })
});
console.log("******************************************");

//Practice examples 
console.log("Example number 01 ");
test('How to Handle web tables', async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable1.html");

    const rows01 = await page.locator("//table[@summary='Sample Table']/tbody/tr");
    const rowsCount01 = await rows01.count();
    console.log(rowsCount01);

    for (let i = 0; i <= rowsCount01; i++) {
        const rowData01 = await rows01.nth(i).locator('td').allInnerTexts();
        console.log(`Row ${i + 1}:`, rowData01);
    }

    //Left side column 
    const columns01 = await page.locator("//table[@summary='Sample Table']/tbody/tr/th");
    const clumnsCount01 = await columns01.count();
    console.log(clumnsCount01);

    const columnData01 = await columns01.allInnerTexts();
    console.log(columnData01);

    //All table headers 
    const tableHeadres01 = await page.locator("//table[@summary='Sample Table']/thead/tr/th");
    const tableHeadresCount01 = await tableHeadres01.count();
    console.log(tableHeadresCount01);

    const tableHeadresName01 = await tableHeadres01.allInnerTexts();
    console.log(tableHeadresName01);
})
console.log("******************************************");

console.log("Example number 02");
test('Web table no. 3 ', async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable1.html");
    ////table[@summary="Sample Table"]/tbody/tr[1]/td[3]
    const firstPart02 = "//table[@summary='Sample Table']/tbody/tr[";
    const secondPart02 = "]/td[";
    const ThirdPart02 = "]";

    const rows02 = await page.locator("//table[@summary='Sample Table']/tbody/tr").count();
    console.log(`Number of rows : ${rows02}`);

    const columns02 = await page.locator("//table[@summary='Sample Table']/tbody/tr/td[3]").count();
    console.log(`Number of columns : ${columns02}`);

    for (let i = 1; i <= rows02; i++) {
        for (let j = 1; j <= columns02; j++) {
            const dynamicPath02 = `${firstPart02}${i}${secondPart02}${j}${ThirdPart02}`;
            //console.log(dynamicPath02);

            const data02 = await page.locator(dynamicPath02).allInnerTexts();
            // console.log(data02);

            if (data02.includes('Dubai')) {
                const structurePath01 = `${dynamicPath02}/following-sibling::td[1]`;
                const structurePathHeight01 = await page.locator(structurePath01).innerText();
                console.log(`Height is : ${structurePathHeight01}`);

                const structurePath02 = `${dynamicPath02}/following-sibling::td[2]`;
                const structurePathHeight02 = await page.locator(structurePath02).innerText();
                console.log(`Bult in year : ${structurePathHeight02}`);
            }
        }
    }
})

