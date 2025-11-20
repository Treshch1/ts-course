import { expect } from '@playwright/test';
import { test } from 'fixtures/app-fixture';


test.describe('Puppeteer Selectors Tests', () => {
    // Previously worked but now rozetka blocks the navigation
    test.fail('Menu test', async function ({ rozetka }) {
        await rozetka.menuButton.click();
        await rozetka.catalogButton.click();
        await rozetka.firstMenuItem.click();
        const headingText = await rozetka.portalTitle();
        expect(headingText).toContain('Комп\'ютери та ноутбуки');
    });

    // Failed due to captcha
    test.fail('Search test', async function ({ rozetka }) {
        await rozetka.waitForBanner();
        await rozetka.search('Ноутбуки');
        const categoryText = await rozetka.categoryTitle();
        expect(categoryText).toContain('Ноутбуки');
    });

    test('Empty cart test', async function ({ rozetka }) {
        await rozetka.cartButton.click();
        const cartText = await rozetka.cartText();
        expect(cartText).toContain('Кошик порожній');
    });

    test('Login popup test', async function ({ rozetka }) {
        await rozetka.waitForBanner();
        await rozetka.authButton.click();
        await rozetka.waitForPhoneNumber();
        const authHeaderText = await rozetka.authModalHeader();
        expect(authHeaderText).toEqual('Вхід');
    });
});
