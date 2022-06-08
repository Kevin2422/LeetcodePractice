var search = function(nums, target) {
    let start  = 0;
    let end = nums.length - 1
    let mid = Math.floor((start+end)/2)
   
    while(start <= end){
        if(nums[mid] === target){
            return mid
        }else{
            if(nums[mid] >= target){
                end = mid - 1
                mid = Math.floor((start+end)/2)
            }else if(nums[mid] < target){
                start = mid + 1
                mid = Math.floor((start+end)/2)
            }
        }
    }
    return -1
};

var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};