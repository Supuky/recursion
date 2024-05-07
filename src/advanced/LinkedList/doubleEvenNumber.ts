// 偶数番目を2倍
// 片方向リストの先頭ノード head が与えられるので、偶数番目の値を 2 倍にし、それぞれの要素の後ろに追加し、連結リストを返す doubleEvenNumber という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head
// 出力のデータ型： SinglyLinkedListNode<integer>
// doubleEvenNumber(singlyLinkedList([3,2,1,5,6,4])) --> 3➡6➡2➡1➡2➡5➡6➡12➡4➡END
// doubleEvenNumber(singlyLinkedList([3])) --> 3➡6➡END
// doubleEvenNumber(singlyLinkedList([3,1])) --> 3➡6➡1➡END
// doubleEvenNumber(singlyLinkedList([3,1,5])) --> 3➡6➡1➡5➡10➡END

class SinglyLinkedListNode<E>{
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
      this.data = data;
      this.next = null;
  }
}

function doubleEvenNumber(head:SinglyLinkedListNode<number>): SinglyLinkedListNode<number>{
  // 関数を完成させてください
  let count = 0;
  let iterator: SinglyLinkedListNode<number> | null = head;

  while(iterator) {
    let currentNode = iterator;

    if(count % 2 === 0) {
      let newNode = new SinglyLinkedListNode(currentNode.data * 2);
      let temp = currentNode.next;
      currentNode.next = newNode;
      newNode.next = temp;
      iterator = iterator.next;
    };

    iterator = iterator.next;
    count++;
  };

  return head;
}