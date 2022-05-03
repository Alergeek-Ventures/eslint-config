module.exports = {
  extends: ["./vanilla.js", "./typescript.js", "plugin:cypress/recommended"],
  plugins: ["cypress"],
  files: ["**/cypress/**/*.{tsx,ts,jsx,js}"],
  env: {
    "cypress/globals": true,
  },
};
