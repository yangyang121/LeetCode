var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2);
    arr.sort(compare);
    var num1 = Math.floor((arr.length-1)/2);
    var num2 = Math.ceil((arr.length-1)/2);
    console.log((arr[num1]+arr[num2])/2)
    return (arr[num1]+arr[num2])/2

    function compare(prev,next){
    	return prev-next
    }
};
findMedianSortedArrays([1,3],[2]);
findMedianSortedArrays([1,2],[3,4])