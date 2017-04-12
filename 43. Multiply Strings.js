var multiply = function(num1, num2) {
	var m = num1.length;
	var n = num2.length;
	var l = 0;
	var a;
	var b;
	
	for(var i = m - 1;i >= 0;i--){
		for(var j = n - 1;j >= 0;j--){
			a = m - i - 1;
			b = n - j - 1;

			l += num1[i] * Math.pow(10,a) * num2[j] * Math.pow(10,b);
		}
	}
    return l+''
};
multiply('123456789','987654321')//由于JavaScript的数字限制问题，数字最大只能显示到"121932631112635260"