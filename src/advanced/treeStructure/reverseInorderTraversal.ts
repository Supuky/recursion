// 逆間順（二分木）
// easy
// 整数で構成される二分木の根ノード root が与えられるので、逆間順を表す配列を返す、reverseInorderTraversal という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： integer[]

// reverseInorderTraversal( toBinaryTree([0,-10,5,null,-3,null,9]) )--> [9,5,0,-3,-10] 

// reverseInorderTraversal( toBinaryTree([5,3,6,2,4,null,7]) )--> [7,6,5,4,3,2] 

// reverseInorderTraversal( toBinaryTree([-2,-17,8,-18,-11,3,19,null,null,null,-4,null,null,null,25]) )--> [25,19,8,3,-2,-4,-11,-17,-18] 

// reverseInorderTraversal( toBinaryTree([3,-3,13,-7,1,6,18,-10,-4,0,2,5,8,15,19]) )--> [19,18,15,13,8,6,5,3,2,1,0,-3,-4,-7,-10] 

// reverseInorderTraversal( toBinaryTree([1,-5,15,-9,-4,10,17,null,-6,null,0,null,14,16,19]) )--> [19,17,16,15,14,10,1,0,-4,-5,-6,-9] 

// reverseInorderTraversal( toBinaryTree([3,-3,13,-7,1,6,18,-10,-4,0,2,5,8,15,19]) )--> [19,18,15,13,8,6,5,3,2,1,0,-3,-4,-7,-10] 

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

function reverseInorderTraversal(root:BinaryTree<number> | null): number[] | null{
    // 関数を完成させてください
    return reverseInorderTraversalHelper(root, []);
}

function reverseInorderTraversalHelper(root: BinaryTree<number> | null, output: number[]) {
    if(!root) return null;

    reverseInorderTraversalHelper(root.right, output);
    output.push(root.data);
    reverseInorderTraversalHelper(root.left, output);

    return output;
}
}