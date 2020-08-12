var strStr = function (haystack, needle) {
  const len = needle.length;
  const lenHay = haystack.length;
  if (len > lenHay) return -1;
  if (!needle) return 0;
  let i = 0;
  let j = len - 1;
  while (i < lenHay - j) {
    j = 0;
    while (haystack[i + j] === needle[j] && j < len) j++;
    if (j === len) return i;
    i++;
  }
  return -1;
};
strStr("hello", "lo");
strStr("aaaaa", "aba");
strStr("helollo", "ll");
strStr("heol", "l");
