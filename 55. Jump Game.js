var canJump = function(nums) {
	//参考别人的代码，觉得这个代码很有灵性！
   	var max = 0
   	for(var i = 0;i < nums.length;i++){
   		if(i > max){
   			return false
   		}
   		max = Math.max(nums[i] + i,max)
   	}
   	return true
};
canJump([3,2,1,0,4])