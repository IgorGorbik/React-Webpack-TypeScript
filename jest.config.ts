import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: ['./**/*.ts[x]'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleNameMapper: {
    '\\.(css)$': require.resolve('./test/emptyModule.ts'),
    '^test(.*)$': '<rootDir>./test/$1',
  },
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  snapshotSerializers: ['@emotion/jest'],
  testEnvironment: '<rootDir>test/jsdom-extended.ts',
  testMatch: [
    '<rootDir>./src/components/**/*.test.(tsx|ts)',
    '<rootDir>./src/features/**/*.test.(tsx|ts)',
  ],
  transform: {
    '.*\\.(tsx?|jsx?)$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
              importSource: '@emotion/react',
            },
          },
        },
      },
    ],
  },
  verbose: true,
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

export default config;
