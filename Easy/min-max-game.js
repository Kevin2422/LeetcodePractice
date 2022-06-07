var minMaxGame = function(nums) {
    if(nums.length === 1){
        return nums
    }
    let newnums = []
    for(let i = 0; i<nums.length/2; i++){
        if(i%2 === 0){
            newnums.push(Math.min(nums[2 * i], nums[2 * i + 1]))
        }else if(i%2 !== 0){
            newnums.push(Math.max(nums[2 * i], nums[2 * i + 1]))
        }
    }
    return minMaxGame(newnums)
};