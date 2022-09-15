import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return the sum of two numbers', () => {
    const result = calculate({
      total: 0,
      next: null,
      operation: null,
    }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
