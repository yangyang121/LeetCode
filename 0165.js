/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 *亦可以以 . 分割然后依次比较，但复杂度较高
 */
var compareVersion = function (version1, version2) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < version1.length || p2 < version2.length) {
    let x = p1;
    let y = p2;
    while (x < version1.length && version1[x] !== ".") x++;
    while (y < version2.length && version2[y] !== ".") y++;
    let n1 = p1 === x ? 0 : Number(version1.substring(p1, x));
    let n2 = p2 === y ? 0 : Number(version2.substring(p2, y));
    if (n1 < n2) {
      return -1;
    } else if (n1 > n2) {
      return 1;
    }
    p1 = x + 1;
    p2 = y + 1;
  }
  return 0;
};

compareVersion("0.1", "1.1");
compareVersion("1.0.1", "1");
compareVersion("7.5.2.4", "7.5.3");
compareVersion("1.01", "1.001");
compareVersion("1.0", "1");
