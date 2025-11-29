import { After, Before } from '@cucumber/cucumber';
import { AppWorld } from '../worlds/app.world.ts';
import * as fs from 'fs';
import { BrowserContextOptions } from 'playwright';

export function browserContextHook(): void {
    Before(async function(this: AppWorld) {
        // const featureName = pickle.uri.replace('.feature', '').replace(':', '-').replace('\\', '/');
        // const scenarioName = pickle.name.split(':').join('').replace('/', '-').replace('\\', '-');
        // const path = 'videos/' + featureName + '/' + scenarioName;

        const browserOptions: BrowserContextOptions = {
            // recordVideo: { dir: path },
            timezoneId: 'Europe/London',
            viewport: { width: 1280, height: 1024 }
        };

        const workerId = process.env.CUCUMBER_WORKER_ID ? parseInt(process.env.CUCUMBER_WORKER_ID) : 0;
        if (fs.existsSync(`.auth/storage-state-${workerId}.json`)) {
            browserOptions.storageState = `.auth/storage-state-${workerId}.json`;
        }
        this.context = await AppWorld.browser.newContext(browserOptions);
    });

    After(async function(this: AppWorld) {
        await this.context.close();
    });
}
