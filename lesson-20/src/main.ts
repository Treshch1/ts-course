import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { AppWorld } from './worlds/app.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(AppWorld);
