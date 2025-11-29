import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { ConfigService } from '../services/config.service.ts';
import { AppPage } from '../pom/app.pom.ts';

export class AppWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();

    // we can create a context class that will have its set and get methods for better readability
    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context!: BrowserContext;
    public page!: Page;

    public get browser(): Browser {
        return AppWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return AppWorld.globalContext;
    }

    // pages getters
    public get app(): AppPage {
        if (!this._appPage) {
            this._appPage = new AppPage(this.page);
        }
        return this._appPage;
    }

    // service getters
    public get configService(): ConfigService {
        if (!this._configService) {
            this._configService = new ConfigService();
        }
        return this._configService;
    }

    // pages
    private _appPage?: AppPage;

    // services
    private _configService?: ConfigService;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
