// fast and slow pointer, fast twice as fast as slow
// when fast goes through list, slow will be in the middle
var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

// my solution :-(
var middleNode = function(head) {
    let count = 0
    if(head == null){
        return head
    }
    
    let runner = head
    while(runner.next){
        runner = runner.next
        count++
    }
    
    for(let i = 0; i<Math.ceil(count/2); i++){
        head = head.next
    }
    return head
};