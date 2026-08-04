import { test, expect } from '@playwright/test';

test.describe.serial('Checkout suite — must run in order', () => {
    test('open landing', async () => { console.log('1'); });
    test('search product', async () => { console.log('2'); });
    test('add to cart', async () => { console.log('3'); });
    test('go to checkout', async () => { console.log('4'); });
});


// These two run in parallel — independent of the serial suite above.
test('standalone A', async () => { console.log('A'); });
test('standalone B', async () => { console.log('B'); });
console.log("*************************");

//Practical examples 
console.log("Example number 01");

test.describe.serial('Check suit run in an order ', () => {

    test('Open landing  page', async () => {
        console.log("1");
    })

    test('Search for the product. ', async () => {
        console.log("2");
    })

    test('Add to the cart ', async () => {
        console.log("3");
    })

    test('Add Payment details  ', async () => {
        console.log("4");
    })

    test('Check out ', async () => {
        console.log("5");

    })
})

test('standalone A01', async () => { console.log('A'); });
test('standalone B01', async () => { console.log('B'); });
