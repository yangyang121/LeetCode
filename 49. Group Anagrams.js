var groupAnagrams = function(strs) {
    var strs = strs.sort()
    var map = {}
    var result = []
    for(var i = 0;i < strs.length;i++){
    	var str = strs[i]
    	var sorted = str.split('').sort().join('')

    	if(map[sorted] === undefined){
    		map[sorted] = [str]
    	}else{
    		map[sorted].push(str)
    	}
    }
    console.log(map)
    for(var arr in map){
    	result.push(map[arr])
    }	
    return result
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])