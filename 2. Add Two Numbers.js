/*Input: [2,4,3] + [5,6,4]
Output: [7,0,8]*/
var addTwoNumbers = function(arr1, arr2) {
    var num1 = parseFloat(arr1.join(""));
    var num2 = parseFloat(arr2.join(""));
    
    var result = num1 + num2 +"";
    return result.split("").reverse()
};

var arr1 = [2,4,3];
var arr2 = [5,6,4];
addTwoNumbers(arr1,arr2)//[7,0,8]