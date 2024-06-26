// 二分探索木内の先行ノード
// medium
// 異なる整数値で構成される二分探索木（BST）の根ノード root と BST 内に存在する整数 key が与えられるので、根ノードが先行ノードである部分木を返す、predecessor という関数を作成してください。もし、そのようなノードが存在しない場合は null を返してください。ノード N の値を x とした時、先行ノードとは木の中に存在する x よりも小さい最大の値を持つノードのことを指します。後続ノードと先行ノードの操作は対称的です。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root, integer key

// 出力のデータ型： binaryTree<integer>

// predecessor( toBinaryTree([0,-10,5,null,-3,null,9]), 5 )--> [0,-10,5,null,-3,null,9] 

// predecessor( toBinaryTree([5,3,6,2,4,null,7]), 5 )--> [4] 

// predecessor( toBinaryTree([10,6,12,4,8,null,null,2]), 12 )--> [10,6,12,4,8,null,null,2] 

// predecessor( toBinaryTree([10,6,12,4,8,null,null,2]), 2 )--> [] 

// predecessor( toBinaryTree([5,null,7]), 5 )--> [] 

// predecessor( toBinaryTree([-2,-17,8,-18,-11,3,19,null,null,null,-4,null,null,null,25]), 8 )--> [3] 

// predecessor( toBinaryTree([3,-3,13,-7,1,6,18,-10,-4,0,2,5,8,15,19]), 6 )--> [5] 

// predecessor( toBinaryTree([1,-5,15,-9,-4,10,17,null,-6,null,0,null,14,16,19]), 10 )--> [1,-5,15,-9,-4,10,17,null,-6,null,0,null,14,16,19] 

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

function predecessor(root:BinaryTree<number> | null, key:number): BinaryTree<number> | null{
    // 関数を完成させてください
  // keyのノードを探し、変数targetNodeに代入します。
  let targetNode = findNode(root, key);
  // keyがBST内に存在しない場合、nullを返します。
  if (targetNode == null) return null;
  // targetNodeに左側の子がある場合は、その部分木の最大値を返します。
  if (targetNode.left != null) return maximumNode(targetNode.left);

  let predecessor = null;
  let iterator = root;
  // rootをiteratorに代入し、探索と同じ要領でtargetNodeがiteratorよりも小さい時には左へ、大きい時は右へ進みます。
  while (iterator != null) {
      // ターゲットとiteratorのdataが同じだったら、その時のpredecessorを返します。
      if (iterator.data == targetNode.data) return predecessor;
      // 右側に進むときは、現在のiteratorが先行ノードである可能性があるのでpredecessorを更新します。
      if (iterator.data < targetNode.data) {
          predecessor = iterator;
          iterator = iterator.right;
      }
      // 左側に進むときはpredecessorを更新する必要はありません。 
      else iterator = iterator.left;
  }

  return predecessor;
}

  // keyのノードを探す関数
  function findNode(root:BinaryTree<number> | null, key:number): BinaryTree<number> | null {
    let iterator = root;
  
    while (iterator != null) {
        if (iterator.data == key) return iterator;
        if (iterator.data < key) iterator = iterator.right;
        else iterator = iterator.left;
    }
  
    return iterator;
  }
  
  // 最大値を探す関数
  function maximumNode(root:BinaryTree<number> | null): BinaryTree<number> | null{
    let iterator = root;
    while (iterator != null && iterator.right != null) iterator = iterator.right;
    return iterator;
  }
}

// 二分探索木内の先行ノードの解説と解答
// まずは findNode 関数を使って key のノードを探します。ID199 二分探索木内探索の問題を参考に findNode 関数を定義しましょう。key のノードを targetNode とします。

// 次にターゲットとなるノードに左側の子があるかどうかで 2 つのケースに分けて考えます。

// (1) targetNode が左の子を持っていた場合
// (2) targetNode が左の子を持っていない場合
// (1) のケース
// targetNode が左側の子を持っていたら、左側部分木の中の最大値が先行ノードになります。
// 二分探索木から最大値を探す関数は、ID202 二分探索木内の最大値を参考に定義しましょう。
// (2) のケース
// targetNode の左側に子がない場合、先行ノードは存在しないか、もしくは targetNode の祖先の内の 1 つになります。
// 祖先のノードを保存しておくため、変数 predecessor を用意し最初は null を入れておきます。

// 探索と同じ要領でルートから木を降りていきます。
// targetNode が現在の iterator よりも大きい場合、現在の iterator は先行ノードである可能性があるので、
// predecessor に iterator を代入し、iterator を右へ進めます。

// targetNode が現在の iterator よりも小さい場合は先行ノードになる可能性はありません。そのまま次へ進みます。
// targetNode まで iterator が進んだら、保存していた predecessor を返します。それではコードを見てみましょう。