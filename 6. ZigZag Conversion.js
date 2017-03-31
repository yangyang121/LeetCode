var convert = function(s, numRows) {
    var str = '';
    var arr = [];
    var n = 0;
    var onOff = true;

    if(numRows===1){
        return s
    }else{
        for(var i=0;i<numRows;i++){
            arr.push([]);
        }
        
        for(var i=0;i<s.length;i++){
           
            if(n===0){
                onOff = true;
            };
            if(n===numRows-1){
                onOff = false;
            }
            arr[n].push(s[i]);
            if(onOff){
                n++;
            }else{
                n--;
            }
            
        }
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<arr[i].length;j++){
                str += arr[i][j];
            }
        }
        
        return str
    }
};
convert("Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.",2);