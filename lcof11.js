/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;
  let povit = 0;
  while (low < high) {
    povit = Math.floor((low + high) / 2);
    if (numbers[povit] < numbers[high]) {
      high = povit;
    } else if (numbers[povit] > numbers[high]) {
      low = povit + 1;
    } else {
      high--;
    }
  }
  return numbers[low];
};
