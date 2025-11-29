import { test as base, Page } from '@playwright/test';
import { AppPage } from '../pom/app.pom.ts';

export const test = base.extend<{ app: AppPage }>({
    app: async ({ page }: { page: Page }, use) => {
        const app = new AppPage(page);
        await app.homepage.goto();
        try {
            // Sometimes a modal appears on homepage load
            await app.modalCloseButton.waitFor({ state: 'visible', timeout: 2000 });
            await app.modalCloseButton.click();
        } catch {
            // Ignore if modal is not present
        }
        await use(app);
    }
});
