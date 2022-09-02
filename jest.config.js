module.exports = {
  // preset: 'ts-jest/presets/default-esm',
  globals: {
    // 'ts-jest': {
    //   useESM: true,
    // },
    'esbuild-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'esbuild-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};
