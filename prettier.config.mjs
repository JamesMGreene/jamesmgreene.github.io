/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  objectWrap: 'collapse',
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',

  // Extensions
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
