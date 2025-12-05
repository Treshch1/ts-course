import { Locator } from '@playwright/test';

export class CardComponent {
    private baseLocator: Locator;

    public constructor(baseLocator: Locator) {
        this.baseLocator = baseLocator;
    }

    public async isVisible(): Promise<boolean> {
        return (await this.baseLocator.locator('..').getAttribute('aria-hidden')) === 'false';
    }

    public get favoriteButton(): Locator {
        return this.baseLocator.locator('button[data-testid="listing-card-save-button"]');
    }
}
