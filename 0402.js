/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  while (stack[0] === "0") {
    stack.shift();
  }
  console.log(stack)
  return stack.length ? stack.join("") : "0";
};

removeKdigits("1432219", 3);
