class Item {
  data: number;
  next: Item | null;

  constructor(n: number) {
    this.data = n;
    this.next = null;
  };
};

class SinglyLinkedList {
  head: Item | null;

  constructor(node: Item) {
    this.head = node;
  };
};

const item1 = new Item(7);
const item2 = new Item(99);
const item3 = new Item(45);

item1.next = item2;
item2.next = item3;

const numList = new SinglyLinkedList(item1);
let current = numList.head;

while(current) {
  console.log(current.data);
  current = current.next;
}

// 配列 [35,23,546,67,86,234,56,767,34,1,98,78,555] を片方向リストに変換

// class Node{
//   constructor(data){
//       this.next = null;
//       this.data = data;
//   }
// }

// class SinglyLinkedList{
//   constructor(node){
//       this.head = node;
//   }
// }

// let arr = [35,23,546,67,86,234,56,767,34,1,98,78,555];

// let numList = new SinglyLinkedList(new Node(arr[0]));

// let currentNode = numList.head;
// for(let i = 1; i < arr.length; i++){
//   currentNode.next = new Node(arr[i]);
//   currentNode = currentNode.next;
// }

// currentNode = numList.head;
// while(currentNode !== null){
//   console.log(currentNode.data);
//   currentNode = currentNode.next;
// }