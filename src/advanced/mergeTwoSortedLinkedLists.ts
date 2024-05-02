// ソート済連結リストの合併
// ソート済みの連結リストの先頭 head1 と head2 が与えられるので、それを合体させ、新しい連結リストを返す、mergeTwoSortedLinkedLists という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： SinglyLinkedListNode<integer> head1, SinglyLinkedListNode<integer> head2
// 出力のデータ型： SinglyLinkedListNode<integer>
// mergeTwoSortedLinkedLists(singlyLinkedList([1,2,3]),singlyLinkedList([1,4,5])) --> 1➡1➡2➡3➡4➡5➡END
// mergeTwoSortedLinkedLists(singlyLinkedList([1,2,3,10,30,45]),singlyLinkedList([1,4,30,50,80])) --> 1➡1➡2➡3➡4➡10➡30➡30➡45➡50➡80➡END
// mergeTwoSortedLinkedLists(singlyLinkedList([2,3,5]),singlyLinkedList([5,8,12])) --> 2➡3➡5➡5➡8➡12➡END
// mergeTwoSortedLinkedLists(singlyLinkedList([1,1,2,3,3,5]),singlyLinkedList([2,2,3,3,5,5,10,10])) --> 1➡1➡2➡2➡2➡3➡3➡3➡3➡5➡5➡5➡10➡10➡END

// ソート済連結リストの合併の解説と解答
// head1 を iterator1、head2 を iterator2、合併後の新しいリストは iterator で走査します。iterator には最初に null を入れて新しいノードを作って入れておきます。(Javaは int 型に null が入らないので Integer.MIN_VALUE)

// break で抜けるまで while 文で以下の処理を繰り返します。
// ・iterator1 と iterator2 の先頭を比較して小さいノードを iterator.next に入れ、入れた方のリストを 1 つ進めます。
// ・iterator を 1 つ進めます。
// ・どちらかのリストが null になったら、もう一方のリストの残りを iterator に追加して break します。
// 新しいリストの先頭は null になっているので、2 番目のノードを返します。

// class SinglyLinkedListNode{
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

function mergeTwoSortedLinkedLists(head1: SinglyLinkedListNode<number>,head2: SinglyLinkedListNode<number>){
  let iterator1: SinglyLinkedListNode<number> | null = head1;
  let iterator2: SinglyLinkedListNode<number> | null = head2;

  let sortedNode = new SinglyLinkedListNode(null);
  let iterator: SinglyLinkedListNode<number> | null = sortedNode; // 合併後のリストを入れるiterator


  while (true) { // どちらかがnullになってbreakするまで繰り返します。

      // iterator1が空になったとき、iteratorの末尾にiterator2をつける。
      if (iterator1 == null) {
          iterator.next = iterator2;
          break;
      }

      // iterator2が空になったとき、iteratorの末尾にiterator1をつける。
      if (iterator2 == null) {
          iterator.next = iterator1;
          break;
      }

      // 先頭を比較して小さい方をiteratorのnextに入れます。
      // iterator1の方が小さかった時
      if (iterator1.data <= iterator2.data) {
          iterator.next = iterator1;
          // iterator1を1つ進めます。
          iterator1 = iterator1.next;            
      } else { // iterator2が小さかった時
          iterator.next = iterator2;
          // iterator2を1つ進めます。
          iterator2 = iterator2.next;
      }
      // iteratorを進めます。
      iterator = iterator.next;
  }
  // sortedNodeはnullが入っているので2番目から返します。
  return sortedNode.next;

}