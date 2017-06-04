import formatCurrency from '../../utils/format-currency';

/**
 * tests
 */
it('should return an empty string', () => {
  expect(formatCurrency('')).toEqual('');
  expect(formatCurrency()).toEqual('');
});

it('should return a string', () => {
  expect(formatCurrency(190)).toEqual('190,00');
  expect(formatCurrency(105)).toEqual('105,00');
  expect(formatCurrency(5)).toEqual('5,00');
  expect(formatCurrency(99)).toEqual('99,00');
  expect(formatCurrency(0)).toEqual('0,00');
  expect(formatCurrency(1000)).toEqual('1.000,00');
  expect(formatCurrency(1000000)).toEqual('1.000.000,00');
});
