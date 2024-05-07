// 片方向リストへの挿入
// easy
// 連結リストの先頭 head、位置 position、データ data が与えられるので、特定の位置の後にデータを挿入した連結リストを返す、insertAtPosition という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： SinglyLinkedListNode<integer> head, integer position, integer data

// 出力のデータ型： SinglyLinkedListNode<integer>

// insertAtPosition(singlyLinkedList([2,4]),0,5) --> 2➡5➡4➡END

// insertAtPosition(singlyLinkedList([2,4]),1,5) --> 2➡4➡5➡END

// insertAtPosition(singlyLinkedList([2,10,34,45,67,356]),2,5) --> 2➡10➡34➡5➡45➡67➡356➡END

// insertAtPosition(singlyLinkedList([2,10,34,45,67,356]),2,3) --> 2➡10➡34➡3➡45➡67➡356➡END

// insertAtPosition(singlyLinkedList([2,10,34,45,67,356]),5,3) --> 2➡10➡34➡45➡67➡356➡3➡END

// insertAtPosition(singlyLinkedList([20,-5,34,45,67,356]),34,50) --> 20➡-5➡34➡45➡67➡356➡END

// insertAtPosition(singlyLinkedList([20,-5,34,45,67,356,34,687,31,-34,5]),20,54) --> 20➡-5➡34➡45➡67➡356➡34➡687➡31➡-34➡5➡END

// insertAtPosition(singlyLinkedList([20,-5,34,45,67,356,34,687,31,-34,5]),4,54) --> 20➡-5➡34➡45➡67➡54➡356➡34➡687➡31➡-34➡5➡END

class SinglyLinkedListNode<E>{
  public data: E;
  public next: SinglyLinkedListNode<E>;

  constructor(data: E) {
      this.data = data;
      this.next = null;
  }
}

function insertAtPosition(head:SinglyLinkedListNode<number>, position:number, data:number): SinglyLinkedListNode<number>{
  // 関数を完成させてください
  let iterator = head
  let index = 0

  while(iterator != null) {
      if(index === position) {
          let currentNode = iterator
          let currentNodeNext = currentNode.next
          let newNode = new SinglyLinkedListNode(data)
          currentNode.next = newNode
          newNode.next = currentNodeNext
      }
      iterator = iterator.next
      index++
  }

  return head
}