/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let node = null
    // creates an array for the arguments passed in the functions, on first iteration, carry is und because three arguments haven't been passed 
    const carry = arguments[2]
    if (l1 || l2) {
        // if there's nothing in the list add nothing
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        // next value, if null it's null
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        // if carry is null add the values, if carry is true then you carry the one over and add one
        const val = carry ? val1 + val2 + 1 : val1 + val2

        // creates a node
        node = new ListNode(val % 10)
        // recursive function
        node.next = addTwoNumbers(next1, next2, val >= 10)  
    } else if (carry) {
        // if both lists are null but there is a carry, the node must be 1?
        node = new ListNode(1)
        node.next = null
    }
    return node
};