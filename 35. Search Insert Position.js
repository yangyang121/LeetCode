var searchInsert = function(nums, target) {
    if(target > nums[nums.length-1] || nums.length === 0){
    	return nums.length
    }
    for(var i = 0;i < nums.length;i++){
    	if(nums[i] >= target){
    		return i
    	}
    }
};
searchInsert()
/*[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0*/