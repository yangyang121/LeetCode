var maxSubArray = function(nums) {
    var result = nums[0]
    for(var i = 0;i < nums.length;i++){
    	var num = 0
    	var j = i
    	while(j < nums.length){
    		num += nums[j]
    		if(result < num){
    			result = num
    		}
    		j++
    	}
    }
    console.log(result)
};
maxSubArray([-2])