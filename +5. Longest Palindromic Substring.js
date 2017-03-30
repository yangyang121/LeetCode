var longestPalindrome = function(s) {
    var start = 0;
	var end = 0;
	var tmp_start = 0;
	var tmp_end = 0;
	var bFind = false;
	var bRepeat = false;

	for (var i = 1; i < s.length; i++){
		if (bFind){
			if (bRepeat && s[i] == s[i-1]){
				tmp_end++;
				continue;
			}else{
				bRepeat = false;
			}
			if (tmp_start - 1 >= 0 && s[tmp_start-1] == s[i]){
				tmp_start--;
				tmp_end++;
			}else{
				bFind = false;
				if (tmp_end - tmp_start > end - start){
					start = tmp_start;
					end = tmp_end;
				}
				i = (tmp_start + tmp_end)/2 + 2;//此处i需要跳转到center+2的位置
			}
		}
		if (!bFind){
			if (s[i] == s[i-1]){
				tmp_start = i-1;
				tmp_end = i;
				bFind = true;
				bRepeat = true;
			}
			if (i-2 >= 0 && s[i] == s[i-2]){
				tmp_start = i-2;
				tmp_end = i;
				bFind = true;
			}
		}
	}

	if (tmp_end - tmp_start > end - start){
		start = tmp_start;
		end = tmp_end;
	}
	console.log(s.substring(start,end-start+1))
	return s.substring(start,end-start+1);
};
longestPalindrome("babad");
longestPalindrome("cbbd")