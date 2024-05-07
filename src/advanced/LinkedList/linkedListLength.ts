// 連結リストの長さ
// 片方向リストの先頭ノード head が与えられるので、片方向リストの長さを返す linkedListLength という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head
// 出力のデータ型： integer
// linkedListLength(singlyLinkedList([3,2,1,5,6,4])) --> 6
// linkedListLength(singlyLinkedList([7,8,2,3,1,7,8,11,4,3,2])) --> 11
// linkedListLength(singlyLinkedList([34,35,64,34,10,2,14,5,353,23,35,63,23])) --> 13
// linkedListLength(singlyLinkedList([1])) --> 1

{

  class SinglyLinkedListNode<E>{
    public data: E;
    public next: SinglyLinkedListNode<E> | null;

    constructor(data: E) {
      this.data = data;
      this.next = null;
    }
  }

function linkedListLength(head:SinglyLinkedListNode<number> | null): number{
  // 関数を完成させてください
  let count = 0
  while(head != null) {
      head = head.next
      count++
    }
    return count
  }
}