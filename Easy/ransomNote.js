var canConstruct = function(ransomNote, magazine) {
    //     in magazine you count the number of times a letter occurs, put in map
    //     in ransom note you check to see if letter is in the map, subtract number of times if it goes below 0 or if it's not in the map return false
        
        let map = {}
        
        for(let i = 0; i<magazine.length; i++){
            if(magazine[i] in map){
                map[magazine[i]] += 1
            }else{
                map[magazine[i]] = 1
            }
        }
        
        for (let j = 0; j<ransomNote.length; j++){
            if(ransomNote[j] in map){
                if(map[ransomNote[j]] == 0){
                    return false
                }
                map[ransomNote[j]] -= 1
            }else{
                return false
            }
        }
        return true
    };