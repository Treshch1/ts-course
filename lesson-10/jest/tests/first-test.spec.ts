import { expect } from 'chai';

describe('Sample Test Suite', () => {
    beforeAll(() => {
        console.log('Setting up before tests...');
    });

    afterAll(() => {
        console.log('Cleaning up after tests...');
    });

    beforeEach(() => {
        console.log('Starting a new test...');
    });

    afterEach(() => {
        console.log('Finished a test.');
    });

    describe('Nested Describe Block', () => {
        beforeAll(() => {
            console.log('Setting up before nested tests...');
        });

        afterAll(() => {
            console.log('Cleaning up after nested tests...');
        });

        beforeEach(() => {
            console.log('Starting a new nested test...');
        });

        afterEach(() => {
            console.log('Finished a nested test.');
        });

        it('should verify the sum of two numbers', () => {
            const a = 5;
            const b = 10;
            const result = a + b;
            expect(result).to.equal(15).and.to.be.a('number');
        });

        it('should check if a string contains a substring', () => {
            const str = 'Hello, TypeScript!';
            expect(str).to.contain('TypeScript').and.to.be.a('string');
        });
    });
});
