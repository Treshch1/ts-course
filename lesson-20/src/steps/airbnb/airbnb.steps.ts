import { Given, Then, When } from '@cucumber/cucumber';
import { AppWorld } from '../../worlds/app.world.ts';
import { ScrollerComponent } from 'src/components/scroller.component.ts';
import { CardComponent } from 'src/components/card.component.ts';
import { expect } from '@playwright/test';
// import { expect } from 'chai';

Given('the user navigates to the home page with cookies handling', async function(this: AppWorld) {
    await this.app.homepage.goto();
    try {
        // Sometimes a modal appears on homepage load
        await this.app.modalCloseButton.waitFor({ state: 'visible', timeout: 2000 });
        await this.app.modalCloseButton.click();
    } catch {
        // Ignore if modal is not present
    }
});

Given('the user see the {int} scroller', async function(this: AppWorld, counter: number) {
    const scroller = this.app.homepage.getScroller(counter);
    this.scenarioContext.set('scroller', scroller);
});

Given('the user get the last card', async function(this: AppWorld) {
    const scroller = this.scenarioContext.get('scroller') as ScrollerComponent;
    const numberOfCards = await scroller.getCardsCounter();
    const lastCard = scroller.getCard(numberOfCards);
    this.scenarioContext.set('lastCard', lastCard);
});

Then('last card is not visible', async function(this: AppWorld) {
    const lastCard = this.scenarioContext.get('lastCard') as CardComponent;
    await expect.poll(async () => await lastCard.isVisible()).toBe(false);
});

When('the user scrolls right', async function(this: AppWorld) {
    const scroller = this.scenarioContext.get('scroller') as ScrollerComponent;
    await scroller.rightArrowButton.click();
});

Then('last card is visible', async function(this: AppWorld) {
    const lastCard = this.scenarioContext.get('lastCard') as CardComponent;
    await expect.poll(async () => await lastCard.isVisible()).toBe(true);
});

When('the user scrolls left', async function(this: AppWorld) {
    const scroller = this.scenarioContext.get('scroller') as ScrollerComponent;
    await scroller.leftArrowButton.click();
});

Given('the user get the {int} card', async function(this: AppWorld, counter: number) {
    const scroller = this.scenarioContext.get('scroller') as ScrollerComponent;
    const card = scroller.getCard(counter);
    this.scenarioContext.set('card', card);
});

When('the user favorites the card', async function(this: AppWorld) {
    const card = this.scenarioContext.get('card') as CardComponent;
    await card.favoriteButton.click();
});

Then('the modal title is {string}', async function(this: AppWorld, expectedTitle: string) {
    await expect(this.app.modalTitle).toHaveText(expectedTitle);
});
