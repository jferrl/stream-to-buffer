module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: ['**/test/**/*.test.(ts|js)'],
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['lcov'],
    collectCoverageFrom: ['lib/**/*.{js,jsx,ts,tsx}', '!lib/index.ts']
};
