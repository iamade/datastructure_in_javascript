//Using linkedList
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     console.log(this.top);
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     console.log(this);
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if(this.top === this.bottom){
//         this.bottom = null;
//     }
//     const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     console.log(this);
//     return this;
//   }
// }

// const myStack = new Stack();

//Using arrays


class Stack {
  constructor() {
    this.array = [];
  }

  peek(){
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this
  }

  pop(){
    this.array.pop()
    return this;
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
