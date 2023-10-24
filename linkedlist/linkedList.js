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
            insertFirstNode(data)
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size ++
    }
    //insert at given index
    insertAtIndex(data, index){
        if(index > 0 && index > this.size) {
            return
        }
        if (index === 0) {
            this.insertFirstNode(data)
            return
        }
        const node = new Node(data)
        let current = this.head; let previous
        let count = 0
        while (count !== index) {
            previous = current
            current = current.next
            count ++
        }
        previous.next = node
        node.next = current
    }

    //print linked list
    printListData(){
        let current = this.head
        let desiredArray = []
        while(current !== null){
            desiredArray.push(current.data)
            current = current.next
        }
        console.log(desiredArray)
    }
    //remove at index

    removeAtIndex(index){
        let current = this.head
        let previous
        if (index === 0) {
            this.head = current.next
            return
        }
        let count = 0
        while(count !== index){
            previous = current
            current = current.next
            count++
        }
        if (count === index) {
            let nextOne = current.next
            previous.next = nextOne
        }
        console.log(`Deleted ${current.data}`);
    }
    //get index
    getElementIndex(index){
        let current = this.head
        let count = 0
        while(count !== index){
            current = current.next
            count++
        }
        console.log(current.data);
    }
    //index
    getIndex(element) {
        let current = this.head
        let count = 0
        let elementIndices = []
        while (current.next) {
            if (current.data === element) {
                elementIndices.push(count)
            }
            current = current.next
            count ++
        }
        console.log(elementIndices)
    }
}

const ll = new LinkedList()
ll.insertFirstNode(100)
ll.insertFirstNode(300)
ll.insertLastNode(1000)
// ll.insertAtIndex(2, 1)
// ll.insertAtIndex(2, 3)
// ll.getIndex(2)
// console.log(ll)

// ll.printListData()
// ll.getElementIndex(3)
// ll.removeAtIndex(0)
ll.printListData()
ll.insertAtIndex(5, 1)
ll.printListData()


