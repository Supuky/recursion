// 末尾の削除
// 連結リストの先頭 head が与えられるので、リストの末尾のノードを削除した新しい連結リストを返す、deleteTail という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head
// 出力のデータ型： SinglyLinkedListNode<integer>
// deleteTail(singlyLinkedList([1])) --> END
// deleteTail(singlyLinkedList([3,3,2,10,34,45,67,356])) --> 3➡3➡2➡10➡34➡45➡67➡END
// deleteTail(singlyLinkedList([8,7,21,3,2,7])) --> 8➡7➡21➡3➡2➡END
// deleteTail(singlyLinkedList([8,8,7,7,5])) --> 8➡8➡7➡7➡END
// deleteTail(singlyLinkedList([8,6,3,5,7])) --> 8➡6➡3➡5➡END
// deleteTail(singlyLinkedList([8,8,7,7,6,6,5,5,4,4])) --> 8➡8➡7➡7➡6➡6➡5➡5➡4➡END
// deleteTail(singlyLinkedList([2,5,10,25,50])) --> 2➡5➡10➡25➡END
// deleteTail(singlyLinkedList([20,-5,34,45,67,356,34,687,31,-34,5])) --> 20➡-5➡34➡45➡67➡356➡34➡687➡31➡-34➡END

class SinglyLinkedListNode<E>{
  public data: E;
  public next: SinglyLinkedListNode<E>;

  constructor(data: E) {
      this.data = data;
      this.next = null;
  }
}

function deleteTail(head:SinglyLinkedListNode<number>): SinglyLinkedListNode<number>{
  // 関数を完成させてください
  if (head === null || head.next === null) {
      // リストが空または1つのノードしかない場合、null を返す
      return null;
  }

  let iterator = head;
  while (iterator.next.next !== null) {
      iterator = iterator.next;
  }
  iterator.next = null;

  return head;
}