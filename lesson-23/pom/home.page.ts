import { Page } from '@playwright/test';

export class HomepagePage {
    public balanceLocator = this.page.locator('#balance');
    public incomeLocator = this.page.locator('.money.plus');
    public expenseLocator = this.page.locator('.money.minus');
    public descriptionInput = this.page.locator('#description');
    public amountInput = this.page.locator('#transactionamount');
    public submitButton = this.page.locator('button.btn');
    public transactionItems = this.page.locator('ul li');
    public deleteTransactionButtons = this.page.locator('button.delete-btn');

    public constructor(public page: Page, public baseUrl: string) {}

    public async getBalance(): Promise<number> {
        const balanceText = await this.balanceLocator.textContent();
        return parseFloat(balanceText?.replace('$', '') || '0.00');
    }

    public async getIncome(): Promise<number> {
        const incomeText = await this.incomeLocator.textContent();
        return parseFloat(incomeText || '0.00');
    }

    public async getExpense(): Promise<number> {
        const expenseText = await this.expenseLocator.textContent();
        return parseFloat(expenseText || '0.00');
    }

    public async addTransaction(description: string, amount: number): Promise<void> {
        await this.descriptionInput.fill(description);
        await this.amountInput.fill(amount.toString());
        await this.submitButton.click();
    }

    public async deleteTransaction(counter: number): Promise<void> {
        await this.transactionItems.nth(counter).hover();
        await this.deleteTransactionButtons.nth(counter).click();
    }

    public async goto(): Promise<void> {
        await this.page.goto(this.baseUrl);
    }
}
