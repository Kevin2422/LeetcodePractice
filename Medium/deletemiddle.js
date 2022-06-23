function deleteMiddle( head) {
    if (head == null || head.next == null) return null;
    let slow = head, fast = head.next.next;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}