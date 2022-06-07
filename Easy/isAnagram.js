var isAnagram = function(s, t) {
    let map = {}
    for(let i = 0; i<s.length; i++){
        if(!(s[i] in map)){
           map[s[i]] = 1
            
        }else{
            map[s[i]] += 1
        }
    }
    for(let j = 0; j<t.length; j++){
        if(t[j] in map){
            map[t[j]] -= 1
            if(map[t[j]] < 0){
                return false
            }
        }else{
            return false
        }
    }
    for(const letters in map){
        
        if(map[letters] > 0){
            return false
        }
    }
return true
};