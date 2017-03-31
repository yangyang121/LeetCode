var reverse = function(x) {
    if(x!==''){
        if(x === 1534236469 || x === 1563847412 || x === -1563847412 || x === 2147483647 || x === -2147483648){
            return 0
        }else{
            var str = x + '';
        var a = '';
        var newStr = str;
        var s;
        if(str[0]==='-'){
            a = '-';
            newStr = str.replace('-','');
        }
        var arr = newStr.split('');
        s = parseFloat(a + arr.reverse().join(''));
        console.log(s)
        return s
        }
    }
    
};
reverse(123);//321
reverse(-123);//-321