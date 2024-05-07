// 二分探索木内のキー
// easy
// 異なる整数値で構成される二分探索木（BST）の根ノード root と整数 key が与えられるので、key が BST の中に存在するかどうか判定する exist という関数を作成してください。key が BST の中に存在していれば true を、そうでなければ false を返してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root, integer key

// 出力のデータ型： bool

// exists( toBinaryTree([0,-10,5,null,-3,null,9]), 5 )--> true 

// exists( toBinaryTree([0,-10,5,null,-3,null,18]), 20 )--> false 

// exists( toBinaryTree([5,3,6,2,4,null,7]), 3 )--> true 

// exists( toBinaryTree([5,3,6,2,4,null,7]), 5 )--> true 

// exists( toBinaryTree([5,3,6,2,4,null,7]), 15 )--> false 

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

  function exists(root:BinaryTree<number> | null, key:number): boolean{
      // 関数を完成させてください
      let iterator = root;

      while(iterator) {
          if(iterator.data === key) return true;
          else if(iterator.data < key) iterator = iterator.right;
          else iterator = iterator.left;
      }
  
      return false;
  }
}