var removeElement = function(nums, val) {
    /*nums = nums.filter(function(item){
    	if(item === val){
    		return false
    	}else{
    		return true
    	}
    });
    console.log(nums)
    return nums.length*/

    var i = 0;
    var j = 0;

   	while(j < nums.length){
   		if(nums[j] !== val){
   			nums[i] = nums[j];
   			i++;
   		};
   		j++;
   	}
   	console.log(i)

};
removeElement([3,2,2,3],3);