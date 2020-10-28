/* eslint-disable no-undef */
import { JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX, ASSINGMENT_STATEMENT_REGEX } from '../../../../regex/js';

describe('A positive test suite for javascript identifier validation', () => {
  test('Test # 1 single character variable', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('var a = 0;')).toBe(true);
  });
  test('Test # 2 single character variable', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('var abs = 0;')).toBe(true);
  });
  test('Test # 3 single character variable', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('let a = 0;')).toBe(true);
  });
  test('Test # 4 single character variable', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('let abs = 0;')).toBe(true);
  });
});

describe('A negative test suite for javascript identifier validation', () => {
  test('Test # 1 sign other than equal', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('var a == 0;')).toBe(false);
  });
  test('Test # 2 wrong special keyword', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('vars a = 0;')).toBe(false);
  });
  test('Test # 3 has invalid syntex', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('var a = 0; *')).toBe(false);
  });
  test('Test # 4 has invalid syntex', () => {
    expect(ASSINGMENT_STATEMENT_REGEX.test('vars a = 0?')).toBe(false);
  });
});