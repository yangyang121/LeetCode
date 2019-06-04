/*Input: [2,4,3] + [5,6,4]
Output: [7,0,8]*/
var addTwoNumbers = function(l1, l2) {
  let isMoreTen = 0
  const result = []
  for (let i = 0; i < l1.length; i++) {
    result.push((l1[i] + l2[i] + isMoreTen) % 10)
    isMoreTen = l1[i] + l2[i] >= 10 ? 1 : 0
  }
  if (isMoreTen) {
    result.push(1)
  }
  return result
}

var arr1 = [2, 4, 9]
var arr2 = [5, 6, 4]
addTwoNumbers(arr1, arr2) //[7,0,8]
