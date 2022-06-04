var isPalindrome = function(x) {
    let number = x.toString()
    let count = 0
    if(x<0){
        return false
    }else {
        for(let i =number.length-1; i>=0; i--){
            console.log(number[count], number[i])
            if(number[count] != number[i]){
                return false
            }
            count++
        }
        return true
    }

    
};

// function isPalindrome(x) {
//     if (x<0 || (x!=0 && x%10==0)) return false;
//     let rev = 0;
//     while (x>rev){
//         console.log(x%10)
//     	rev = rev*10 + x%10;
//     	x = x/10;
//         console.log(x, rev)
//     }
//     return (x==rev || x==rev/10);
// }

// var isPalindrome = function(x) {
//     if (x < 0) return false;
	
//     // reverse the string representation of x
//     const reverse = `${x}`.split('').reverse().join('');
//     // compare the value regardless of types
//     return x == reverse;
// };
console.log(isPalindrome(555555))