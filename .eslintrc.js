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
