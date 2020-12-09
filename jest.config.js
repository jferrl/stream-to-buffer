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
    testMatch: ['**/tests/**/*.test.(ts|js)'],
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['lcov'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}']
};
