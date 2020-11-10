/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) return [];
  const ans = [];
  const path = [];
  function dfs(index, start) {
    if (index === 4) {
      start === s.length && ans.push(path.join("."));
      return;
    }
    if (start === s.length) return;
    if (s[start] === "0") {
      path[index] = 0;
      dfs(index + 1, start + 1);
    }
    let addr = 0;
    for (let i = start; i < s.length; i++) {
      addr = addr * 10 + (s[i] - "0");
      if (addr > 0 && addr <= 255) {
        path[index] = addr;
        dfs(index + 1, i + 1);
      } else {
        break;
      }
    }
  }
  dfs(0, 0);
  console.log(ans);
  return ans;
};

restoreIpAddresses("25525511135");
restoreIpAddresses("0000");
restoreIpAddresses("1111");
restoreIpAddresses("010010");
