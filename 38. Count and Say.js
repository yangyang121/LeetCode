var countAndSay = function(n) {
	//参考了别人的代码
   	if(n === 0){
   		return ""
   	}
   	var res = '1';
   	while(--n){
   		var cur = '';
   		for(var i = 0;i<res.length;i++){
   			var count = 1;
   			while((i + 1 < res.length) && (res[i] === res[i + 1])){
   				count++;
   				i++;
   			}
   			cur += count + res[i];
   		}
   		res = cur;
   	}
   	console.log(res)
   	console.log(123456789*987654321)
};
countAndSay(1)