// 先頭と末尾に挿入
// 連結リストの先頭 head と整数 data が与えられるので、リストの先頭と末尾にデータを挿入した新しい連結リストを返す、insertHeadTail という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head, integer data
// 出力のデータ型： SinglyLinkedListNode<integer>
// insertHeadTail(singlyLinkedList([3,3,2,10,34,45,67,356]),367) --> 367➡3➡3➡2➡10➡34➡45➡67➡356➡367➡END
// insertHeadTail(singlyLinkedList([3,3,2,10,34,45,67,356]),4) --> 4➡3➡3➡2➡10➡34➡45➡67➡356➡4➡END
// insertHeadTail(singlyLinkedList([3,32,2,10,34,45,67,356]),46) --> 46➡3➡32➡2➡10➡34➡45➡67➡356➡46➡END
// insertHeadTail(singlyLinkedList([20,-5,34,45,67,356,34,687,31,-34,5]),75) --> 75➡20➡-5➡34➡45➡67➡356➡34➡687➡31➡-34➡5➡75➡END
// insertHeadTail(singlyLinkedList([20,-5,34,45,67,356,34,687,31,-34,5]),96) --> 96➡20➡-5➡34➡45➡67➡356➡34➡687➡31➡-34➡5➡96➡END

// class SinglyLinkedListNode{
//   constructor(data: number) {
//       this.data = data;
//       this.next = null;
//   }
// }

function insertHeadTail(head: SinglyLinkedListNode<number>,data: number){
  // データを入れたノードを用意します。
  let nodeHead = new SinglyLinkedListNode(data);
  let nodeTail = new SinglyLinkedListNode(data);

  nodeHead.next = head;
  // 新しいノードの next に head を入れます。
  let iterator = nodeHead;
  // リストを最後尾まで走査します。
  while (iterator.next != null) {
      iterator = iterator.next;
  }
  // 最後尾の next に新しいノードを入れます。
  iterator.next = nodeTail;

  return nodeHead;
}