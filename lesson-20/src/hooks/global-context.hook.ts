import { BeforeAll } from '@cucumber/cucumber';
import { AppWorld } from '../worlds/app.world.ts';

export function globalContextHook(): void {
    BeforeAll(function() {
        AppWorld.globalContext = new Map();
    });
}
