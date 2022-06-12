function maximumUniqueSubarray(nums) {
        
    let set =  {};
    
  let sum =0
  let ans =0;
    let  j = 0;
    
    let i = 0;
    
    while(i<nums.length && j<nums.length){
        
        if(!(nums[j] in set)){
            
            sum+=nums[j];
            ans = Math.max(sum,ans);
            set[nums[j++]] = true;
        }else{
            
            sum = sum-nums[i];
            delete set[nums[i++]];
        }
        
    }

    return ans;
}