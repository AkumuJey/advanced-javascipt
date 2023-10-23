// const y1 = {
//     data: 200
// }

// const y2 = {
//     data: 300
// }

// y1.next = y2

// console.log(y1);

class Node {
    constructor (data, next=null) {
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    //inserting first node
    insertFirstNode(data){
        this.head = new Node(data, this.head)
        this.size ++
    }
    //insert last
    insertLastNode(data){
        let node = new Node(data)
        let current;
        if(!this.head) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size ++
    }
    //print linked list
    printListData(){
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()
ll.insertFirstNode(100)
ll.insertFirstNode(300)
ll.insertLastNode(1000)
// console.log(ll)

ll.printListData()