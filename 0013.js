var romanToInt = function (s) {
  const roman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let ans = 0;
  let i = 0;

  while (i < s.length) {
    if (s[i + 1] && roman[s.substring(i, i + 2)]) {
      ans += roman[s.substring(i, i + 2)];
      i += 2;
    } else {
      ans += roman[s[i++]];
    }
  }
  console.log(ans);
  return ans;
};
romanToInt("III");
romanToInt("IV");
romanToInt("IX");
romanToInt("LVIII");
romanToInt("MCMXCIV");
