var invertTree = function(root) {
    if (root){
         if(root.left || root.right){
        let temp = root.left
        root.left = root.right
        root.right = temp
    }
    invertTree(root.left)
    invertTree(root.right)
    }
   
    return root
};


// leetcode solutions

var invertTree = function(root) {
    if (!root){
        return null
    }

    let right = invertTree(root.right)
    let left = invertTree(root.left)
    root.left = right;
    root.right = left;
    return root
}

// iterative

var invertTree = function(root) {
    if(!root){
        return root
    }
    let queue = [root]
    while(queue.length > 0){
        let cur = queue.shift()
        let temp = cur.left
        cur.left = cur.right
        cur.right = temp
        if(cur.left){
            queue.push(cur.left)
        }
        if(cur.right){
            queue.push(cur.right)
        }
    }
    return root
}