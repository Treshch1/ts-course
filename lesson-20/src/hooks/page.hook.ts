import { After, Before } from '@cucumber/cucumber';
import { AppWorld } from '../worlds/app.world.ts';

export function pageHook(): void {
    Before(async function(this: AppWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: AppWorld) {
        await this.page.close();
    });
}
