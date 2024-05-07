// 二分木の値
// very easy
// 二分木 root が与えられるので、根ノード、子（左）、子（右）の合計値を返す、sumOfThreeNodes という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： integer

// sumOfThreeNodes( toBinaryTree([0,-10,5,null,-3,null,9]) )--> -5 

// sumOfThreeNodes( toBinaryTree([5,2,18,-4,3]) )--> 25 

// sumOfThreeNodes( toBinaryTree([27,14,35,10,19,31,42]) )--> 76 

// sumOfThreeNodes( toBinaryTree([10,null,3]) )--> 13 

// sumOfThreeNodes( toBinaryTree([10,9]) )--> 19 

// sumOfThreeNodes( toBinaryTree([null]) )--> 0 

{
  class BinaryTree<E>{
    data: E;
    left: BinaryTree<E> | null;
  right: BinaryTree<E> | null;

  constructor(data: E, left: BinaryTree<E> = null, right: BinaryTree<E> = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function sumOfThreeNodes(root:BinaryTree<number>): number{
  // 関数を完成させてください
  if (root === null) return 0;
  
  const rootValue: number = root !== null ? root.data : 0;
  const leftValue: number = root.left !== null ? root.left.data : 0;
  const rightValue: number = root.right !== null ? root.right.data : 0;
  
  return rootValue + leftValue + rightValue;
}
}