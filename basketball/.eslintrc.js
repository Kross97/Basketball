module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json",
    },
    plugins: [
        '@typescript-eslint',
        'react-hooks',
    ],
    extends: [
        'airbnb-typescript',
    ],
    rules: {
        "no-return-assign": 0,
        "consistent-return": 0,
        "import/prefer-default-export": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "eqeqeq": 0,
        "class-methods-use-this": 0,
        "import/no-cycle": 0,
        "no-case-declarations": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "react/require-default-props": 0,
        "react/no-unused-prop-types": 0,
        "react/prop-types": 0,
        "indent": "off",
        "@typescript-eslint/indent": ["error"],
        "import/no-extraneous-dependencies": 0,
        "linebreak-style": 0,
        "@typescript-eslint/no-throw-literal": 0,
    },
};