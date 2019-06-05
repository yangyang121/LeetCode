var plusOne = function(digits) {
  //当digits的长度很大时无效
  /*return ((parseFloat(digits.join('')) + 1) + '').split('').map((x)=>parseFloat(x))*/

  for(var i = digits.length - 1;i >= 0;i--){
  	if(digits[i] === 9){
  		digits[i] = 0
  	}else{
  		digits[i]++
  		return digits
  	}
  }
  digits.unshift(1)
  return digits
};
plusOne([9,1,1])