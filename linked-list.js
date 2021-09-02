// function createLinkedList() {
//   let head = null;


//   function insertHead(newData) {
//     const newNode = {
//       data: newData,
//       next: null
//     }

//     if(head == null) {
//       head = newNode;
//       return;
//     } else {
//       newNode.next = head;
//       head = newNode; 
//     }

//     return head;
//   }

//   function insertTail(newData) {
//     const newNode = {
//       data: newData,
//       next: null
//     }

//     if(head == null) {
//       head = newNode;
//     } else {
//       const tail = getTail();
//       tail.next = newNode;
//     }
//     return head;
//   }

//   function printList() {
//     if (head == null) return;

//     let current = head;
//     while(current != null) {
//       console.log(current.data);

//       current = current.next;
//     }
//   }

//   function getHead(){
//     return head;
//   }

//   function getTail(){
//     if(head == null) return null;

//     let tail = head;
//     while(tail.next != null) {
//       tail = tail.next;
//     }
//     return tail;
//   }

//   function getSize(){
//     if(head == null) return 0;

//     let current = head;
//     count = 0;
//     while(current != null) {
//       count += 1;

//       current = current.next;
//     }

//     return count;
//   }

//   function findIndexByData(data) {
//     if(head == null) return -1;

//     let current = head;
//     i = 0;
//     while(current != null) {
//       if(current.data === data) return i;

//       i++;
//       current = current.next;
//     }

//     return -1;
//   }

//   function findWithCallBack(callback) {
//     if(head == null) return undefined;

//     let current = head;
//     while(current != null) {
//       if(callback(current.data)) return current.data;

//       current = current.next;
//     }

//     return undefined;
//   }

//   return {
//     insertHead,
//     insertTail,
//     printList,
//     getHead,
//     getTail,
//     getSize,
//     findIndexByData,
//     findWithCallBack
//   };
// }

// const numberLinkedList = createLinkedList();

// numberLinkedList.insertHead(5);
// numberLinkedList.insertHead(4)
// numberLinkedList.insertHead(3);
// numberLinkedList.insertTail(3);

// numberLinkedList.printList();
// // numberLinkedList.printList();
// // numberLinkedList.printList();

// // console.log(numberLinkedList.getHead());
// // console.log(numberLinkedList.getTail());
// // console.log(numberLinkedList.getSize());
// console.log(numberLinkedList.findIndexByData(3));
// console.log(numberLinkedList.findIndexByData(2));
// console.log(numberLinkedList.findWithCallBack(x => x % 2 === 0));


