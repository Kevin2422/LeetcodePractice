var lowestCommonAncestor = function (root, p, q) {
    //     find ancestors for p, store in array
    //     find ancestors for q
    //     if you find match between ancestors, shift
    let pAncestors = [root]
    let head = root
    while (root != p) {
        if (root.val < p.val) {

            root = root.right
            pAncestors.push(root)

        } else if (root.val > p.val) {

            root = root.left
            pAncestors.push(root)
        } else if (root.left == p) {
            root = root.left
            pAncestors.push(root)
        } else if (root.right == p) {
            root = root.right
            pAncestors.push(root)
        }
    }

    let cAncestor = pAncestors.shift()

    while (head != q) {
        if (!pAncestors[0]) {
            return cAncestor
        }


        if (head.val < q.val) {

            head = head.right
            if (pAncestors[0].val == head.val) {
                cAncestor = pAncestors.shift()
            }


        } else if (head.val > q.val) {

            head = head.left
            if (pAncestors[0].val == head.val) {
                cAncestor = pAncestors.shift()
            }

        } else if (head.left == q) {
            head = head.left
            if (pAncestors[0].val == head.val) {
                cAncestor = pAncestors.shift()
            }
        } else if (head.right == q) {
            head = head.right
            if (pAncestors[0].val == head.val) {
                cAncestor = pAncestors.shift()
            }
        }

    }

    return cAncestor
};

// Actually don't need to store anything
// Basically if they are different sides of the current node, return the current node
// if they are both on the left (both are less than root.val) go left, and vice versa

function lowestCommonAncestor( root,  p,  q) {
    while(root != null) {
        if(root.val > p.val && root.val > q.val)
            root = root.left;
        else if ( root.val < p.val && root.val < q.val)
            root = root.right;
        else
            return root;
    }   
    return root;
}