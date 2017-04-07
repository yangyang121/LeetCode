var removeDuplicates = function(nums) {
    /*//性能存在问题
    if(nums.length === 0 || nums.length === 1){
    	return nums.length
    }
    for(var i = 0;i < nums.length; i++){
    	for(var j = i+1; j<nums.length;j++){
    		if(nums[i] === nums[j]){
    			nums.splice(j,1);
    			j--;
    		}
    	}
    }
    console.log(nums)*/

    //参考别人的代码
    if(nums.length === 0 || nums.length === 1){
    	return nums.length
    }
    var i = 0;
    var	j = 1;

	while(j < nums.length){
		if(nums[i] === nums[j]){
			j++;
		}else{
			i++;
			nums[i] = nums[j];//为了输出正确的数组
			j++;
		}
	}
	console.log(nums)
	return ++i
};
removeDuplicates([1,1,2])