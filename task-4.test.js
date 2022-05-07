import capitalize from './task-4.js';

test('check if parameter is string', () => {
    expect(() => capitalize(4)).toThrow('parameter is not a string');
});

test('check if the string is capitalized', () => {
    expect(capitalize('str')).toBe('Str');
});
