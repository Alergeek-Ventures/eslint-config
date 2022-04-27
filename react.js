module.exports = {
  plugins: ["react", "jsx-a11y"],
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
