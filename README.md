# AV's ESLint configuration

- our way of ensuring code consistency
- no styling rules - use with `prettier`
- available flavors 🍧:
  - `vanilla` (Javascript + imports)
  - `typescript` (uses `@typescript-eslint` suite)
  - `react` (react, JSX, hooks)
  - `tests` (integration / unit tests via `@testing-library` and `jest`)
  - `cypress` (e2e tests)

## how to use:

```js
# example
module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: ["./vanilla.js", "./typescript.js", "./react.js", "./tests.js"],
  parser: "@typescript-eslint/parser",
  root: true,
  parserOptions: {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};

```
