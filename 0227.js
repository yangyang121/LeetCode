/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  function res(op, a, b) {
    if (op === "*") {
      return a * b;
    } else if (op === "/") {
      return (a / b) | 0;
    } else {
      return a + b;
    }
  }
  const numStack = [];
  let lastOp = "+";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (!isNaN(s[i])) {
      let tempNum = Number(s[i]);
      while (i < s.length && !isNaN(s[i + 1]) && s[i + 1] !== " ") {
        tempNum = tempNum * 10 + Number(s[++i]);
      }
      if (lastOp === "+") numStack.push(tempNum);
      else if (lastOp === "-") numStack.push(-tempNum);
      else numStack.push(res(lastOp, numStack.pop(), tempNum));
    } else {
      lastOp = s[i];
    }
  }
  let ans = 0;
  for (let n of numStack) ans += n;
  return ans;
};

calculate("3+2*2");
calculate(" 3/2 ");
calculate(" 3+5 / 2 ");
