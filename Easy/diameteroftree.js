// incorrect solution because this assumes the max diameter has to start  fron root but, max diameter can be totally in one half 
// var diameterOfBinaryTree = function(root) {
    
//     let l = depthTree(root.left)
    
//     let r = depthTree(root.right)
    
//     return l+r
    
//     function depthTree(root){
        
//         if(root == null){
//             return 0
//         }else{
//             let l = depthTree(root.left)
//             let r = depthTree(root.right)
            
//             let max = Math.max(l,r) +1
//             return max
//         }
//     }
// };

var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    dfs(root);
    
    return diameter;
    
    function dfs(node) {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // update diameter at every node
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far
        return 1 + Math.max(left, right);
    }
};