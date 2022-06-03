// returns a sorted array after squaring
// original array was sorted, but has negatives

var sortedSquares = function(nums) {
    
    let newArr = []
    console.log(newArr)
    let leftPointer = 0
    let rightPointer = nums.length - 1
    let numsInArr = 0

    while(numsInArr < nums.length){
        if(nums[leftPointer]**2 > nums[rightPointer]**2){
            newArr.unshift(nums[leftPointer]**2)
            numsInArr++
            leftPointer++
        } else if(nums[rightPointer]**2 > nums[leftPointer]**2){
            newArr.unshift(nums[rightPointer]**2)
            numsInArr++
            rightPointer--
        }else if(nums[leftPointer] != undefined){
            newArr.unshift(nums[leftPointer]**2)
            leftPointer++
            numsInArr++
        }else if(nums[rightPointer] !=undefined){
            newArr.unshift(nums[rightPointer]**2)
            rightPointer--
            numsInArr++
        }
        console.log(numsInArr)
    }
    
return newArr

};

squareArr([8])