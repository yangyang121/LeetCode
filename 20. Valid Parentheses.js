var isValid = function(s) {
    var len = s.length;
    var arr = [];
    var n = 0;
    if(len===0){
    	return false
    }
    if(len%2 === 0){
    	for(var i=0;i<len;i += 2){
    		var str = s.substring(i,i+2);
    		arr.push(str)
    	}
    	arr.forEach(function(item){
    		if(item==='()'){
    			n++;
    		}
    		if(item==='[]'){
    			n++;
    		}
    		if(item==='{}'){
    			n++;
    		}
    	})
    	if(n === arr.length){
    		console.log(true)
    		return true
    	}else{
    		console.log(false)
    		return false
    	}
    }else{
    	console.log(false)
    	return false
    }

};
isValid('([)]')