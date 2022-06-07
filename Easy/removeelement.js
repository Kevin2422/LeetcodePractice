// my solution 
// two pointers, start and end
// k decrememted for every time val is seen
var removeElement = function (nums, val) {
    let end = nums.length - 1
    let start = 0
    let k = nums.length
    
    while (start <= end) {
        // keep incrementing start index until you find val in the array
        // when you do, check to see if the index at end contains val
        // keep decrementing end index until it doesn't contain val or until end = start
        // also decrement k in the while to keep track of how many times an index containing val is seen
        // swap end and start, which puts the value at start at the last position that doesn't contain val
        // decrement end and k 
        if (nums[start] === val) {
            while (nums[end] == val && end>start) {
                k--
                end--
            }
            
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            k--
            end--
        }
        start++
    }
    return k
};
console.log(removeElement([2,3,4,,5,3], 3))

// var removeElement = function(nums, val) {
//     let left = 0;
    
//     for (let right=0; right<nums.length; right++) {
//         if (nums[right] !== val) {
//             nums[left] = nums[right];
//             left++
//         };
//     };
    
//     return left;
    
// };
