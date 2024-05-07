// 葉ノードの数
// medium
// 二分木 root が与えられるので、最深層に存在する葉ノードの合計値を返す、deepestLeaves という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： integer

// deepestLeaves( toBinaryTree([3,2,1,null,7,8]) )--> 15 

// deepestLeaves( toBinaryTree([5,8,1,10,12,8,null,null,null,null,null,9,10]) )--> 19 

// deepestLeaves( toBinaryTree([5,2,18,4,3]) )--> 7 

// deepestLeaves( toBinaryTree([27,14,35,10,19,31,42]) )--> 102 

// deepestLeaves( toBinaryTree([30,15,60,7,22,45,75,null,null,17,27]) )--> 44 

// deepestLeaves( toBinaryTree([50,17,76,9,23,54,null,null,14,19,null,null,72]) )--> 105 

// deepestLeaves( toBinaryTree([16,14,10,8,7,9,3,2,4,1]) )--> 7 

// deepestLeaves( toBinaryTree([0,-10,5,null,-3,null,9]) )--> 6 

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

function deepestLeaves(root:BinaryTree<number> | null): number{
    // 関数を完成させてください
        // 両端キューとして扱うための配列を用意し、根ノードを入れておきます。
        let queue  = [root]; 
        // 葉ノードを足し合わせるための変数totalを宣言します。
        let total = 0;
        // ヘルパー関数が返す両端キューをresultに保存します。resultの要素は全て葉ノードです。
        let result = deepestLeavesHelper(root, queue);
    
        for(let node of result) {
            total += node.data;
        }
        return total;
}

// ヘルパー関数を定義しキューを引数にとります。
function deepestLeavesHelper(root:BinaryTree<number> | null, queue:BinaryTree<number>[] | null[]) {
  // 子ノードを入れるためのキューを作成します。
  let child = [];
  // 引数queueをループして、その要素の子ノードをchildに入れます。
  for(let node of queue) {
      if(node.left !== null) child.push(node.left);
      if(node.right !== null) child.push(node.right);
  }
  // childが空でない場合は、childを引数にして再帰します。
  if (child.length !== 0) return deepestLeavesHelper(root, child);
  // ベースケース childが空になった時queueに入っているのはすべて最深層の葉ノードです。
  else return queue;

}
}

// 葉ノードの数の解説と解答
// 両端キューを使って階層走査を行い、最深層の葉ノードを保存します。階層走査については ID213 階層走査の問題を参考にしてください。まずは、キューを作成し、根ノードを入れておきます。このqueueを引数としてヘルパー関数を定義し、再帰的に走査して最深層の葉ノードを保存します。

// ヘルパー関数では、引数として受け取ったqueueに入っているノードをループして、そのノードの子ノードを新たに作ったchildというキューに保存します。左の子があれば、それを child へ追加、右の子があれば child へ追加と水平方向へ階層的にキューへ入れていきます。child を引数として再度再帰すると、またその要素の子ノードを新たな child に追加していきます。引数の queue に子ノードがない場合、child は空になり、引数 queue の要素はすべて最深層の葉ノードということになります。

// 最後に、ヘルパー関数から返ってきた queue をループしてその値を足し合わせます。それではコードを見てみましょう。