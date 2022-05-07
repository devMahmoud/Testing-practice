// import * as stringManipulation from './string-manipulation.js';
import stringLength from './task-1.js';

test('test string length', () => {
  expect(stringLength('hello')).toEqual(5);
});

test('test too long string', () => {
    expect(() => stringLength('mmmmmmmmmmmmmmmmmmm')).toThrow('string is empty or too long');
});

test('test empty string', () => {
    expect(() => stringLength('')).toThrow('string is empty or too long');
});
