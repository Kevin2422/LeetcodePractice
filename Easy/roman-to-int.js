// My solution
var romanToInt = function(s) {
let num = 0;
let map = {}
map["I"] = 1
map["V"] = 5
map["X"] = 10
map["L"] = 50
map["C"] = 100
map["D"] = 500
map["M"] = 1000
for(let i = 0; i<s.length; i++){
    if(s[i] === "I" && (s[i+1] === "V" || s[i+1] ===  "X")){
        num -= 1
        i++
    }
    else if(s[i] === "X" && (s[i+1] === "L" || s[i+1] === "C")){
        num -= 10
        i++
    }
    else if(s[i] === "C" && (s[i+1] === "D" || s[i+1] === "M")){
        num -= 100
        i++
    }
    num += map[s[i]]
}
return num
};

// var romanToInt = function(s) {
//     let num = 0;
//     let preint = 0
//     let map = {}
//     map["I"] = 1
//     map["V"] = 5
//     map["X"] = 10
//     map["L"] = 50
//     map["C"] = 100
//     map["D"] = 500
//     map["M"] = 1000
//     for(let i = s.length-1; i>=0; i--){
//        if(map[s[i]] >= preint)
//         num += map[s[i]]
//         else{
//             num -= map[s[i]]
//         }
//         preint = map[s[i]]
//         console.log(num)
//     }
//     return num
//     };

// console.log(romanToInt("III"))