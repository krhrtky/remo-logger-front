module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "airbnb",
  ],
  plugins: ["react", "@typescript-eslint", "tsc"],
  parser: "@typescript-eslint/parser",
  env: { node: true, es6: true },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "prettier/prettier": ["error", { semi: true }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "tsc/config": [
      "error",
      {
        configFile: "tsconfig.json",
      },
    ],
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "16.12",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", "css"],
      },
      alias: [["@", "./src"]],
    },
  },
};
