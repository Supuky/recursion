// 二分木の反転
// easy
// 二分木 root が与えられるので、それを反転する、invertTree という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： binaryTree<integer>

// invertTree( toBinaryTree([1,3,8,2,5,7,10]) )--> [1,8,3,10,7,5,2] 

// invertTree( toBinaryTree([]) )--> [] 

// invertTree( toBinaryTree([5,4,3,null,null,8]) )--> [5,3,4,null,8] 

// invertTree( toBinaryTree([16,14,10,8,7,9,3,2,4,1]) )--> [16,10,14,3,9,7,8,null,null,null,null,null,1,4,2] 

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

  function invertTree(root: BinaryTree<number> | null | undefined){
    // キューを使います。
    let queue = [];
    // 根ノードをiteratorに入れます。
    let iterator = root;
    // iteratorがnullになるまで繰り返します。
    while (iterator != null) {
        // iteratorの左右の部分木をキューに入れます。
        queue.push(iterator.left);
        queue.push(iterator.right);

        // スワップ
        let temp = iterator.left;
        iterator.left = iterator.right;
        iterator.right = temp;

        // キューの先頭は削除して、新しいiteratorにします。
        iterator = queue.shift();
    }

    return root;

}
}

// 二分木の反転の解説と解答
// キューを使って幅優先探索をします。まずは根ノードを iterator に入れ、その左右の部分木をキューに入れます。スワップで左右を入れ替え、キューの先頭を次の iterator にし、先頭は削除します。これを iterator が null になるまで繰り返します。