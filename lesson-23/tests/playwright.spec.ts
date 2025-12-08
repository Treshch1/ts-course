import * as dotenv from 'dotenv-safe';
import { expect, test } from '@playwright/test';
import { HomepagePage } from '../pom/home.page';

test.describe('Expense Tracker App Tests', () => {
    let homepage: HomepagePage;

    test.beforeAll(async () => {
        dotenv.config();
    });

    test.beforeEach(async ({ page }) => {
        homepage = new HomepagePage(page, process.env.BASE_URL!);
        await homepage.goto();
    });

    test('Add positive transaction', async function () {
        const initialBalance = await homepage.getBalance();
        expect(initialBalance).toBe(0);

        await homepage.addTransaction('Salary', 1000);
        const newBalance = await homepage.getBalance();
        const income = await homepage.getIncome();
        const expense = await homepage.getExpense();
        expect(income).toBe(1000);
        expect(expense).toBe(0);
        expect(newBalance).toBe(1000);
    });

    test('Add negative transaction', async function () {
        await homepage.addTransaction('Groceries', -500);
        const newBalance = await homepage.getBalance();
        const income = await homepage.getIncome();
        const expense = await homepage.getExpense();
        expect(income).toBe(0);
        expect(expense).toBe(500);
        expect(newBalance).toBe(-500);
    });

    test('Add multiple transactions', async function () {
        await homepage.addTransaction('Freelance', 2000);
        await homepage.addTransaction('Rent', -800);
        await homepage.addTransaction('Utilities', -200);

        const newBalance = await homepage.getBalance();
        const income = await homepage.getIncome();
        const expense = await homepage.getExpense();
        expect(income).toBe(2000);
        expect(expense).toBe(1000);
        expect(newBalance).toBe(1000);
    });

    test('Delete a transaction', async function () {
        await homepage.addTransaction('Investment', 1500);
        await homepage.addTransaction('Dining Out', -300);

        let balance = await homepage.getBalance();
        expect(balance).toBe(1200);

        await homepage.deleteTransaction(0);

        balance = await homepage.getBalance();
        expect(balance).toBe(1500);
    });
});
