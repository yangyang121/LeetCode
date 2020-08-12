/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let ans = 0;
  let onOff = true;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element !== " " && onOff) {
      ans++;
      onOff = false;
    } else if (element === " ") {
      onOff = true;
    }
  }
  console.log(ans);
};

countSegments("Hello, my name is John");
