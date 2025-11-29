import { Locator, Page } from '@playwright/test';
import { HomepagePage } from './homepage.pom.ts';

export class AppPage {
    public homepage: HomepagePage;
    public modalCloseButton: Locator;
    public modalTitle: Locator;

    public constructor(public page: Page) {
        this.homepage = new HomepagePage(this.page);

        this.modalCloseButton = this.page.locator('button[aria-label="Закрити"]');
        this.modalTitle = this.page.locator('div[role="dialog"] h1');
    }
}
