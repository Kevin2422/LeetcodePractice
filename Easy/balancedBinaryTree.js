// postorder DFS
// recursive calls to root.left keep happening until it goes to the bottom left node, since it has no children, l and r are both 0, returns 1 + Math.max(0,0) = 1
// previous recursive call (where parent of the bottom left node is root) then calls the function on the its right side - depending on how deep the right side is, returns the depth of the right side
// then l and r is compared, whichever is longer is determined through Math.max, then you add one to account for the current node
// keeps repeating until you reach the first recursive call - which means that l is now the depth of the left side
// r is depth of the right side
// check to see if they differ by more than one, if they do return false
var isBalanced = function(root) {
    let result = true
    maxDepth(root)
    return result
    
    function maxDepth(root){
        if (root == null) return 0;
    let l  = maxDepth(root.left)
    let r = maxDepth(root.right)
    if(Math.abs(l-r) > 1){
        result = false
    }
        return 1 + Math.max(l,r)
    }
   
};