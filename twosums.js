const twoSum = (nums, target) => {
    // subtract index value from target
    // see if dictionary contains the difference
    // if it does return the indexes
    // if it doesn't add the value to the dictionary
    // repeat with next value
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
        return [map[another], i];
      }
  
      map[nums[i]] = i;
    }
  
    return null;
  };