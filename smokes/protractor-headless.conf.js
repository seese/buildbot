exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/*.scenarios.ts'
    ],

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--headless', '--disable-gpu', '--no-sandbox', '--window-size=1024,768']
        }
    },

    baseUrl: 'http://localhost:8010',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    },

    onPrepare() {
        require('ts-node').register({
          project: './tsconfig.ee.json'
        });
    }
};
