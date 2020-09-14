/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let a = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) a++;
  }
  const arrS = Array.from({ length: 10 }).fill(0);
  const arrG = Array.from({ length: 10 }).fill(0);
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] !== guess[i]) {
      arrS[secret[i] - 0]++;
      arrG[guess[i] - 0]++;
    }
  }
  let b = 0;
  for (let i = 0; i < 10; i++) {
    b += Math.min(arrS[i], arrG[i]);
  }
  return `${a}A${b}B`;
};

getHint("1807", "7810");
getHint("1123", "0111");
