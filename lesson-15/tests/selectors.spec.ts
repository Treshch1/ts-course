import { test, expect } from '@playwright/test';

test('CSS selectors', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    await page.click('button[data-testid="menu_button"]');
    await page.click('button.menu-button-catalog');
    await page.click('rz-fat-menu-old li[data-index="0"]');
    expect(await page.locator('h1.portal__heading').textContent()).toContain("Комп'ютери та ноутбуки");
});

test('XPath selectors', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    await page.click('//button[@data-testid="menu_button"]');
    await page.click('//button[contains(@class, "menu-button-catalog")]');
    await page.click('//rz-fat-menu-old//a[contains(text(), " Ноутбуки та комп’ютери ")]');
    expect(await page.locator('h1.portal__heading').textContent()).toContain("Комп'ютери та ноутбуки");
});

test('Mixed selectors', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    await page.locator('xpath=.//rz-section-tiles-block-best').isVisible();
    await page.fill('input[data-testid="search-suggest-input"]', 'Ноутбуки');
    await page.click('//rz-search-suggest-content//a[contains(text(), " Ноутбуки ")]');
    expect(await page.locator('//h1[@class="catalog-heading"]').textContent()).toContain('Ноутбуки');
});

test('Check cart button visibility using CSS selector', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    await page.click('button[data-testid="header-cart-btn"]');
    expect(await page.locator('.cart-dummy__heading').textContent()).toContain('Кошик порожній');
});

test('Check login popup opens using XPath selector', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/');

    await page.locator('xpath=.//rz-section-tiles-block-best').isVisible();
    await page.click('//button[@data-testid="header-auth-btn"]');
    const loginPopup = page.locator('xpath=.//rz-modal-layout');
    const modalHeader = loginPopup.locator('xpath=..//h2');
    const frameElement = loginPopup.frameLocator('xpath=..//iframe');
    const phoneInput = frameElement.locator('xpath=.//input[@data-qaid="phone"]');
    await expect(modalHeader).toHaveText('Вхід');
    await expect(phoneInput).toBeVisible();
});
