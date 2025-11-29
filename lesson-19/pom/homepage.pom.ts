import { Page } from '@playwright/test';
import { ScrollerComponent } from 'components/scroller.component';

export class HomepagePage {
    public constructor(public page: Page) {}

    public getScroller(counter: number): ScrollerComponent {
        return new ScrollerComponent(this.page.locator(`(//div[@data-testid="content-scroller"])[${counter}]`));
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.airbnb.com.ua/');
    }
}
