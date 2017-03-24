var twoSum = function(nums, target) {
    for(var i =0;i<nums.length;i++){
    	for(var j =i+1;j<nums.length;j++){
    		if(nums[i]+nums[j]===target){
    			return [nums[i],nums[j]]
    		}	
    	}
    }
};
var nums = [2,5,7,9];
var target = 9;
twoSum(nums,target)//[2,7]