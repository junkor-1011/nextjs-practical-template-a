module.exports = {
  // preset: 'ts-jest/presets/default-esm',
  globals: {
    // 'ts-jest': {
    //   useESM: true,
    // },
    '@swc/jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        /*
      module: {
        type: 'commonjs',
      },
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
      transform: {
          react: {
            runtime: 'automatic'
          }
        }
      },
      */
      },
    ],
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};
