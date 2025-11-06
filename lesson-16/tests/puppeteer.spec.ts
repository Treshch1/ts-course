import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';
import { expect } from 'chai';
import { RozetkaPage } from '../pom/rozetka.pom';

describe('Puppeteer Selectors Tests', function () {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let rozetkaPage: RozetkaPage;

    before(async function () {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null, // disable default 800x600
            args: ['--start-maximized'] // start browser maximized
        });
    });

    beforeEach(async function () {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        rozetkaPage = new RozetkaPage(page);
        await page.goto('https://rozetka.com.ua/');
    });

    afterEach(async function () {
        await page.close();
        await context.close();
    });

    after(async function () {
        await browser.close();
    });

    it('Menu test', async function () {
        await rozetkaPage.menuButton.click();
        await rozetkaPage.catalogButton.click();
        await rozetkaPage.firstMenuItem.click();
        const headingText = await rozetkaPage.portalTitle();
        expect(headingText).to.contain('Комп\'ютери та ноутбуки');
    });

    it('Search test', async function () {
        await rozetkaPage.waitForBanner();
        await rozetkaPage.search('Ноутбуки');
        const categoryText = await rozetkaPage.categoryTitle();
        expect(categoryText).to.contain('Ноутбуки');
    });

    it('Empty cart test', async function () {
        await rozetkaPage.cartButton.click();
        const cartText = await rozetkaPage.cartText();
        expect(cartText).to.contain('Кошик порожній');
    });

    it('Login popup test', async function () {
        await rozetkaPage.waitForBanner();
        await rozetkaPage.authButton.click();
        // Sometimes phone input loads as iframe so it may fail at the time of execution
        await rozetkaPage.waitForPhoneNumber();
        const authHeaderText = await rozetkaPage.authModalHeader();
        expect(authHeaderText).to.equal('Вхід');
    });
});
