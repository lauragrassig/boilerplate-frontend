/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ["import"],
  rules: {
    "no-console": "error",
    "no-duplicate-imports" : "error",
    "no-template-curly-in-string" : "error",
    "import/no-unresolved": [2, { ignore: ['^node:'] }],
    "import/order": [
      "error",
      
      {
        "newlines-between": "always",        
        "groups": [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object",
          "type"
        ]
      }
    ]  
  },
}
