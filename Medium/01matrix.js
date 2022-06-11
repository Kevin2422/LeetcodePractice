var updateMatrix = function(mat) {
    let rows = mat.length
    if(rows == 0){
        return mat
    }
    let cols = mat[0].length
    
    // goes left to right, top to bottom
    // 0's are unchanged
    // if not zero, checks the cells above and to the left and the cell with the smaller value is the current cell's value plus 1
    // this gives the shortest path for each cell to zeros from the top left
    for(let i=0; i< rows; i++){
        for(let j=0; j<cols; j++){
            if(mat[i][j] == 0){
                
            }else{
                mat[i][j] = Infinity;
                if(i>0){
                    mat[i][j] = Math.min(mat[i][j], mat[i-1][j] + 1)
                }
                if(j>0){
                    mat[i][j] = Math.min(mat[i][j], mat[i][j-1]+1)
                }
            }
        }
    }
    
    // goes the opposite direction, right to left, bottom to top
    // checks the right and bottom cells
    // when you combine these two passes, it gives the shortest distance in all directions
    for(let i = rows-1; i>=0; i--){
        for(let j =cols-1; j>=0; j--){
            if(i<rows-1){
                mat[i][j] = Math.min(mat[i][j], mat[i+1][j] +1);
                
            }
            if(j<cols-1){
                mat[i][j] = Math.min(mat[i][j], mat[i][j+1]+1)
            }
        }
    }
    return mat
};