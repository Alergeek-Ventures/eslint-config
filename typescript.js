module.exports = {
  extends: "./vanilla.js",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],

  rules: {
    // Typescript rules
    // taken from: https://typescript-eslint.io/rules/

    // warn on unused variables
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    // group overloads together
    "@typescript-eslint/adjacent-overload-signatures": "error",
    // force consistent style for Array types (Array<T> or T[])
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    // prevents awaiting a non-thenable
    "@typescript-eslint/await-thenable": "error",
    // prevent comments that disable TS superpowers
    "@typescript-eslint/ban-ts-comment": "error",
    // set of best practices for selecting proper type (e.g.: String -> string)
    "@typescript-eslint/ban-types": "error",
    // force consistent style for objects type definitions
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],
    // warn on type assertion (properly written code shouldn't have those!)
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
    ],
    // when creating an object definiton, enforce interfaces
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // force exporting and importing types only when possible
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    // make the default parameter the last one to allow omitting the default one
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",
    // prefer dot notation for objects (a['foo'] => a.foo)
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "error",
    // enforce consistent interface etc members ordering
    "@typescript-eslint/member-ordering": "error",
    // enforce consistent method signature
    "@typescript-eslint/method-signature-style": "error",
    // enforce creating arrays in a proper way (not via constructor)
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    // warn on stringyfing to [object Object]
    "@typescript-eslint/no-base-to-string": "warn",
    // eliminate confusion from nulls
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    // make it clear from the start whether you're returning something
    "@typescript-eslint/no-confusing-void-expression": "error",
    // prevent duplicated class members, imports and enum values,
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "error",
    // TODO: find out why this doesn't work? "@typescript-eslint/no-duplicate-enum-values": "error",
    // prevent empty functions
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "warn",
    // prevent empty interfaces
    "@typescript-eslint/no-empty-interface": "warn",
    // prevent any
    "@typescript-eslint/no-explicit-any": "error",
    // prevent extra non null assertion
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    // prevent floating promises - but allow then when marked with void operator
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    // prevent misuse of promises (like in if (promise))
    "@typescript-eslint/no-misused-promises": "error",
    // prevent iterating over arrays via for x in arr
    "@typescript-eslint/no-for-in-array": "error",
    // prevent eval() and alternatives
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",
    // prevent explicitly typing inferrable types
    "@typescript-eslint/no-inferrable-types": "error",
    // prevent misuse of this keyword outside of proper scope
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    // limit usage of void to return values
    "@typescript-eslint/no-invalid-void-type": "error",
    // warn on loss of precision when typed out number is not fitting into JS's
    // Number limits
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    // prevent usage of magic numbers
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "error",
    // prevent unnecessary use of void operator
    "@typescript-eslint/no-meaningless-void-operator": "error",
    // "using non-null assertions cancels the benefits of the strict
    // null-checking mode."
    "@typescript-eslint/no-non-null-assertion": "error",
    // warn when one of the types in union / intersection overrides others
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    // prevent variables shadowing
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    // prevent assignment of this, signals a wrong usage of it
    "@typescript-eslint/no-this-alias": "error",
    // prevent throwing non-error
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",
    // prevent unnecessary comparsions
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    // prevent constant condition paths
    "@typescript-eslint/no-unnecessary-condition": "error",
    // prevent unnecessary explicitly adding a default type argument
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    // prevent unnecessary assertions that won't change the outcome
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    // prevent extending default types
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    // force typing out function arguments
    "@typescript-eslint/no-unsafe-argument": "error",
    // prevent usage of any via reassigning
    "@typescript-eslint/no-unsafe-assignment": "error",
    // prevent usage of any via calling it
    "@typescript-eslint/no-unsafe-call": "error",
    // prevent usage of any via using it's members
    "@typescript-eslint/no-unsafe-member-access": "error",
    // prevent reverting any from functions
    "@typescript-eslint/no-unsafe-return": "error",
    // prevent unused expressions
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    // var<'string'> = 'string' -> var = 'string' as const
    "@typescript-eslint/prefer-as-const": "error",
    // force initializing enums
    "@typescript-eslint/prefer-enum-initializers": "error",
    // prefer for x of obj to for let i = 0...
    "@typescript-eslint/prefer-for-of": "error",
    // prefer includes() to indexOf()
    "@typescript-eslint/prefer-includes": "error",
    // use literals for enum initialization
    "@typescript-eslint/prefer-literal-enum-member": "error",
    // prefer safe cascade of a value when dealing with undefined or null
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    // prefer optional chaining (a?.b)
    "@typescript-eslint/prefer-optional-chain": "error",
    // prefer using type parameter for Array.reduce
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    // prefer RegExp#exec when no /g flag in regex
    "@typescript-eslint/prefer-regexp-exec": "error",
    // enforce `this` as a type when stating type for a method
    "@typescript-eslint/prefer-return-this-type": "error",
    // enforce startsWith to indexOf === 0
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    // enforce ts-expect-error over ts-ignore
    "@typescript-eslint/prefer-ts-expect-error": "error",
    // prevents default behavior of .sort() - which is confusing
    "@typescript-eslint/require-array-sort-compare": "error",
    // no async functions without awaits in body
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    // prevent number + string
    "@typescript-eslint/restrict-plus-operands": "error",
    // only allow string in templates
    "@typescript-eslint/restrict-template-expressions": "error",
    // prevent returning await
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    // sort union members
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    // only booleans in ifs and whiles
    "@typescript-eslint/strict-boolean-expressions": "error",
    // check if all paths are followed in code
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    // minimize overloads in favor of argument type unions
    "@typescript-eslint/unified-signatures": "error",
  },
};
