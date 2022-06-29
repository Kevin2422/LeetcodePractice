var searchMatrix = function(matrix, target) {
    let l = 0, r = matrix.length - 1;
    let currentRow = null;
    
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        currentRow = matrix[mid];
        
        if (target < currentRow[0]) {
            r = mid  -1;
        } else if (target > currentRow[currentRow.length - 1]) {
            l = mid + 1;
        } else {
            console.log(r,l)
            break
        }
        console.log(r,l)
    }
    
    if (!currentRow) return false
    
    l = 0, r = currentRow.length - 1;
    
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (currentRow[mid] === target) {
            return true
        } else if (target > currentRow[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return false
};