var moveZeroes = function(nums) {
    
     var pointer = 0
    for(i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[pointer] = nums[i]
        pointer++
        }
    }
    for (i = pointer; i < nums.length; i++) {
nums[i] = 0;
}
return nums
}

console.log(moveZeroes([0,1,0,3,12]))