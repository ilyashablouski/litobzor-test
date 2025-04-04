import { dirname } from 'path';
import unusedImports from 'eslint-plugin-unused-imports';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: { 'unused-imports': unusedImports },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // Node.js modules & npm-packages
            ['internal', 'parent', 'sibling', 'index'], // Inner project's modules
            ['type'], // Type's imports (import type {...})
            ['unknown'], // Undefined imports
            ['object'], // E.g.:, SCSS, CSS
          ],
          pathGroups: [
            { pattern: '**/*.png', group: 'unknown', position: 'before' },
            { pattern: '**/*.jpg', group: 'unknown', position: 'before' },
            { pattern: '**/*.svg', group: 'unknown', position: 'before' },
            { pattern: '**/*.scss', group: 'object', position: 'after' },
            { pattern: '**/*.css', group: 'object', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

export default eslintConfig;
