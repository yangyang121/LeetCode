/**
 * @param {number} n
 * @return {number}
 * 计算乘法因子里有多少个5，其中 25 = 5 * 5 所以要算作 2 个 5，同理 125 算作 3 个 5
 */
var trailingZeroes = function (n) {
  let count = 0;
  while (n > 0) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  console.log(count)
};

trailingZeroes(25)
