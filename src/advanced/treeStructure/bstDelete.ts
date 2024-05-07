// 二分探索木から削除
// hard
// 異なる整数値で構成される二分探索木（BST）の根ノード root と整数 key が与えられるので、BST から key を削除する bstDelete という関数を作成してください。もし key がすでに BST 内に存在しない場合は何も削除せず、根ノードをそのまま返してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root, integer key

// 出力のデータ型： binaryTree<integer>

// bstDelete( toBinaryTree([0,-10,5,null,-3,null,9]), 5 )--> [0,-10,9,null,-3] 

// bstDelete( toBinaryTree([0,-10,5,null,-3,null,9]), 20 )--> [0,-10,5,null,-3,null,9] 

// bstDelete( toBinaryTree([1,null,2]), 1 )--> [2] 

// bstDelete( toBinaryTree([5,3,6,2,4,null,7]), 3 )--> [5,4,6,2,null,null,7] 

// bstDelete( toBinaryTree([5,3,6,2,4,null,7]), 5 )--> [6,3,7,2,4] 

// bstDelete( toBinaryTree([5,3,6,2,4,null,7]), 15 )--> [5,3,6,2,4,null,7] 

// bstDelete( toBinaryTree([3,2]), 3 )--> [2] 

// bstDelete( toBinaryTree([1]), 0 )--> [1] 

// bstDelete( toBinaryTree([25,15,35,null,20,30,40]), 25 )--> [30,15,35,null,20,null,40] 

// bstDelete( toBinaryTree([0,-10,5,null,-3,null,9]), 9 )--> [0,-10,5,null,-3] 

// bstDelete( toBinaryTree([0,-10,5,null,-3,null,9]), 5 )--> [0,-10,9,null,-3] 

// bstDelete( toBinaryTree([5,2,18,-4,3,null,null]), -4 )--> [5,2,18,null,3] 

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

function minValueNode(node: BinaryTree<number>) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function bstDelete(root: BinaryTree<number>| null, key: number) {
    if (root === null) {
        return null; // 空の木は変更なし
    }

    if (key < root.data) {
        root.left = bstDelete(root.left, key);
    } else if (key > root.data) {
        root.right = bstDelete(root.right, key);
    } else {
        // 削除するノードの場合

        // 子が1つまたは0個の場合
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        // 子が2つの場合
        const minValue = minValueNode(root.right);
        root.data = minValue.data;

        root.right = bstDelete(root.right, minValue.data);
    }

    return root;
}
}