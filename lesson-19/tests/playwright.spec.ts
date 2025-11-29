import { expect } from '@playwright/test';
import { test } from 'fixtures/app-fixture';

test.describe('Airbnb Tests', () => {
    test('Scroller test', async function ({ app }) {
        const scroller = app.homepage.getScroller(1);
        const numberOfCards = await scroller.getCardsCounter();
        const lastCard = scroller.getCard(numberOfCards);
        await expect.poll(async () => await lastCard.isVisible()).toBe(false);
        await scroller.rightArrowButton.click();
        await expect.poll(async () => await lastCard.isVisible()).toBe(true);
        await scroller.leftArrowButton.click();
        await expect.poll(async () => await lastCard.isVisible()).toBe(false);
    });

    test('Card favorite test', async function ({ app }) {
        const scroller = app.homepage.getScroller(1);
        const firstCard = scroller.getCard(1);
        await firstCard.favoriteButton.click();
        await expect(app.modalTitle).toHaveText('Увійдіть або зареєструйтеся');
    });
});
