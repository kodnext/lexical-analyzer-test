/* eslint-disable no-undef */
import { JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX } from '../../../../regex/js';

describe('A positive test suite for javascript identifier validation', () => {
    test('Test # 1 Variable starts with _', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('_blacnk')).toBe(true);
    });
    test('Test # 2 a camel case variable', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('camelCase')).toBe(true);
    });
    test('Test # 3 a pascal case variable', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('PascalCase')).toBe(true);
    });
    test('Test # 4 a snake case variable', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('SNAKE_CASE_')).toBe(true);
    });
    test('Test # 5 all caps', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('ALLCAPS')).toBe(true);
    });
    test('Test # 6 all small', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('allsmall')).toBe(true);
    });
    test('Test # 7 ends with a one digit number', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('something1')).toBe(true);
    });
    test('Test # 8 ends with a number', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('something12312321')).toBe(true);
    });
    test('Test # 9 has number in the middle', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('some123thing1')).toBe(true);
    });
});

describe('A negative test suite for javascript identifier validation', () => {
    test('Test # 1 should not starts with a number', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('9blacnk')).toBe(false);
    });
    test('Test # 2 should not starts with a special character other than _ or $', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('-camelCase')).toBe(false);
    });
    test('Test # 3 should not contain special character in the middle except _ or $', () => {
        expect(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX.test('some-thing')).toBe(false);
    });
});
