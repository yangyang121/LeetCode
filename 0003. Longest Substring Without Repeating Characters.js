/*Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3.*/
var lengthOfLongestSubstring = function(s) {
  let result = []
  let max = 0
  let index = 0
  if (!s) return 0
  for (let i = 0; i < s.length; i++) {
    index = result.indexOf(s[i])
    if (index !== -1) {
      if (index === result.length - 1) {
        result = [s[i]]
      } else {
        result.splice(0, index + 1)
        result.push(s[i])
      }
    } else {
      result.push(s[i])
    }
    max = result.length > max ? result.length : max
  }
  console.log(max)
  return max
}
lengthOfLongestSubstring("abcabcbb") //3
lengthOfLongestSubstring("bbbbb") //1
lengthOfLongestSubstring("pwwkew") //3
lengthOfLongestSubstring("dedf") //3
