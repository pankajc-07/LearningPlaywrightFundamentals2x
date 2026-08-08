import { Locator, Page } from '@playwright/test';

export class Checkoutpage {
    readonly page: Page;
    readonly title: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly postalcode: Locator;
    readonly continue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTestId("title").or(page.getByText("Checkout: Your Information"));
        this.firstname = page.getByTestId("firstName").or(page.getByRole("textbox", { name: "First Name" })).or(page.locator("#first-name"));
        this.lastname = page.getByTestId("lastName").or(page.getByRole("textbox", { name: "Last Name" })).or(page.locator("#last-name"));
        this.postalcode = page.getByTestId("postalCode").or(page.getByRole("textbox", { name: "Zip/Postal Code" })).or(page.locator("#postal-code"));
        this.continue = page.getByTestId("continue").or(page.getByRole("button", { name: "Continue" })).or(page.locator("#continue-btn"));
    }

    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/cart");
    }
}
