// 同じ値（二分木）
// easy
// 二分木 root が与えられるので、すべてのノードが同じ値を持つ場合に true、そうでない場合に false を返す、treeWithTheSameValue という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： bool

// treeWithTheSameValue( toBinaryTree([0]) )--> true 

// treeWithTheSameValue( toBinaryTree([0,1,2]) )--> false 

// treeWithTheSameValue( toBinaryTree([0,0,0,0,0,null,0]) )--> true 

// treeWithTheSameValue( toBinaryTree([1,1,1,7,1]) )--> false 

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

function treeWithTheSameValue(root: BinaryTree<number>): boolean {
    if (root === null) {
        return true; // 空の木は同じ値を持つと判定
    }

    const value = root.data; // ルートノードの値を取得

    // 左右の子ノードを再帰的に判定し、すべて同じ値を持つかどうかを確認
    return checkNodes(root.left, value) && checkNodes(root.right, value);
}

function checkNodes(node: BinaryTree<number>, value: number): boolean {
    if (node === null) {
      return true; // 空のノードは同じ値を持つと判定
    }

    if (node.data !== value) {
      return false; // 値が異なるノードが存在する場合は false を返す
    }

    // 左右の子ノードを再帰的に判定
    return checkNodes(node.left, value) && checkNodes(node.right, value);
}
}