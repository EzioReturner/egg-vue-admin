module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "no-console": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true
      }
    ]
  },
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  }
}