import calculate from '../logic/calculate';

describe('test calculate', () => {
  test('to record intry', () => {
    const obj = { total: null, next: null, operation: null };
    const btnName = '3';
    const result = calculate(obj, btnName);
    expect(result.next).toBe(btnName);
  });
  test('to record multiple intries', () => {
    const obj = { total: null, next: '4', operation: null };
    const btnName = '3';
    const result = calculate(obj, btnName);
    expect(result.next).toBe('43');
  });
  test('to multiply', () => {
    const obj = { total: null, next: '3', operation: null };
    const operation = calculate(obj, 'x');
    const secondIntry = calculate(operation, '2');
    const result = calculate(secondIntry, '=');
    expect(result.total).toBe('6');
  });
});
