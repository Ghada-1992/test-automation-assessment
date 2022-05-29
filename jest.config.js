module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testPathIgnorePatterns: ['/node_modules/', 'lib'],
    testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
    testTimeout: 120 * 1000,
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './reports',
                filename: 'report.html',
                openReport: false,
            },
        ],
    ],
}
