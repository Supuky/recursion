// DoublyLinkedListクラス
// 片方向リストでは、リストの逆側に走査できないという問題がありました。双方向リストは片方向リストと異なり、逆側も参照できるデータ構造です。
// 各 Item が前の Item と、次の Item を参照することによって、要素どうしの前後関係を表現することができます。以下は各要素を表す Item クラスです。
// int data: 要素の値
// Item prev: 1 つ前のノード。デフォルトでは null に設定してください。
// Item next: 1 つ先のノード。デフォルトでは null に設定してください。
// 先頭と末尾を定義することによって、DoublyLinkedList クラスを表現できます。固定配列を受け取り、コンストラクタ関数内で それぞれの Item の前後を繋げてください。

// Item head: 先頭の Item
// Item tail: 末尾の Item
// テストケース
// DoublyLinkedList numList = new DoublyLinkedList([1,2,3,4,5,6,7])
// numList.head.data --> 1
// numList.head.next.data --> 2
// numList.head.next.prev.data --> 1
// numList.tail.data --> 7
// numList.tail.prev.data --> 6
// numList.tail.prev.prev.data --> 5
(() => {
  class Item {
    data: number| null;
    prev: Item | null;
    next: Item | null;
    constructor(data: number | null){
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }

  class DoublyLinkedList{
    head: Item | null;
    tail: Item | null;
    constructor(array: number[]){
      if(array.length < 0) {
        this.head = new Item(null);
        this.tail = this.head;
        return;
      }
      
      this.head = new Item(array[0]);
      let currenItem = this.head;
      
      for(let i=1; i < array.length; i++){
        currenItem.next = new Item(array[i]);
        currenItem.next.prev = currenItem;
        currenItem = currenItem.next;
      }

      this.tail = currenItem;
    }
  }

  const numList = new DoublyLinkedList([1,2,3,4,5,6,7]);
  // console.log(numList.head.data);
  // console.log(numList.head.next.data);
  // console.log(numList.head.next.prev.data);
  // console.log(numList.tail.data);
  // console.log(numList.tail.prev.data);
  // console.log(numList.tail.prev.prev.data);
})()