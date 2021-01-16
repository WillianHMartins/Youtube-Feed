module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true,
    "jest/globals": true
  },
  "plugins": [
    "jest",
  ],
  "parser": "babel-eslint",
  "rules": {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "no-console": ["error", { "allow": ["error", "warn", "info"] }],
    "no-nested-ternary": "off",
    "camelcase": "off",
    "no-underscore-dangle": ["error", { "allow": ["__typename"] }],
    "no-param-reassign": [2, { "props": false }],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/jsx-props-no-spreading":  "off",
    "react/prop-types": ["error", { "ignore": ["error", "props"] }],
    "react/forbid-prop-types": "off",
  }
}
