// hashmap
var majorityElement = function(nums) {
    let map = {}
    let count = nums.length/2
    for(let i = 0; i<nums.length; i++){
        if(nums[i] in map){
            map[nums[i]] += 1
        }else{
            map[nums[i]] = 1
        }
        
        if(map[nums[i]] > count){
            return nums[i]
        }
    }
};

// boyer
var majorityElement = function(nums){
    let count = 0
    let candidate
    for(let i =0; i<nums.length; i++){
        if(count == 0 ){
            candidate = nums[i]
        }
        if(nums[i] == candidate){
            count += 1
        }else{
            count -= 1
        }

    }
    return candidate
}