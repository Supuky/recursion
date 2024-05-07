// 連結リストの交わる点 (https://www.youtube.com/watch?v=O_Eg3pGQzro)
// medium
// 連結リストの先頭 headA と headB がそれぞれ与えられるので、お互いの連結リストが交わるノードの値を返す、findMergeNode という関数を作成してください。headA と headB は異なるものとし、null ではありません。また全ての整数は正とし、A と B の交わりが存在しない場合は -1 を返してください。

// 関数の入出力例

// 入力のデータ型： SinglyLinkedListNode<integer> headA, SinglyLinkedListNode<integer> headB

// 出力のデータ型： integer

// findMergeNode(singlyLinkedList([2,10,34,45,67,356]),singlyLinkedList([20,5,34,45,67,356])) --> 34

// findMergeNode(singlyLinkedList([34,657,24,36,75,867,345,75,345,64,75]),singlyLinkedList([13,4,6,3,345,64,75])) --> 345

// findMergeNode(singlyLinkedList([34,657,24,36,75,867,345,75,345,64,75]),singlyLinkedList([13,4,6,3,345,64,75,34])) --> -1

class SinglyLinkedListNode<E>{
  public data: E;
  public next: SinglyLinkedListNode<E>;

  constructor(data: E) {
      this.data = data;
      this.next = null;
  }
}

function getLinkedListLength(head: SinglyLinkedListNode<number>): number {
  let iterator = head
  let length = 0
  while(iterator != null) {
      length++
      iterator = iterator.next
  }

  return length
}

function getNodeAt(head: SinglyLinkedListNode<number>, position: number): SinglyLinkedListNode<number> {
  let iterator = head
  for(let i = 0; i < position; i++) {
      if(iterator === null) return null
      iterator = iterator.next
  }
  return iterator
}

function findMergeNode(headA:SinglyLinkedListNode<number>, headB:SinglyLinkedListNode<number>): number{
  // 関数を完成させてください
  let lA = getLinkedListLength(headA)
  let lB = getLinkedListLength(headB)

  let headACopy = (lA >= lB) ? getNodeAt(headA, lA - lB) : headA

  let headBCopy = (lA <= lB) ? getNodeAt(headB, lB - lA) : headB

  let answer = null

  let iteratorA = headACopy
  let iteratorB = headBCopy

  while(iteratorA !== null) {
      if(iteratorA.data !== iteratorB.data) answer = null
      else if(answer === null) answer = iteratorA.data

      iteratorA = iteratorA.next
      iteratorB = iteratorB.next
  }

  return answer === null ? -1 : answer
}