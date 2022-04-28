module.exports = {
  overrides: [
    {
      // these rules work only for files with `test` in name
      files: ["**/*.test.ts"],
      extends: [
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        "plugin:jest/recommended",
      ],
      rules: {
        "jest/consistent-test-it": ["error", { fn: "it" }],
      },
    },
  ],
};
