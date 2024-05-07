// 対称的な二分木
// medium
// 二分木 root が与えられるので、それが左右対称かどうかを確かめる、symmetricTree という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： bool

// symmetricTree( toBinaryTree([10,25,25,33,45,45,33]) )--> true 

// symmetricTree( toBinaryTree([10,25,25,33,45,45,32]) )--> false 

// symmetricTree( toBinaryTree([1,2,2,3,4,4,3]) )--> true 

// symmetricTree( toBinaryTree([3,6,6,9,12,11,9]) )--> false 

// symmetricTree( toBinaryTree([]) )--> true 

// symmetricTree( toBinaryTree([1,9,9,15,19,19,15]) )--> true 

// symmetricTree( toBinaryTree([1,2,2,null,3,null,3]) )--> false 

// symmetricTree( toBinaryTree([3,6,6,9,12,12,9]) )--> true 

// symmetricTree( toBinaryTree([3,6,7,9,12,12,9]) )--> false 

// symmetricTree( toBinaryTree([1,2,2,2,null,2]) )--> false 

// symmetricTree( toBinaryTree([1,2,3]) )--> false 

{
  class BinaryTree<E>{
    data: E;
    left: BinaryTree<E> | null;
    right: BinaryTree<E> | null;

    constructor(data: E, left: BinaryTree<E> | null = null, right: BinaryTree<E> | null = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

  function symmetricTree(root:BinaryTree<number> | null): boolean{
      // 関数を完成させてください
   // 根ノードがnull の時には true を返します。
    if (root == null) return true;
    // ヘルパー関数を使い左右の子を根ノードとする部分木が同じかどうかチェックします。
    return symmetricTreeHelper(root.left, root.right);
}

function symmetricTreeHelper(leftNode:BinaryTree<number> | null, rightNode:BinaryTree<number> | null): boolean {
    // ベースケース
    if (leftNode == null && rightNode == null) return true;
    if (leftNode == null || rightNode == null) return false;
    // 二つの部分木の根ノードの値が違ったらfalse
    if (leftNode.data != rightNode.data) return false;
    // 「左の木の左」と「右の木の右」、「左の木の右」と「右の木の左」が対称であるか再帰的に調べます。
    return symmetricTreeHelper(leftNode.left, rightNode.right) && symmetricTreeHelper(leftNode.right, rightNode.left);
}
}

// 対称的な二分木の解説と解答
// root の左右の子を引数に取るヘルパー関数を用意します。このヘルパー関数は、部分木が対称である場合は true を返し、対称でない場合は false を返す再帰関数です。2 つの部分木が対称であるためには、次の 3 つの条件が true でなければなりません。

// 1 - 両者の根ノードの値が同じであること
// 2 - 左の木の左の子と、右の木の右の子が対称であること。
// 3 - 左の木の右の子と、右の木の左の子が対称であること。
// ベースケースとして、左右のノードがどちらも null になったら true 、どちらか一方だけが null なら false を返すようにします。再帰的に、左の木の左の子、右の木の右の子と、左の木の右の子、右の木の左の子が対称であるかを調べます。両者がどちらも true だった場合に true を返します。それではコードを見てみましょう。