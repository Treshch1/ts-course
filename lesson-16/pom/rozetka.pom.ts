import { Locator, Page } from 'puppeteer';

export class RozetkaPage {
    public constructor(private page: Page) {}

    public get menuButton(): Locator<HTMLElement> {
        return this.page.locator('button[data-testid="menu_button"]');
    }

    public get catalogButton(): Locator<HTMLElement> {
        return this.page.locator('button.menu-button-catalog');
    }

    public get firstMenuItem(): Locator<HTMLElement> {
        return this.page.locator('rz-fat-menu-old li[data-index="0"]');
    }

    public get searchInput(): Locator<HTMLElement> {
        return this.page.locator('input[data-testid="search-suggest-input"]');
    }

    public get cartButton(): Locator<HTMLElement> {
        return this.page.locator('button[data-testid="header-cart-btn"]');
    }

    public get authButton(): Locator<HTMLElement> {
        return this.page.locator('button[data-testid="header-auth-btn"]');
    }

    public async portalTitle(): Promise<string> {
        const headingElement = await this.page.waitForSelector('h1.portal__heading');
        return headingElement ? await headingElement.evaluate(el => el.textContent || '') : '';
    }

    public async categoryTitle(): Promise<string> {
        const headingElement = await this.page.waitForSelector('::-p-xpath(//h1[@class="catalog-heading"])');
        return headingElement ? await headingElement.evaluate(el => el.textContent || '') : '';
    }

    public async cartText(): Promise<string> {
        const headingElement = await this.page.waitForSelector('.cart-dummy__heading');
        return headingElement ? await headingElement.evaluate(el => el.textContent || '') : '';
    }

    public async authModalHeader(): Promise<string> {
        const modalHeader = await this.page.waitForSelector('rz-modal-layout h2');
        return modalHeader ? await modalHeader.evaluate(el => el.textContent || '') : '';
    }

    public async waitForBanner(): Promise<void> {
        await this.page.waitForSelector('a.exponea-banner__sales');
    }

    public async search(searchRequest: string): Promise<void> {
        await this.searchInput.fill(searchRequest);

        const laptopSearchItem = await this.page.waitForSelector(`::-p-xpath(//rz-search-suggest-content//a[contains(text(), "${searchRequest}")])`);
        await laptopSearchItem!.click();
    }

    public async waitForPhoneNumber(): Promise<void> {
        await this.page.waitForSelector('rz-modal-layout rz-phone-input');
    }
}
