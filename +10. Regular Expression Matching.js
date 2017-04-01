var isMatch = function(s, p) {
   	
};
isMatch("aa","a")// false
isMatch("aa","aa")// true
isMatch("aaa","aa")// false
isMatch("aa", "a*")// true
isMatch("aa", ".*")// true
isMatch("ab", ".*")// true
isMatch("aab", "c*a*b")// true