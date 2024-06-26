// 二分探索木への挿入
// easy
// 異なる整数値で構成される二分探索木（BST）の根ノード root と整数 key が与えられるので、key を BST に挿入する bstInsert という関数を作成してください。もし key がすでに BST 内に存在する場合は何もせず、根ノードをそのまま返してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root, integer key

// 出力のデータ型： binaryTree<integer>

// bstInsert( toBinaryTree([0,-10,5,null,-3,null,9]), 20 )--> [0,-10,5,null,-3,null,9,null,null,null,20] 

// bstInsert( toBinaryTree([0,-10,5,null,-3,null,9]), 2 )--> [0,-10,5,null,-3,2,9] 

// bstInsert( toBinaryTree([5,2,18,-4,3,null,null]), 3 )--> [5,2,18,-4,3] 

// bstInsert( toBinaryTree([5,2,18,-4,3,null,null]), 10 )--> [5,2,18,-4,3,10] 

// bstInsert( toBinaryTree([27,14,35,10,19,31,42]), 15 )--> [27,14,35,10,19,31,42,null,null,15] 

// bstInsert( toBinaryTree([27,14,35,10,19,31,42]), 23 )--> [27,14,35,10,19,31,42,null,null,null,23] 

// bstInsert( toBinaryTree([30,15,60,7,22,45,75,null,null,17,27]), 8 )--> [30,15,60,7,22,45,75,null,8,17,27] 

// bstInsert( toBinaryTree([90,50,150,20,75,95,175,5,25,66,80,92,111,166,200]), 79 )--> [90,50,150,20,75,95,175,5,25,66,80,92,111,166,200,null,null,null,null,null,null,79] 

// bstInsert( toBinaryTree([50,17,76,9,23,54,null,null,14,19,null,null,72]), 57 )--> [50,17,76,9,23,54,null,null,14,19,null,null,72,null,null,null,null,57] 

// bstInsert( toBinaryTree([16,14,10,8,7,9,3,2,4,1]), 35 )--> [16,14,10,8,7,9,3,2,4,1,null,null,null,null,35] 

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

function bstInsert(root:BinaryTree<number> | null, key:number): BinaryTree<number> | null{
    // 関数を完成させてください
        // nullまでたどり着いた時、key を入れた新しいノードを作ります。
        if (root == null) return new BinaryTree(key);

        // keyがBSTに存在した時は、root を返します。
        if (root.data == key) return root;
    
        // key と ノードの値を比較し、keyが小さければ左へ、大きければ右へめぐります。
        if (key > root.data) root.right = bstInsert(root.right, key);
        else root.left = bstInsert(root.left, key);
        return root;
}
}

// 二分探索木への挿入の解説と解答
// 挿入する key を root と比較して root よりも小さい場合は左に再帰し、そうでない場合は右に再帰します。 葉ノードまで到達したら、key を入れた新しいノードを作って挿入します。それではコードを見てみましょう。