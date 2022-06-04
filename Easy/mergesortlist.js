// my solution
var mergeTwoLists = function (list1, list2) {

    let runner
    let runner2
    if (list1 === null && list2) {
        return list2
    }
    if (list2 === null && list1) {
        return list1
    }
    if (list2 === null && list1 === null) {
        return list1
    }

    if (list1.val > list2.val) {

        runner = list2
        runner2 = list1
    } else {
        runner = list1
        runner2 = list2
    }
    let head = runner
    while (runner2 && runner.next) {

        if (runner.val <= runner2.val && (runner.next.val > runner2.val || runner.next == null)) {
            let temp = runner.next
            runner.next = new ListNode(runner2.val)
            runner.next.next = temp
            runner = runner.next
            runner2 = runner2.next
        } else {
            runner = runner.next
        }
    }
    if (runner2) {
        runner.next = runner2
    }



    return head
};

// var mergeTwoLists = function(l1, l2) {
//     var mergedHead = { val : -1, next : null },
//         crt = mergedHead;
//     while(l1 && l2) {
//         if(l1.val > l2.val) {
//             crt.next = l2;
//             l2 = l2.next;
//         } else {
//             crt.next = l1;
//             l1 = l1.next;
//         }
//         crt = crt.next;
//     }
//     crt.next = l1 || l2;
    
//     return mergedHead.next;
// };

var mergeTwoLists = function (list1, list2) {

    
    if (list1 === null && list2) {
        return list2
    }
    if (list2 === null && list1) {
        return list1
    }
    if (list2 === null && list1 === null) {
        return list1
    }

   
    let head = runner
    while (runner2 && runner.next) {

        if (runner.val <= runner2.val && (runner.next.val > runner2.val || runner.next == null)) {
            let temp = runner.next
            runner.next = new ListNode(runner2.val)
            runner.next.next = temp
            runner = runner.next
            runner2 = runner2.next
        } else {
            runner = runner.next
        }
    }
    if (runner2) {
        runner.next = runner2
    }



    return head
};