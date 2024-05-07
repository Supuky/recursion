// 連結リスト内の値検索
// 連結リストの先頭 head と整数 data が与えられるので、リスト内に存在する data のインデックスを返す、linkedListSearch という関数を作成してください。もし、data が存在しない場合は、-1 を返してください。

// 関数の入出力例

// 入力のデータ型： SinglyLinkedListNode<integer> head, integer data
// 出力のデータ型： integer
// linkedListSearch(singlyLinkedList([1,3,4,5]),3) --> 1
// linkedListSearch(singlyLinkedList([1,1,1,1]),1) --> 0
// linkedListSearch(singlyLinkedList([1,6,3,63,68,9,5]),5) --> 6
// linkedListSearch(singlyLinkedList([3,3,2,10,34,45,67,356]),67) --> 6
// linkedListSearch(singlyLinkedList([20,-5,34,45,67,356,34,687,31,-34,5]),-5) --> 1
// linkedListSearch(singlyLinkedList([71,8,16,33]),71) --> 0
// linkedListSearch(singlyLinkedList([71,8,16,33]),686) --> -1
// linkedListSearch(singlyLinkedList([101,54,822,93,131,1800,99]),1800) --> 5
// linkedListSearch(singlyLinkedList([580,781]),781) --> 1
// linkedListSearch(singlyLinkedList([2,4,52,108]),52) --> 2
// linkedListSearch(singlyLinkedList([61,73,27,3001]),45) --> -1

class SinglyLinkedListNode<E>{
  public data: E;
  public next: SinglyLinkedListNode<E>;

  constructor(data: E) {
      this.data = data;
      this.next = null;
  }
}

function linkedListSearch(head:SinglyLinkedListNode<number>, data:number): number{
  // 関数を完成させてください
  let iterator = head
  let index = 0
  while(iterator != null) {
      if(iterator.data === data) return index
      iterator = iterator.next
      index++
  }
  return -1
}