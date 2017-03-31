var isPalindrome = function(x) {
    if(x < 0){
        return false
    }else{
        var sum = 0;
        var a = x;
        while(x){
            sum = sum*10 + x%10;
            x = parseInt(x/10);
        }

        if(sum===a){
            return true
        }else{
            return false
        }
    }
    
};
isPalindrome(232);