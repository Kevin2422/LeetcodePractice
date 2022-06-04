// my solution
var isValid = function(s) {
let stack = []

    for(let i = 0; i<s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
        }else if(s[i] === ")"){
            if(stack[stack.length-1]!== "("){
                return false
            }
            stack.pop()
        }else if(s[i] === "}"){
            if(stack[stack.length-1]!== "{"){
                return false
            }
            stack.pop()
        }else if(s[i] === "]"){
            if(stack[stack.length-1]!== "["){
                return false
            }
            stack.pop()
        }
    }
   
    return stack.length === 0
};

// var isValid = function(s) {
//     let stack = []
//     for(let i = 0; i<s.length; i++){
//         if(s[i] === "("){
//             stack.push(")")
//         }else if (s[i] === "{"){
//             stack.push("}")
//         }else if (s[i] === "["){
//             stack.push("]")
//         }else if (stack.length === 0 || stack.pop() !== s[i] ){
//             return false
//         }
//     }
//     return stack.length === 0
// };

// isValid("()")