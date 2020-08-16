/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  const validIPv4 = () => {
    const arr = IP.split(".");
    for (let str of arr) {
      if (str.length === 0 || str.length > 3) return "Neither";
      if (str[0] === "0" && str.length !== 1) return "Neither";
      for (let c of str) {
        if (isNaN(c)) return "Neither";
      }
      if (Number(str) > 255) return "Neither";
    }
    console.log("IPv4");
    return "IPv4";
  };
  const validIPv6 = () => {
    const arr = IP.split(":");
    const hexdigits = "0123456789abcdefABCDEF";
    for (let str of arr) {
      if (str.length === 0 || str.length > 4) return "Neither";
      for (let c of str) {
        if (hexdigits.indexOf(c) === -1) return "Neither";
      }
    }
    console.log("IPv6");
    return "IPv6";
  };
  if (IP.split(".").length === 4) {
    return validIPv4();
  } else if (IP.split(":").length === 8) {
    return validIPv6();
  }
  return "Neither";
};

validIPAddress("172.16.254.1");
validIPAddress("192.0.0.1");
validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334");
validIPAddress("256.256.256.256");
