// 連結リストの末尾の値
// 片方向リストの先頭ノード head が与えられるので、末尾の値を返す linkedListLastValue という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： SinglyLinkedListNode<integer> head

// 出力のデータ型： integer

// linkedListLastValue(singlyLinkedList([3,2,1,5,6,4])) --> 4

// linkedListLastValue(singlyLinkedList([7,8,2,3,1,7,8,11,4,3,2])) --> 2

// linkedListLastValue(singlyLinkedList([34,35,64,34,10,2,14,5,353,23,35,63,23])) --> 23

// linkedListLastValue(singlyLinkedList([1])) --> 1
{

  class SinglyLinkedListNode<E>{
    public data: E;
    public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function linkedListLastValue(head:SinglyLinkedListNode<number>): number{
  // 関数を完成させてください
  while(head.next !== null) {
    head = head.next
  }
  return head.data
}
}