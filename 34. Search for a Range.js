var searchRange = function(nums, target) {
    var j = 0;
    var result = [];
    while(j < nums.length){
    	if(nums[j] === target){
    		result.push(j);
    		nums[j] = target - 1;
    	}
    	j++;
    }
    if(result.length === 0){
    	return [-1,-1]
    }else if(result.length === 1){
    	result.push(result[0])
    	return result
    }else{
    	var arr = [result[0],result[result.length-1]];
    	return arr
    }
};
searchRange([3,3,3],3);