// 右側のノード
// medium
// 二分木 root が与えられるので、各階層の一番右側にあるノードを返す、rightLevelNode という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： integer[]

// rightLevelNode( toBinaryTree([1,2]) )--> [1,2] 

// rightLevelNode( toBinaryTree([1,2,3,null,4,5,6]) )--> [1,3,6] 

// rightLevelNode( toBinaryTree([0,1,2,null,4,null,5]) )--> [0,2,5] 

// rightLevelNode( toBinaryTree([0,3,null,null,8]) )--> [0,3,8] 

// rightLevelNode( toBinaryTree([3,7,5,6,null,9,null]) )--> [3,5,9] 

// rightLevelNode( toBinaryTree([1,2,3,4,5,6,7,8,null,9,10,11,null,null,12,null,13]) )--> [1,3,7,12,13] 

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

function rightLevelNode(root: BinaryTree<number>): number[] {
  let queue: BinaryTree<number>[] = [root];
  let arr: number[] = [];

  while (queue.length > 0) {
      let levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
          let node = queue.shift();

          if (i === levelSize - 1) {
              arr.push(node.data); // 最右のノードのデータを追加
          }

          if (node.left !== null) {
              queue.push(node.left);
          }

          if (node.right !== null) {
              queue.push(node.right);
          }
      }
  }

  return arr;
}

}