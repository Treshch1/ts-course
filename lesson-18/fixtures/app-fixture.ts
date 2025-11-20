import { test as base, Page } from '@playwright/test';
import { RozetkaPage } from 'pom/rozetka.pom';

export const test = base.extend<{ rozetka: RozetkaPage }>({
    rozetka: async ({ page }: { page: Page }, use) => {
        const rozetka = new RozetkaPage(page);
        await rozetka.goto();
        await use(rozetka);
    }
});
