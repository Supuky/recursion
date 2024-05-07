// 完全二分木のノード
// easy
// 完全二分木（complete binary tree）が与えられるので、ノードの数を返す、countNodes という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： integer

// countNodes( toBinaryTree([6,11,25]) )--> 3 

// countNodes( toBinaryTree([1,1,2,15,8]) )--> 5 

// countNodes( toBinaryTree([6,11,25,5,9,8,4,56]) )--> 8 

// countNodes( toBinaryTree([27,14,35,10,19,31,42]) )--> 7 

// countNodes( toBinaryTree([30,15,60,7,22,45,75,17,27,12,14,5,79,110]) )--> 14 

{
  class BinaryTree<E>{
    data: E;
    left: BinaryTree<E>;
    right: BinaryTree<E>;

    constructor(data: E, left: BinaryTree<E> = null, right: BinaryTree<E> = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function countNodes(root:BinaryTree<number>): number{
    // 関数を完成させてください
    if (root === null) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
}
}

// 再帰を思い出す。