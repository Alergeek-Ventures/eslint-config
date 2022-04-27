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

    // rules below: somewhat equal to eslint:recommended
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
    // disallow reassigning function declaration
    "no-func-assign": "error",
    // disallow declaring functions in any scope
    "no-inner-declarations": "error",
    // lint regexes
    "no-invalid-regexp": "error",
    "no-regex-spaces": "error",
    //  prevents problems with [a in b]
    "no-negated-in-lhs": "error",
    // warn about unreachable code
    "no-unreachable": "warn",
    // rules below: from ESLint's best practices
    // if setter is defined - require getter too
    "accessor-pairs": "error",
    // require returns in maps, reduces etc
    "array-callback-return": "error",
    // no more than 10 logic branches
    complexity: ["error", 10],
    // either always return or never
    "consistent-returns": "error",
    // always use brackets for if statements
    curly: "error",
    // require default case in switches
    "default-case": "error",
    // prefer dot notation for objects (a['foo'] => a.foo)
    "dot-notation": "error",
    // enforce strong equality checks (!= => !==)
    eqeqeq: "error",
    // only allow variables declaration in case blocks
    "no-case-declarations": "error",
    // disallow weird syntax for regexes that can be mistaken for mathematical division
    "no-div-regex": "error",
    // disallow else after a return in an if
    "no-else-return": "error",
    // disallow use of empty destructuring patterns
    "no-empty-pattern": "error",
    // disallow use of eval() and similiar functions
    "no-eval": "error",
    "no-implied-eval": "error",
    // disallow extending of built-ins
    "no-extend-native": "error",
    // prevent unnecessary function binding
    "no-extra-bind": "error",
    // prevent fallthrough from one switch case to other
    "no-fallthrough": "error",
    // prevent .5 or 2.
    "no-floating-decimal": "error",
    // prevent globals
    "no-implicit-globals": "error",
    // use readable type conversion methods
    "no-implicit-coercion": "error",
    // prevent misuse of this (outside of proper context)
    "no-invalid-this": "error",
    // no __iterator__
    "no-iterator": "error",
    // no labels
    "no-labels": "error",
    // prevent unnecessary blocks
    "no-lone-blocks": "error",
    // prevent magic numbers
    "no-magic-numbers": "error",
    // prevent misuse of wrappers
    "no-new-wrappers": "error",
    // prevent use of octal literals
    "no-octal": "error",
    // prevent reassignment of function parameters
    "no-param-reassign": "error",
    // prevent use of __proto__
    "no-proto": "error",
    // prevent assignments where values are equal
    "no-self-assign": "error",
    // prevent comparsion where values are equal
    "no-self-compare": "error",
    // prevent throwing non-error
    "no-throw-literal": "error",
    // prevent endless loops
    "no-unmodified-loop-condition": "error",
    // prevent unused statements
    "no-unused-expressions": "error",
    // ensure consistent logical expressions
    yoda: "error",
    // prevent variables shadowing
    "no-shadow": "error",
    // don't use var, use let only when modifying variable
    "no-var": "error",
    "prefer-const": "error",

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
