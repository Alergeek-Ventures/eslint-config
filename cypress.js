module.exports = {
  extends: ["./vanilla.js", "./typescript.js", "plugin:cypress/recommended"],
  plugins: ["cypress"],
  env: {
    "cypress/globals": true,
  },
};
