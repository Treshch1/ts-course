import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { AppWorld } from '../worlds/app.world.ts';

export function browserHook():void {
    BeforeAll(async function() {
        AppWorld.browser = await chromium.launch({ headless: false });
    });


    AfterAll(async function() {
        await AppWorld.browser.close();
    });
}
