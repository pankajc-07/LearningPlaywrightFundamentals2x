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
console.log("******************************************");

console.log("Example number 03");

test('Web table 03', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    ////table[@id='companies-table']/tbody/tr[1]/td[2]
    const firstPart03 = "//table[@id='companies-table']/tbody/tr[";
    const secondPart03 = "]/td[";
    const thirdPart03 = "]";

    const rows03 = await page.locator("//table[@id='companies-table']/tbody/tr").count();
    console.log(`Number of rows : ${rows03} `);

    const columns03 = await page.locator("//table[@id='companies-table']/tbody/tr[1]/td").count();
    console.log(`Number of rows : ${columns03} `);

    for (let i = 1; i <= rows03; i++) {
        for (let j = 1; j <= columns03; j++) {
            const dynamicPath03 = `${firstPart03}${i}${secondPart03}${j}${thirdPart03}`;
            //console.log(dynamicPath03);

            const dynamicPathData03 = await page.locator(dynamicPath03).allInnerTexts();
            //console.log(dynamicPathData03);

            if (dynamicPathData03.includes('Microsoft')) {
                const pathSib03 = `${dynamicPath03}/following-sibling::td[2]`;
                const sibText03 = await page.locator(pathSib03).innerText();
                console.log(`Country is : ${sibText03}`);
            }
        }
    }
})

console.log("******************************************");

console.log("Example number 04");

test('Web table 04', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    ////table[@id='companies-table']/tbody/tr[1]/td[2]
    const firstPart04 = "//table[@id='employees-table']/tbody/tr[";
    const secondPart04 = "]/td[";
    const thirdPart04 = "]";

    const rows04 = await page.locator("//table[@id='employees-table']/tbody/tr").count();
    console.log(`Number of rows : ${rows04} `);

    const columns04 = await page.locator("//table[@id='employees-table']/tbody/tr[1]/td").count();
    console.log(`Number of rows : ${columns04} `);

    for (let i = 1; i <= rows04; i++) {
        for (let j = 1; j <= columns04; j++) {
            const dynamicPath04 = `${firstPart04}${i}${secondPart04}${j}${thirdPart04}`;
            //console.log(dynamicPath04);

            const dynamicPathData04 = await page.locator(dynamicPath04).allInnerTexts();
            //console.log(dynamicPathData04);

            if (dynamicPathData04.includes('Liam Walker')) {
                const pathSib04 = `${dynamicPath04}/following-sibling::td[2]`;
                const sibText04 = await page.locator(pathSib04).innerText();
                console.log(`Eamil ID is : ${sibText04}`);
            }
        }
    }
})
console.log("******************************************");

console.log("Example number 05");

test('Web table 05', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    await page.getByTestId("page-2").click();

    ////table[@id='companies-table']/tbody/tr[1]/td[2]
    const firstPart05 = "//table[@id='employees-table']/tbody/tr[";
    const secondPart05 = "]/td[";
    const thirdPart05 = "]";

    const rows05 = await page.locator("//table[@id='employees-table']/tbody/tr").count();
    console.log(`Number of rows : ${rows05} `);

    const columns05 = await page.locator("//table[@id='employees-table']/tbody/tr[1]/td").count();
    console.log(`Number of rows : ${columns05} `);

    for (let i = 1; i <= rows05; i++) {
        for (let j = 1; j <= columns05; j++) {
            const dynamicPath05 = `${firstPart05}${i}${secondPart05}${j}${thirdPart05}`;
            //console.log(dynamicPath05);

            const dynamicPathData05 = await page.locator(dynamicPath05).allInnerTexts();
            //console.log(dynamicPathData05);

            if (dynamicPathData05.includes('Giulia Bianchi')) {
                const pathSib05 = `${dynamicPath05}/following-sibling::td[3]`;
                const sibText05 = await page.locator(pathSib05).innerText();
                console.log(`Country is : ${sibText05}`);
            }
        }
    }
    //await page.pause();
})



