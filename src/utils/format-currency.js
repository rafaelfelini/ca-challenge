/**
 * format number as currency and add symbol if available
 * @param  {string} symbol [currency symbol] optional
 * @param  {number} value  [number to be converted]
 * @return {string}        [currency]
 */
export default function (rawValue) {
  if (isNaN(parseFloat(rawValue)) || !isFinite(rawValue)) {
    return '';
  }

  const roundValue = parseInt(rawValue, 10);
  const money = roundValue.toString();
  const cents = '00';
  const formatedValue = parseFloat(`${money}.${cents}`)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');

  return formatedValue;
}
