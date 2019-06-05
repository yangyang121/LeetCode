var addBinary = function(a, b) {
    var l = a.length>b.length ? a : b
    var s = a.length>b.length ? b : a
    l = l.split('')
    s = s.split('')
    var num = l.length - s.length
    var result = []
    var n = 0
    var onOff = false

    for (var i = 0; i < num; i++) {
    	s.unshift('0')
    }
    
    for(var i = l.length - 1; i >= 0; i--){
    	if(parseFloat(l[i]) + parseFloat(s[i]) >= 2){
    		if(l[i-1]){
    			l[i-1]++
    		}else{
    			onOff = true
    		}
    	}
    	n = (parseFloat(l[i]) + parseFloat(s[i]))%2
    	
    	result.unshift(n)
    }
    if(onOff){
    	result.unshift(1)
    }
    console.log(result)
};
addBinary('1111','1111')