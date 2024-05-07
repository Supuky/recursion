// 連結リストの逆表示
// 片方向リストの先頭ノード head が与えられるので、逆向きに変換した連結リストを返す reverseLinkedList という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head
// 出力のデータ型： SinglyLinkedListNode<integer>
// reverseLinkedList(singlyLinkedList([3,2,1,5,6,4])) --> 4➡6➡5➡1➡2➡3➡END
// reverseLinkedList(singlyLinkedList([3])) --> 3➡END
// reverseLinkedList(singlyLinkedList([3,1])) --> 1➡3➡END
// reverseLinkedList(singlyLinkedList([3,1,5])) --> 5➡1➡3➡END

// class SinglyLinkedListNode<E>{
//   public data: E;
//   public next: SinglyLinkedListNode<E>;

//   constructor(data: E) {
//       this.data = data;
//       this.next = null;
//   }
// }

function reverseLinkedList(head:SinglyLinkedListNode<number>): SinglyLinkedListNode<number>{
  // 関数を完成させてください
  let reverse = head
  head = reverse.next
  reverse.next = null

  while(head != null) {
      let temp = head
      head = head.next
      temp.next = reverse
      reverse = temp
  }
  return reverse
}