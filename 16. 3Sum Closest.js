var threeSumClosest = function(nums, target) {
    var min = [];
    var max = [];
    if(nums.length < 3){
    	return max
    }
    nums = nums.sort(function(a,b){
    	return a - b
    });
    for(var i = 0;i < nums.length - 2;i++){
    	if(i > 0 && nums[i] === nums[i-1]){
    		continue
    	}
    	for(var j = i+1,k = nums.length - 1;j < k;){
    		if(nums[i] + nums[j] + nums[k] === target){
    			return target
    		}else if(nums[i] + nums[j] + nums[k] > target){
    			max.push(nums[i] + nums[j] + nums[k]);
    			k--;
    		}else{
    			min.push(nums[i] + nums[j] + nums[k]);
    			j++
    		}
    	}
    } 
    if(max.length!==0){
    	max = max.sort(function(a,b){
	    	return a - b
	    })
	    var aNum = max[0] - target;
    }
    if(min.length!==0){
    	min = min.sort(function(a,b){
	    	return b - a
	    })
    	var iNum = target - min[0];
    }
   	if(aNum && !iNum){
   		return max[0]
   	}else if(!aNum && iNum){
   		return min[0]
   	}else{
   		if(aNum < iNum){
   			return max[0]
   		}else{
   			return min[0]
   		}
   	}
};
threeSumClosest([0,1,2],0)