require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "import/ignore": ["\\.svg$", "\\.png$"],
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "react",
    "simple-import-sort",
    "import",
  ],
  rules: {
    ////// ESLint recommended + best practices
    //
    ////// https://eslint.org/docs/2.0.0/rules/
    //

    // warn on unused vars (from @typescript-eslint)
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    // don't allow assignment in ifs
    "no-cond-assign": "error",
    // disable logging via console
    "no-console": "error",
    // disable "debugger" keyword (prevents debugging in production / CI)
    "no-debugger": "error",
    // disable if (true) - pointless
    "no-constant-condition": "error",
    // "control characters are invisible characters in the ASCII range 0-31.
    // Regular expression containing these characters is most likely a mistake.
    "no-control-regex": "error",
    // no duplicate keys in objects - second one will overwrite first one always
    // if they appear, it's more likely a mistake
    "no-dupe-keys": "error",
    // same, but for function arguments
    "no-dupe-args": "error",
    // same, but for switch cases
    // why here duplicate instead of dupe? not sure
    "no-duplicate-case": "error",
    // errors on empty class in regexes
    "no-empty-character-class": "error",
    // disallow empty block statements
    "no-empty": "error",
    // disallow reassigment of error in catch blocks
    "no-ex-assign": "error",
    // disallow redundant negations for booleans (!!!foo)
    "no-extra-boolean-cast": "error",
    // disallow redundant parentheses in code
    "no-extra-parens": "error",
    // disallow redundant semicolons
    "no-extra-semi": "error",
    // disallow reassigning function declaration
    "no-func-assign": "error",
    // disallow declaring functions in any scope
    "no-inner-declarations": "error",

    ////// Imports
    //
    // often arraging imports is a style not logic issue
    // (not true when importing something that instantly evaluates, like jest extends)
    // even though we could use a prettier plugin
    // (https://github.com/ggascoigne/prettier-plugin-import-sort#readme)
    // we use eslint one because it's frequently updated and well maintained
    //
    // no multiple imports from same source
    "import/no-duplicates": "error",
    // imports are first thing in file
    "import/first": "error",
    // imports and actual code are separated by single empty line
    "import/newline-after-import": "error",
    // only use named exports - default exports make it harder to organize code
    "import/no-default-export": "error",

    // sort import and exports (always same order - whatever it is,
    // sensible default) for less lines-of-code-changed during MRs
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};
