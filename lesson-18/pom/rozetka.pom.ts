import { Locator, Page } from '@playwright/test';

export class RozetkaPage {
    public constructor(public page: Page) {}

    public get menuButton(): Locator {
        return this.page.locator('button[data-testid="menu_button"]');
    }

    public get catalogButton(): Locator {
        return this.page.locator('button.menu-button-catalog');
    }

    public get firstMenuItem(): Locator {
        return this.page.locator('rz-fat-menu-old li[data-index="0"]');
    }

    public get searchInput(): Locator {
        return this.page.locator('input[data-testid="search-suggest-input"]');
    }

    public get cartButton(): Locator {
        return this.page.locator('button[data-testid="header-cart-btn"]');
    }

    public get authButton(): Locator {
        return this.page.locator('button[data-testid="header-auth-btn"]');
    }

    public async portalTitle(): Promise<string> {
        return await (await this.page.waitForSelector('h1.portal__heading')).textContent() || '';
    }

    public async categoryTitle(): Promise<string> {
        return await (await this.page.waitForSelector('//h1[@class="catalog-heading"]')).textContent() || '';
    }

    public async cartText(): Promise<string> {
        return await (await this.page.waitForSelector('.cart-dummy__heading')).textContent() || '';
    }

    public async authModalHeader(): Promise<string> {
        return await (await this.page.waitForSelector('rz-modal-layout h2')).textContent() || '';
    }

    public async waitForBanner(): Promise<void> {
        await this.page.waitForSelector('a.exponea-banner__sales');
    }

    public async search(searchRequest: string): Promise<void> {
        await this.searchInput.fill(searchRequest);

        const laptopSearchItem = await this.page.waitForSelector(`//rz-search-suggest-content//a[contains(text(), "${searchRequest}")]`);
        await laptopSearchItem!.click();
    }

    public async waitForPhoneNumber(): Promise<void> {
        await this.page.waitForSelector('rz-modal-layout rz-phone-input');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/');
    }
}
