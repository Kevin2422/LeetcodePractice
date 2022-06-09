// var addBinary = function(a, b) {
//     let sum =""

//     let carry = 0
//     let indexA = a.length -1
//     let indexB = b.length -1
    
//     while(indexA >= 0 && indexB >= 0){
//         let tempSum = carry + parseInt(a[indexA]) + parseInt(b[indexB])
//         if(tempSum>2){

//             sum =  `1` + sum
//             carry = tempSum - 1
//         }else{
//             sum = sum + `${tempSum%2}`
//             if(tempSum == 2){
//                 carry = 1
//             } else
//             carry = 0
//         }
//         indexA--
//         indexB--
//         console.log(sum)
//     }
    
//     while(indexA >=0){
//         let tempSum = carry + parseInt(a[indexA])
//         if(tempSum>2){

//             sum =  `1` + sum
//             carry = tempSum - 1
//         }else{
//             sum = sum + `${tempSum%2}`
//             if(tempSum == 2){
//                 carry = 1
//             } else
//             carry = 0
//         }
//         indexA--
        
//     }
    
//     while(indexB >=0){
//         let tempSum = carry + parseInt(b[indexB])
//         if(tempSum>2){

//             sum =  `1` + sum
//             carry = tempSum - 1
//         }else{
//             sum = sum + `${tempSum%2}`
//             if(tempSum == 2){
//                 carry = 1
//             } else
//             carry = 0
//         }
//         indexB--
//     }
    
//     while(carry >0){
        
//         let tempSum = carry 
//         if(tempSum>2){

//             sum =  `1` + sum
//             carry = tempSum - 1
//         }else{
//             sum = sum + `${tempSum%2}`
//             if(tempSum == 2){
//                 carry = 1
//             } else
//             carry = 0
//         }
        
//     }
//      return sum
    
    
// };

 function addBinary( a,  b) {
     sb = ""; //Google immutability or string vs stringbuilder if you don't know why we use this instead of regular string
     i = a.length - 1, j = b.length -1, carry = 0; //two pointers starting from the back, just think of adding two regular ints from you add from back
    while (i >= 0 || j >= 0) {
         sum = carry; //if there is a carry from the last addition, add it to carry 
        if (j >= 0) sum += b.charAt(j--) - '0'; //we subtract '0' to get the int value of the char from the ascii
        if (i >= 0) sum += a.charAt(i--) - '0';
        sb = `${sum % 2}` + sb; //if sum==2 or sum==0 append 0 cause 1+1=0 in this case as this is base 2 (just like 1+9 is 0 if adding ints in columns)
        carry = Math.floor(sum / 2); //if sum>=2 we have a carry, else no carry 1/2 rounds down to 0 in integer arithematic
    }
    if (carry != 0) sb = `${carry}` +sb; //leftover carry, add it
    return sb;
}

console.log(addBinary("1111", "1111"))