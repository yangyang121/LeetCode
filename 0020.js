// 左侧符号都 push，右侧符号如果跟 result 的最后一个符号匹配就删除 result 最后一项
// 不匹配就 push，最后查看 result 长度是否为 0
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const obj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const result = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (!obj[element]) {
      result.push(element);
    } else {
      const item = result.pop();
      if (item !== obj[element]) return false;
    }
  }
  return result.length === 0;
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([)]");
isValid("{[]}");
