// 同じ木
// medium
// 二分木 root1、root2 が与えられるので、それらが同じかどうか調べる、isSameTree という関数を作成してください。2 つの二分木が構造的に等しく、かつ各ノードの値が同じであれば、2 つは同じとみなされます。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root1, binaryTree<integer> root2

// 出力のデータ型： bool

// isSameTree( toBinaryTree([]), toBinaryTree([0]) )--> false 

// isSameTree( toBinaryTree([5,3]), toBinaryTree([5,null,3]) )--> false 

// isSameTree( toBinaryTree([5,3,1]), toBinaryTree([5,3,1]) )--> true 

// isSameTree( toBinaryTree([5,2,18,4,3]), toBinaryTree([5,2,18,4,3]) )--> true 

// isSameTree( toBinaryTree([5,4,3,null,null,8]), toBinaryTree([5,4,3,null,null,8]) )--> true 

// isSameTree( toBinaryTree([5,8,1,10,12,8,null,null,null,null,null,9,10]), toBinaryTree([5,8,1,9,12,8,null,null,null,null,null,9,10]) )--> false 

// isSameTree( toBinaryTree([50,17,76,9,23,54,null,null,14,19,null,null,72]), toBinaryTree([50,17,76,9,23,54,null,null,14,19,null,null,72]) )--> true 

// isSameTree( toBinaryTree([16,14,10,8,7,9,3,2,4,1]), toBinaryTree([16,14,10,8,7,9,3,2,4,1]) )--> true 

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

function isSameTree(root1:BinaryTree<number> | null, root2:BinaryTree<number> | null): boolean{
    // 関数を完成させてください
        // 両方ともnullの時はtrue
    if (root1 == null && root2 == null) return true;
    // 両方ともnullでなかったら再帰
    if (root1 != null && root2 != null) {
        return root1.data == root2.data && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
    }
    // 片方がnullの時false
    return false;
}
}