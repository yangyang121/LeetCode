/**
 * @param {string} s
 * @return {string}
 * map[stack[stack.length - 1]] > i 说明stack的最后一个元素在i后面还有
 */
var removeDuplicateLetters = function (s) {
  const seen = new Set();
  const stack = [];
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!seen.has(c)) {
      while (
        stack.length &&
        stack[stack.length - 1].charCodeAt() > c.charCodeAt() &&
        map[stack[stack.length - 1]] > i
      ) {
        seen.delete(stack.pop());
      }
      seen.add(c);
      stack.push(c);
    }
  }
  console.log(stack);
  return stack;
};

removeDuplicateLetters("bcabc");
removeDuplicateLetters("cbacdcbc");
