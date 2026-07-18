import { test, expect } from '@playwright/test';

test('Basic verify how to handle multiple elements ', async ({ page }) => {

    // First of all, go to the link of the web table, 
    // find the correct Helen banquet, 
    // and then use a for loop to find the following Sibling 

    await page.goto("https://awesomeqa.com/webtable.html");

    //table[@id="customers"]/tbody/tr[5]/td[2]
    // 5 - i , 1 to 7 ( 1 header) 2 to 7
    // ]/td[
    // 2 - j , j -> 1,2,3
    // ]

    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const cols = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            console.log(dynamicPath);
            const data = await page.locator(dynamicPath).innerText();
            console.log(data);
            if (data.includes('Terminated')) {
                const ststusPath = `${dynamicPath}/following-sibling::td`;
                const ststusText = await page.locator(ststusPath).innerText();
                console.log('------');
                console.log(`Helen Bennett is In - ${ststusText}`);
            }
        }
    }
    //await page.pause();
});

//Practice examples 
console.log("Example No. 1 ");
test('How to handle web tables?', async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable.html");

    ////table[@id='customers']/tbody/tr[5]/td[2]

    const first01 = "//table[@id='customers']/tbody/tr[";
    const second01 = "]/td[";
    const third01 = "]";

    const rows01 = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns01 = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();

    for (let i = 2; i <= rows01; i++) {
        for (let j = 1; j <= columns01; j++) {
            const dynamicPath01 = `${first01}${i}${second01}${j}${third01}`;
            console.log(dynamicPath01);

            const data = await page.locator(dynamicPath01).innerText();
            console.log(data);

            if (data.includes('Helen Bennett')) {
                const countryPath01 = `${dynamicPath01}/following-sibling::td`;
                const countryText01 = await page.locator(countryPath01).innerText();
                console.log("***********");
                console.log(`Helen Bennett brlongs to country -  ${countryText01}`);
            }
        }
    }
})
