/**
 * @param {character[]} chars
 * @return {number}
 * 遇到相同元素直接跳过
 */
var compress = function (chars) {
  if (chars.length === 0 || chars.length === 1) return chars.length;
  // 指向当前字符第一个
  let anchor = 0;
  let write = 0;
  for (let read = 0; read < chars.length; read++) {
    const element = chars[read];
    if (read + 1 === chars.length || element !== chars[read + 1]) {
      chars[write++] = chars[anchor];
      if (read > anchor) {
        for (let c of String(read - anchor + 1)) {
          chars[write++] = c;
        }
      }
      anchor = read + 1;
    }
  }
  console.log(chars);
  return write;
};

compress(["a", "a", "a", "b", "b", "c", "c", "c"]);
compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]);
