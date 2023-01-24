import { resolve } from 'path'

export default {
  roots: ["<rootDir>/src"],
  testMatch: ["**/src/**/*.spec.tsx"],
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", { diagnostics: false }]
  },
  cacheDirectory: resolve(__dirname, 'jest-cache'),
  clearMocks: true,
  collectCoverage: false,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  collectCoverageFrom: ['./src'],
  testEnvironment: "jsdom",
  "moduleDirectories": [
    __dirname,
    "src",
    "node_modules"
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
