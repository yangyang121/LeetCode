/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  if (s.length < 3) return s;
  let res = "";
  const map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  const list = Array.from({ length: s.length + 1 });
  for (let [key] of map) {
    let i = map.get(key) || 0;
    if (!list[i]) list[i] = [];
    list[i].push(Array.from({ length: i }).fill(key).join(""));
  }
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i]) res += list[i].join("");
  }
  console.log(res);
  return res;
};
frequencySort("tree");
frequencySort("cccaaa");
frequencySort("Aabb");
