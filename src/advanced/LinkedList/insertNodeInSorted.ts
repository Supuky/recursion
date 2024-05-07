// 特定位置に挿入
// ソート済みの連結リストの先頭 head と、データ data が与えられるので、ノードを正しい位置に挿入した連結リストを返す、insertNodeInSorted という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： SinglyLinkedListNode<integer> head, integer data

// 出力のデータ型： SinglyLinkedListNode<integer>

// insertNodeInSorted(singlyLinkedList([2,10,34,45,67,356]),3) --> 2➡3➡10➡34➡45➡67➡356➡END

// insertNodeInSorted(singlyLinkedList([2,10,34,45,67,356]),358) --> 2➡10➡34➡45➡67➡356➡358➡END

// insertNodeInSorted(singlyLinkedList([2,10,34,45,67,356]),-5) --> -5➡2➡10➡34➡45➡67➡356➡END

// insertNodeInSorted(singlyLinkedList([4,23,53,56,134,645]),34) --> 4➡23➡34➡53➡56➡134➡645➡END

class SinglyLinkedListNode<E>{
  public data: E;
  public next: SinglyLinkedListNode<E>;

  constructor(data: E) {
      this.data = data;
      this.next = null;
  }
}

function insertNodeInSorted(head:SinglyLinkedListNode<number>, data:number): SinglyLinkedListNode<number>{
  // 関数を完成させてください
  // 空のリストの場合、新しいノードを先頭に設定して返す
  if (head === null) {
      return new SinglyLinkedListNode(data);
  }

  let iterator = head;

  // 先頭に挿入する場合
  if (data < iterator.data) {
      let newNode = new SinglyLinkedListNode(data);
      newNode.next = iterator;
      return newNode;
  }

  // リストの最後のノードまで繰り返す
  while (iterator.next !== null) {
      if (data >= iterator.data && data < iterator.next.data) {
          let newNode = new SinglyLinkedListNode(data);
          newNode.next = iterator.next;
          iterator.next = newNode;
          return head;
      }
      iterator = iterator.next;
  }

  // リストの最後のノードの後ろに新しいノードを挿入
  iterator.next = new SinglyLinkedListNode(data);

  return head;
}