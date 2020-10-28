module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base', 'prettier'
    ],
    // "parser": "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        // '@typescript-eslint',
        'prettier'
    ],
    rules: {
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    },
};
