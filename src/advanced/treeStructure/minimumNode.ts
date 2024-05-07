// 二分探索木内の最小値
// easy
// 異なる整数値で構成される二分探索木（BST）の根ノード root が与えられるので、BST 内に存在する最小値を持つノードを返す、minimumNode という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： binaryTree<integer>

// minimumNode( toBinaryTree([null]) )--> [] 

// minimumNode( toBinaryTree([0,-10,5,null,-3,null,9]) )--> [-10,null,-3] 

// minimumNode( toBinaryTree([5,3,6,2,4,null,7]) )--> [2] 

// minimumNode( toBinaryTree([-2,-17,8,-18,-11,3,19,null,null,null,-4,null,null,null,25]) )--> [-18] 

// minimumNode( toBinaryTree([3,-3,13,-7,1,6,18,-10,-4,0,2,5,8,15,19]) )--> [-10] 

// minimumNode( toBinaryTree([1,-5,15,-9,-4,10,17,null,-6,null,0,null,14,16,19]) )--> [-9,null,-6] 

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

function minimumNode(root:BinaryTree<number> | null): BinaryTree<number> | null{
    // 関数を完成させてください
    if(root === null) return null;

    let iterator = root;

    while(iterator) {
        if(!iterator.left) return iterator;
        iterator = iterator.left; 
    }

    return iterator;
}


}



// 二分探索木内の最小値の解説と解答
// 左側の部分木は常に根ノードよりも小さいので、左が null になるまで左へ左へと走査します。左が null のノードが最小値です。根ルートを iterator として、iterator.left が null になるまで、iterator を左に進めていきます。null になったら iterator を返します。

// class BinaryTree{
//   constructor(data, left = null, right = null){
//       this.data = data;
//       this.left = left;
//       this.right = right;
//   }
// }

// function minimumNode(root){
//   // iterator に root を入れます。
//   let iterator = root;
//   // iterator と iterator.left が null になるまで左へ進めます。
//   while (iterator != null && iterator.left != null) {
//       iterator = iterator.left;
//   }
//   // 左の子が null になるノードが最小値です。
//   return iterator;
// }