function lights (S, k) {
    let newS = ""
    
    for(let i = 0; i<S.length; i++){
        if(k==0){
            newS += S[i]
            continue
        }
        if(S[i] == 'X'){
            if(k%2 == 0){
                newS += 'X'
            }else{
                newS += 'O'
            }
            k = Math.floor(k/2)
        }
        if(S[i] == 'O'){
            if(k%2 == 0){
                newS += 'O'
            }else{
                newS += 'X'
            }
            
            k = Math.ceil(k/2)
        }

    }
    console.log(newS)
}

lights("XXXXXX", 22 )