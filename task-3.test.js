import Calculator from './task-3.js';

describe('test add method', () => {
  test('add positive numbers', () => {
    expect(Calculator.add(2, 5)).toEqual(7);
  });

  test('add negative numbers', () => {
    expect(Calculator.add(-2, -5)).toEqual(-7);
  });

  test('add a positive and a negative number', () => {
    expect(Calculator.add(2, -5)).toEqual(-3);
  });
});

describe('test subtract method', () => {
    test('subtract positive numbers', () => {
      expect(Calculator.subtract(2, 5)).toEqual(-3);
    });
  
    test('subtract negative numbers', () => {
      expect(Calculator.subtract(-2, -5)).toEqual(3);
    });
  
    test('subtract a positive and a negative number', () => {
      expect(Calculator.subtract(2, -5)).toEqual(7);
    });
});

describe('test divide method', () => {
    test('divide positive numbers', () => {
      expect(Calculator.divide(8, 2)).toEqual(4);
    });
  
    test('divide negative numbers', () => {
      expect(Calculator.divide(-8, -2)).toEqual(4);
    });
  
    test('divide a positive and a negative number', () => {
      expect(Calculator.divide(8, -2)).toEqual(-4);
    });
});

describe('test multiply method', () => {
    test('multiply positive numbers', () => {
      expect(Calculator.multiply(8, 2)).toEqual(16);
    });
  
    test('multiply negative numbers', () => {
      expect(Calculator.multiply(-8, -2)).toEqual(16);
    });
  
    test('multiply a positive and a negative number', () => {
      expect(Calculator.multiply(8, -2)).toEqual(-16);
    });
});