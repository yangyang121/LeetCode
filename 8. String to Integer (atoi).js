var myAtoi = function(str) {
    var max = 2147483647;//2的31次方
    var min = -2147483648;//-2的31次方-1
    //int的范围是-2的31次方到2的31次方-1
    if(isNaN(parseInt(str))){
        return 0
    }else{
        if(parseInt(str) > max){
            return max
        }else if(parseInt(str) < min){
            return min
        }else{
            return parseInt(str)
        }
    }
};
myAtoi('');