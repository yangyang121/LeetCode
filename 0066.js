/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let end = digits.length - 1
  digits[end] += 1
  while (end >= 0 && digits[end] === 10) {
    digits[end] = 0
    end--
    if (end >= 0) {
      digits[end] += 1
    } else {
      digits.unshift(1)
    }
  }
  return digits
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
console.log(plusOne([1, 9, 9, 9]))
console.log(plusOne([9, 9, 1, 9]))
console.log(plusOne([9, 9, 9, 9]))
