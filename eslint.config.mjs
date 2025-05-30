import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import react from 'eslint-plugin-react'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const gitignorePath = path.resolve(__dirname, '.gitignore')

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'next/typescript',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ),

    plugins: { react, '@typescript-eslint': typescriptEslint },

    languageOptions: { ecmaVersion: 2021, sourceType: 'module' },

    rules: { 'react/react-in-jsx-scope': 'off' },
  },
])
