import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search'

test.describe('Flipkart Seach via the SVG', () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!")
        await page.goto(URL);
    })

    test('TC#1 @smoke @regression', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");
        //await page.getByTitle('Search for products, brands and more').fill('macmini');

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        // const svgElementsAll: Locator[] = await page.locator('svg').all();
        // for(let svgElement in svgElementsAll){
        //     // find and click()
        // }

        // //div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]
        const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

        const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }
        await page.pause();
    });
});
console.log("*************************************");

//Practice examples. 
console.log("Example 01");

test.describe("Before each and after each", () => {

    test.beforeEach(async ({ page }) => {
        console.log("This is before each");
    });

    test('#TC01', async ({ page }) => {
        console.log("This is Test 01");
    })

    test('#TC02', async ({ page }) => {
        console.log("This is Test 02");
    })


    test.afterEach("", async ({ page }) => {
        console.log("This is after each");
    })
})
console.log("*************************************");

console.log("Example 02");
test.describe('Flipkart Search via SVG', () => {

    test.beforeEach('This is before each', async ({ page }) => {
        console.log("Before running any test case");
        await page.goto("https://www.flipkart.com/search");
        await page.locator("input[name='q']").fill("macmini");
        await page.locator("//button[@type='submit']").click();
        await page.waitForLoadState('networkidle');
    })

    test('This is Flipkart Search', async ({ page }) => {

        // Product Count
        const productList = page.locator("div[data-id]");

        const TotalCount = await productList.count();

        console.log(`Products total on the page : ${TotalCount}`);

        // Sorting the product 
        const products = [];
        for (let i = 0; i < TotalCount; i++) {
            console.log(`Product ${i + 1}`);
            const productCard = productList.nth(i);
            const priceCount = await productCard.locator("div.hZ3P6w").count();
            const productTitle = await productCard.locator("a[title]").getAttribute("title");

            if (priceCount === 1) {
                const productPrice = await productCard.locator("div.hZ3P6w").innerText();
                let cleanedPrice = productPrice.replace("₹", ""); //remove ₹ from the amount
                cleanedPrice = cleanedPrice.replaceAll(",", ""); //remove , from the amount
                const numericPrice = Number(cleanedPrice);

                products.push({
                    title: productTitle,
                    price: numericPrice
                });
                console.log(`Product Title : ${productTitle}`);
                console.log(`Product Price : ${numericPrice}`);
            }
            else {
                const priceNotAvailable = await productCard.locator("div.Ldgg5w").innerText();
                console.log(`Title : ${productTitle}`);
                console.log(priceNotAvailable);
            }
            console.log("--------------------------");
        }

        console.log(products);

        // Sort by price (Ascending)
        products.sort((a, b) => a.price - b.price);

        console.log(products);

        // Cheapest Product
        const cheapestProduct = products[0];
        console.log("===== Cheapest Product =====");
        console.log(`Title : ${cheapestProduct.title}`);
        console.log(`Price : ₹${cheapestProduct.price}`);
    });
    //await page.pause();
})
