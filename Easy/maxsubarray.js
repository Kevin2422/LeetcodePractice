var maxSubArray = function(nums) {
    let maxSub = -Infinity
    let prev = 0
     for(let i =0; i<nums.length; i++){ // iterate through array
        prev = Math.max(prev+nums[i], nums[i]) // if the current chain + nums[i] is greater than nums[i], keep adding to the chain
        maxSub = Math.max(maxSub, prev) // find if current chain is greater than the max chain
    }
    return maxSub
};

// I'm dumb I guess
