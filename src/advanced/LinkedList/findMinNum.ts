// 最小値の検索
// easy
// 連結リストの先頭 head が与えられるので、リストの中の最小値のインデックスを返す、findMinNum という関数を作成してください。最小値が複数ある場合最後の最小値のインデックスを返してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head
// 出力のデータ型： integer
// findMinNum(singlyLinkedList([1,2,3,4,-1,2])) --> 4
// findMinNum(singlyLinkedList([1,1,1])) --> 2
// findMinNum(singlyLinkedList([3,3,2,10,34,45,67,356])) --> 2
// findMinNum(singlyLinkedList([20,-5,34,45,67,356,34,687,31,-34,5])) --> 9
// findMinNum(singlyLinkedList([71,8,16,33])) --> 1
// findMinNum(singlyLinkedList([101,54,82002,93,1207,131,1800,99])) --> 1
// findMinNum(singlyLinkedList([580,781])) --> 0
// findMinNum(singlyLinkedList([2,4,52,108])) --> 0
// findMinNum(singlyLinkedList([61,73,27,3001])) --> 2

class SinglyLinkedListNode<E>{
  public data: E;
  public next: SinglyLinkedListNode<E>;

  constructor(data: E) {
      this.data = data;
      this.next = null;
  }
}

function findMinNum(head:SinglyLinkedListNode<number>): number{
  // 関数を完成させてください
  let iterator = head
  let min = Infinity
  let count = 0
  let index: number

  while(iterator != null) {
      if(iterator.data <= min) {
          min = iterator.data
          index = count
      }
      iterator = iterator.next
      count++
  }

  return index
}