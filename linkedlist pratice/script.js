/************Doubly linked list********** */

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    // const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    console.log(this);
    console.log(this.printList());
    // return this.printList()
  }
  //lookup
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    console.log(this.printList());
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    // return this.printList();
    return this;
  }
}
satellie space  somethin simlar to whatsapp most 

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.reverse();
// myLinkedList.prepend(1);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.printList();
// console.log(myLinkedList)

/************Singly inked list ************ */

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value){
//         const newNode = {
//                 value: value,
//                 next: null
//             };
//         // const newNode = new Node(value);
//         this.tail.next = newNode.value
//         this.tail = newNode;
//         this.length++;
//         return this
//     }
//     prepend(value){
//         const newNode = {
//             value: value,
//             next: null
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this
//     }

//     printList() {
//         const array = [];
//         let currentNode = this.head;
//         while(currentNode !== null) {
//             array.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return array;
//     }

//     insert(index, value) {
//         //check params
//         if(index >= this.length) {
//             return this.append(value);
//         }

//         const newNode = {
//             value: value,
//             next: null
//         };
//         const leader = this.traverseToIndex(index-1)
//         const holdingPointer = leader.next;
//         leader.next =  newNode;
//         newNode.next = holdingPointer;
//         this.length++;
//         return this.printList()
//     }
//     //lookup
//     traverseToIndex(index){
//         //check params
//         let counter = 0
//         let currentNode = this.head;
//         while (counter !== index) {
//             currentNode = currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }

//     remove(index){
//         //check params
//         const leader = this.traverseToIndex(index-1);
//         const unwantedNode = leader.next
//         leader.next = unwantedNode.next;
//         this.length--;
//         return this.printList();
//     }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.printList();
// console.log(myLinkedList)
