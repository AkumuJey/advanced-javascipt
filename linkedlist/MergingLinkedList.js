class ListNode{
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

const mergeTwoLists = (l1, l2) => {
    const curr = new ListNode()
    let dummHead = curr;
    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1 || l2
    return dummHead.next
}