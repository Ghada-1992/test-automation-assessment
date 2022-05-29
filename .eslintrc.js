module.exports = {
    root: true,
    extends: ['plugin:playwright/jest-playwright', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'playwright/missing-playwright-await': 'error'
    },
    env: {
        node: true,
    },
}