// BST合体
// medium
// 二分探索木 root1、root2 が与えられるので、2 つを合併する、mergeBST という関数を作成してください。合併のルールは以下の通りです。

// 2 つのノードが重なっている場合は、各ノードの値を合計し、新しい値としてください
// そうでない場合は、既存のノードがそのまま新しい木のノードとして使用されます

// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root1, binaryTree<integer> root2

// 出力のデータ型： binaryTree<integer>

// mergeBST( toBinaryTree([]), toBinaryTree([]) )--> [] 

// mergeBST( toBinaryTree([0]), toBinaryTree([]) )--> [0] 

// mergeBST( toBinaryTree([44,12,82,2,21,70,88,null,9,18,42,66,80,83,97]), toBinaryTree([48,24,74,7,39,51,83,null,10,27,44,null,71,77,86]) )--> [92,36,156,9,60,121,171,null,19,45,86,66,151,160,183] 

// mergeBST( toBinaryTree([42,10,87,2,29,53,92,null,8,14,36,43,76,90,96]), toBinaryTree([57,31,76,26,45,68,94,8,27,39,46,64,74,78,96,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,99]) )--> [99,41,163,28,74,121,186,8,35,53,82,107,150,168,192,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,99] 

// mergeBST( toBinaryTree([45,10,69,3,12,63,75,null,null,null,30,null,null,null,85]), toBinaryTree([53,10,70,6,31,60,88,3,8,15,33,54,66,79,93,null,4,null,9,null,22,null,46,null,58,null,69,null,80,91,98]) )--> [98,20,139,9,43,123,163,3,8,15,63,54,66,79,178,null,4,null,9,null,22,null,46,null,58,null,69,null,80,91,98] 

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

function mergeBST(root1:BinaryTree<number> | null, root2:BinaryTree<number> | null): BinaryTree<number> | null{
    // 関数を完成させてください
    // ベースケース
    // どちらかのノードがnullだった場合、もう一方の木のノードを返します。
    // 両方ともnullの時には、root2のnullを返します。
    if (root1 == null) return root2;
    if (root2 == null) return root1;

    // 両方のノードが存在したらroot1にroot2の値を足します。
    root1.data += root2.data;
    // 左の子、右の子をそれぞれ再帰して取得します。
    root1.left = mergeBST(root1.left, root2.left);
    root1.right = mergeBST(root1.right, root2.right);
    return root1;
}


}