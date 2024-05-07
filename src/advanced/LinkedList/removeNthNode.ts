// 片方向リストのノードの削除
// 片方向リストの先頭 head が与えられるので、末尾から n 番目のノードを削除、連結し、新しい連結リストの根ノードを返す、removeNthNode という関数を作成してください。n が 0、もしくは片方向リストのサイズより大きい場合は、head をそのまま返してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head, integer n
// 出力のデータ型： SinglyLinkedListNode<integer>
// removeNthNode(singlyLinkedList([5]),15) --> 5➡END
// removeNthNode(singlyLinkedList([5]),0) --> 5➡END
// removeNthNode(singlyLinkedList([5]),1) --> END
// removeNthNode(singlyLinkedList([3,5]),1) --> 3➡END
// removeNthNode(singlyLinkedList([3,5]),2) --> 5➡END
// removeNthNode(singlyLinkedList([0,1,2,3,4]),2) --> 0➡1➡2➡4➡END
// removeNthNode(singlyLinkedList([3,5,2,7,56,23,86,93,43,23,55,5,78,0,13,1]),11) --> 3➡5➡2➡7➡56➡86➡93➡43➡23➡55➡5➡78➡0➡13➡1➡END

// 片方向リストのノードの削除の解説と解答
// 0 を入れたダミーノードを作成し、リストの先頭に挿入しておきます。ダミーを入れることで条件分岐を少なくすることができます。head からリストを走査して要素の数を数え、要素の数よりも n が大きい場合は、そのまま head を返します。

// 次に先頭に入れたダミーノードから走査して、末尾から n 番目、つまり「要素数 - n」の 1 つ前の位置までリストを走査します。現在の iterator.next は、末尾から n 番目のノードを指しているので、これをその次のノードへと付け替えます。ダミーノードを避けて次のノードから返すと答えを得ることができます。

// class SinglyLinkedListNode{
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

function removeNthNode(head: SinglyLinkedListNode<number>,n: number){
  if(n == 0) return head;

  // 場合分けを避けるために、ダミーノードを作成して先頭に入れておきます。
  let dummyNode = new SinglyLinkedListNode(0);
  dummyNode.next = head;

  // リストを走査して要素の数を数えます。
  let iterator = head;
  let count = 1;
  while (iterator.next != null) {
      iterator = iterator.next;
      count++;
  }
  // 要素の数よりnが大きい時はそのままheadを返します。
  if (count < n) return head;

  // ダミーノードから始めます。
  iterator = dummyNode;
  let i = 0;
  // 末尾からn番目にiteratorを進めます。
  while (i < count - n) {
      iterator = iterator.next;
      i++;
  }
  // 現在n番目を指しているnextをその次のノードに付け替えます。
  iterator.next = iterator.next.next;
  // ダミーノードの次のノードを返します。
  return dummyNode.next;
}