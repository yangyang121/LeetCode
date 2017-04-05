var letterCombinations = function(digits) {
    var result = [];
    var arr = [
    	[' '],
    	[' '],
    	['a','b','c'],
    	['d','e','f'],
    	['g','h','i'],
    	['j','k','l'],
    	['m','n','o'],
    	['p','q','r','s'],
    	['t','u','v'],
    	['w','x','y','z']
    ];
    if(digits.length < 1){
    	return result
    }else if(digits.length === 1){
    	return arr[digits[0]]
    }else{
    	result = arr[digits[0]];
    	digits = digits.substr(1);
    	digits.split('').forEach(function(digit){
    		var t = [];
    		arr[digit].forEach(function(letter){
    			t = t.concat(result.map(function(item){
    				return item + letter
    			}))
    		})
    		result = t;
    	})
    	return result
    }
    
};
letterCombinations('234')