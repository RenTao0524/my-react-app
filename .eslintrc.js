module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // parser: "babel-eslint",
  extends: [
    'react-app',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react-hooks',
    "prettier"
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
