import { Locator } from '@playwright/test';
import { CardComponent } from './card.component';


export class ScrollerComponent {
    private baseLocator: Locator;
    private cardBaseSelector = '//div[@data-testid="card-container"]';

    public constructor(baseLocator: Locator) {
        this.baseLocator = baseLocator;
    }

    public get rightArrowButton(): Locator {
        return this.baseLocator.locator('button[aria-label="Далі"]');
    }

    public get leftArrowButton(): Locator {
        return this.baseLocator.locator('button[aria-label="Назад"]');
    }

    public async getCardsCounter(): Promise<number> {
        return await this.baseLocator.locator(this.cardBaseSelector).count();
    }

    public getCard(counter: number): CardComponent {
        return new CardComponent(this.baseLocator.locator(`(${this.cardBaseSelector})[${counter}]`));
    }
}
