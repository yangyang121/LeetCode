var longestCommonPrefix = function(strs) {
	if(strs.length === 0){
		return ''
	}else if(strs.length === 1){
		return strs[0]
	}else{
		var minS = strs[0];
		var result = '';

		strs.forEach(function(item,index){
			if(minS.length>item.length){
				minS = item;
			}
		})
		
		
		for(var i=0;i<minS.length;i++){
			var c = minS.charAt(i);
			var str = '';

			for(var j=0;j<strs.length;j++){
				if(strs[j][i]===c){
					str += c;
				};
			}
			
			if(str.length===strs.length){
				result += c;
			}else{
				console.log(result)
				return result
			}
		}
		console.log(result)
		return result
	}
};
longestCommonPrefix(['','']);