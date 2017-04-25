var mySqrt = function(x) {
	//原生方法
	return Math.sqrt(x)
	//参考了别人的代码
  var r = x;
  while (r*r > x){
    r = ((r + x/r) / 2) | 0
  }
  return r
};
mySqrt(9)