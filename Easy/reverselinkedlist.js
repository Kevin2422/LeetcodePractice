// don't do it this way it's cheating
// var reverseList = function(head) {
//     let vals = []
//     let runner = head
//     while(runner){
//         vals.push(runner.val)
//         runner = runner.next
//     }
    
//     if(vals.length==0){
//         return null
//     }
//     let reversed = new ListNode(vals[vals.length-1])
//     let runner2 = reversed
//     for(let i = vals.length-2; i >= 0; i--){
//         runner2.next = new ListNode(vals[i])
//         runner2 = runner2.next
//     }
//     return reversed
// };


var reverseList = function(head) {
    let prev = null

    while(head){
        let next = head.next // store head.next in a variable because the pointer will be broken
        head.next = prev // head.next points to the previous node/or null if head is the first node
        prev = head // prev and head are both shifted one over
        head = next
        //repeat until no more nodes in the list
    }
    // after the while loop head is null and prev is the head of the reversed list
       return prev
   };