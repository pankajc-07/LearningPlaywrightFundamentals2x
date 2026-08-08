import { Locator, Page } from '@playwright/test';

export class Cartpage {
    readonly page: Page;
    readonly title: Locator;
    readonly inventoryItemName: Locator;
    readonly inventoryItemPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId("title").or(page.getByText("Your Cart"));
        this.inventoryItemName = page.getByTestId("inventory-item-name").or(page.getByRole("link", { name: "Test.allTheThings() T-Shirt (Red)" })).or(page.getByText("Test.allTheThings() T-Shirt (Red)"));
        this.inventoryItemPrice = page.getByTestId("inventory-item-price").or(page.getByText("$15.99"));
    }

    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/cart");
    }
}
