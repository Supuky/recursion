// 真ん中のノード
// 片方向リストの先頭 head が与えられるので、真ん中のノードを返す、middleNode という関数を作成してください。真ん中のノードが 2 つ存在する場合は 2 つ目のノードを返してください。
// 例えば、入力が [1,2,3,4,5,6,7,8] の場合、真ん中のノードは 4 と 5 の 2 つになります。この場合、2 つ目を優先させるので、答えは [5,6,7,8] になります。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head
// 出力のデータ型： SinglyLinkedListNode<integer>
// middleNode(singlyLinkedList([1,2])) --> 2➡END
// middleNode(singlyLinkedList([1,2,3,4,5,6,7])) --> 4➡5➡6➡7➡END
// middleNode(singlyLinkedList([1,2,3,4,5,6,7,8])) --> 5➡6➡7➡8➡END
// middleNode(singlyLinkedList([14,35,8,4,97,33,53,68,23,1,84])) --> 33➡53➡68➡23➡1➡84➡END

// 真ん中のノードの解説と解答
// slow と fast の 2 つの変数を用意し、どちらの変数にも head を入れます。slow は通常の速度でリストを走査し、fast は 2 倍の速度で走査します。つまり slow が次のノードへ進むとき、fast は次の次のノードへ進みます。fast が最後尾までたどり着いた時、slow はちょうど真ん中に来ているので slow を返します。

// class SinglyLinkedListNode{
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

function middleNode(head: SinglyLinkedListNode<number>){
  let slow: SinglyLinkedListNode<number> | null = head; // 通常の速度で進む
  let fast: SinglyLinkedListNode<number> | null = head; // 2倍の速度で進む

  while (fast != null && fast.next != null ) {
    fast = fast.next.next; // 次の次のノードへ
    slow = slow.next; // 次のノードへ
  }

  return slow;
}



