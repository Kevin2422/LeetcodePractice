var reformat = function(s) {
    var newString = "";
    var numsArr = [];
    var letterArr = [];
    

    for(var i=0; i<s.length; i++){
        if(!isNaN(s[i])){
            numsArr.push(s[i])
        }else if(isNaN(s[i]) ){
            letterArr.push(s[i])
        
    }
  
    
    
}
console.log(numsArr)
console.log(letterArr)

        while(numsArr.length!== 0 && letterArr.length!==0){
            newString += numsArr.shift() + letterArr.shift()
        }

        if (numsArr.length ===0 && letterArr.length === 0){

            return newString
        }
        else if(numsArr.length > 1 || letterArr.length>1){

            return ''
        } 
        else if(numsArr.length !== 0){

            console.log("num")
                return newString + numsArr.shift() 
        }
        else if(letterArr !== 0)
            return letterArr.shift() + newString


}

console.log(reformat("covid2019"))