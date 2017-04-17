var myPow = function(x, n) {
	//性能存在问题
	var result = x
	if(n > 0){
	    while(n > 1){
	    	result *= x
	    	n--
	    }
	    return result
	}else if(n < 0){
		while(n < -1){
			result *= x 
			n++
		}
		return 1/result
	}else{
		return 1
	}
console.log(myPow(10,4))