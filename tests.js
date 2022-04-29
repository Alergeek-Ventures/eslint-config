module.exports = {
  extends: ["./vanilla.js"],
  overrides: [
    {
      // these rules work only for files with `test` in name
      files: [
        "**/**/*.test.tsx",
        "**/**/*.test.ts",
        "**/**/*.test.jsx",
        "**/**/*.test.js",
      ],
      extends: [
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        "plugin:jest/recommended",
      ],
      rules: {
        "jest/consistent-test-it": ["error", { fn: "it" }],
      },
    },
    {
      // these rules work only for files in cypress folder
      files: [
        "**/cypress/**/*.{tsx,ts,jsx,js}",
      ],
      extends: ['plugin:cypress/recommended'],
    },
  ],
};
