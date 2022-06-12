var calculateTax = function(brackets, income) {
    let tax = 0
    
    if(income<=brackets[0][0]){
        tax+= income*(brackets[0][1]/100)
        console.log(tax)
        return tax
    }else{
        tax += (brackets[0][0])*(brackets[0][1]/100)
        income -= brackets[0][0]
    }
    
    for(let i = 1; i<brackets.length; i++){
        
        if(income<=brackets[i][0]-brackets[i-1][0]){
            tax+= income*(brackets[i][1]/100)
            income = 0
        }else{
            
                tax += (brackets[i][0]-brackets[i-1][0])*(brackets[i][1]/100)
            
            income -= brackets[i][0]-brackets[i-1][0]
            }
           
        
        console.log(tax)
        if(income==0){
            break
        }
    }
    return tax
};