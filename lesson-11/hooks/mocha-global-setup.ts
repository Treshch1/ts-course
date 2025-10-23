declare global {
    var sharedTestData: {
        appName: string;
        version: string;
        initializedAt: Date;
    };
}

export async function mochaGlobalSetup(): Promise<void> {
    globalThis.sharedTestData = {
        appName: 'TS Course',
        version: '1.0.0',
        initializedAt: new Date()
    };
}
