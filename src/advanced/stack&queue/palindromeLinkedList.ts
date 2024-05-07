// 回文連結リスト
// medium
// 連結リストの先頭 head が与えられるので、それが回文になっているか判定する、palindromeLinkedList という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： SinglyLinkedListNode<integer> head

// 出力のデータ型： bool

// palindromeLinkedList(singlyLinkedList([1,2,3])) --> false

// palindromeLinkedList(singlyLinkedList([1,2])) --> false

// palindromeLinkedList(singlyLinkedList([1,0,1])) --> true

// palindromeLinkedList(singlyLinkedList([3,4,4,3,6])) --> false

// palindromeLinkedList(singlyLinkedList([3,6,4,4,3,6])) --> false

// palindromeLinkedList(singlyLinkedList([3,6,4,4,6,3])) --> true

// palindromeLinkedList(singlyLinkedList([1,2,3,2,1])) --> true

// 回文連結リストの解説と解答
// 配列に各要素を格納して、isPalindrome という関数を使って、回文かどうかチェックすることで解くことができます。ここではスタックを使うことによって、もう少しスマート解き方をしてみましょう。slow と fastという 2 つの変数を用意し、同時に走らせます。fast は文字通り slow の 2 倍のスピードで進みます。

// 2 倍のスピードで同時に走らせることによって、fast が末尾に着いた際、slow が連結リストのちょうど真ん中にきます。したがって、前半部分を stack を使って要素を格納することができれば、後半は pop と走査を組み合わせることでプログラムを書くことができます。

{
  class SinglyLinkedList{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function palindromeLinkedList(head){
    // 要素が1つのときは回文なのでtrueを返します。
    if (head.next == null) return true;

    let slow = head;
    let fast = head;
    let stack = [];

    // まずはfastをslowの2倍のスピードで末尾まで走らせます。
    while (fast != null && fast.next != null) {
        // slowのデータをスタックに格納していきます。
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }

    // 連結リストの長さが奇数の場合はslowを1つ先へ進めます。
    // 例えば 1234321 のようなパターンを考えます。
    // fastが末尾の1にたどり着いたとき、slowは4にいるので1つ進めて3へ。
    if (fast != null) slow = slow.next;

    // 残りをslowで走査し、stackのデータと一致するか調べます。
    // slowは 3 にいて、stack の頂上は 3 なので一致します。
    while (slow != null) {
        if (slow.data != stack.pop()) return false;
        slow = slow.next;
    }

    return true;
}

// console.log(palindromeLinkedList(singlyLinkedList([1,2,3]))); //  false
// console.log(palindromeLinkedList(singlyLinkedList([1,2]))); //  false
// console.log(palindromeLinkedList(singlyLinkedList([1,0,1]))); //  true
// console.log(palindromeLinkedList(singlyLinkedList([3,4,4,3,6]))); //  false
// console.log(palindromeLinkedList(singlyLinkedList([3,6,4,4,3,6]))); //  false
// console.log(palindromeLinkedList(singlyLinkedList([3,6,4,4,6,3]))); //  true
// console.log(palindromeLinkedList(singlyLinkedList([1,2,3,2,1]))); //  true
}