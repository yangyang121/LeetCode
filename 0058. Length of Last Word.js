var lengthOfLastWord = function(s) {
  var arr = s.trim().split(' ')
    
	return arr[arr.length-1].length
};
lengthOfLastWord('hello world')