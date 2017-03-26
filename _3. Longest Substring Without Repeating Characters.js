/*Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3.*/
var lengthOfLongestSubstring = function(s) {
	var newArr = [];
	var num = 0;
	if(s===""){
		return 0
	}else{
	   	for(var i=0;i<s.length;i++){
	   		newArr = []
	   		for(var j=i;j<s.length;j++){
	   			if(newArr.indexOf(s[j])===-1){
	   				newArr.push(s[j])
	   				if(j===s.length-1){
	   					i =j;
	   					break;
	   				}
	   			}else{
	   				break
	   			}
	   		}
	   		if(num<newArr.length){
	   			num = newArr.length
	   		}
	   	} 
	   	console.log(num)
	   	return num
	}
};
lengthOfLongestSubstring("abcabcbb");//3
lengthOfLongestSubstring("bbbbb");//1
lengthOfLongestSubstring("pwwkew");//3