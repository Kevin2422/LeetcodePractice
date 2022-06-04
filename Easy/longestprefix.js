// my solution 
var longestCommonPrefix = function(strs) {
    let prefix = ""
    let index = 0
    while(index<strs[0].length){

        let char = strs[0][index]
        for(let i = 1; i<strs.length; i++){
            if(strs[i][index]!== char){
                return prefix
            }
        }
        prefix += char
        index++
    }
    return prefix
}