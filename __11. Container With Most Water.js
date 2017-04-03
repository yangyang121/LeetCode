var maxArea = function(height) {
	 //这个方法性能有问题
    /*var water = 0;
    var s;
    var h;
    for(var i=0;i<height.length;i++){
    	for(var j=i+1;j<height.length;j++){
    		h = Math.min(height[i],height[j]);
    		s = h*(j-i);
    		water = Math.max(water,s);
    	}
    }
    console.log(water)
    return water*/

    //这个方法参考了别人的代码
    var water = 0;
    var i = 0;
    var j = height.length-1;
    var h;

   	while(i<j){
   		h = Math.min(height[i],height[j]);
   		water = Math.max(water,h*(j-i));

   		while(i<j&&height[i]<=h){
   			i++;
   		}

   		while(i<j&&height[j]<=h){
   			j--;
   		}
   	}
   	console.log(water);
   	return water
};