/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;
  for (const num of pushed) {
    stack.push(num);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  console.log(stack);
  return !stack.length;
};

validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]);
