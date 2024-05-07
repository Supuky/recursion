// 完全二分木
// medium
// 二分木が与えられるので、完全二分木（complete binary tree）かどうか判定する、isCompleteBinaryTree という関数を作成してください。完全二分木とは、最下層を除いてすべての深さがノードで満たされ、最下層の葉ノードが可能な限り左に寄せられているような木のことを指します。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： bool

// isCompleteBinaryTree( toBinaryTree([0,1,2,3]) )--> true 

// isCompleteBinaryTree( toBinaryTree([0,1,2,3,4,5]) )--> true 

// isCompleteBinaryTree( toBinaryTree([0,1,2,4,5,null,7]) )--> false 

// isCompleteBinaryTree( toBinaryTree([0,1,3,4,null,7,8]) )--> false 

// isCompleteBinaryTree( toBinaryTree([0,1,2,3,null,6]) )--> false 

// isCompleteBinaryTree( toBinaryTree([97,10,77,32,40,70,32,96,27,10,12,90,73,100,86,null,96]) )--> false 

// isCompleteBinaryTree( toBinaryTree([11,7,75,9,59,83,60,46,6,12,26,28,26,91,98,83,7,null,31,66,77,23,null,100,40]) )--> false 

// isCompleteBinaryTree( toBinaryTree([38,67,22,52,0,29,43,41,55,97,82,33,85,5,80,3,94,46,0,32,88,59,59,38,64,83,78,47,13,41,89,90,17,36,53,56,1,8,36,92,8,null,78,33,81,86,null,10,6,31,27]) )--> false 

// 完全二分木の解説と解答
// ID213 階層走査と同じように、キューを使って幅優先探索をします。まずは変数 iterator に root を入れ、while 文の中で以下の処理を iterator が null になるまで繰り返します。

// (1) iterator の左の子をキューに入れる
// (2) iterator の右の子をキューに入れる
// (3) キューの先頭を削除し、新しい iterator にする
// iterator が葉ノードまでたどり着いたら葉ノードの左右の子は null なので、キューの後ろには null が入っているはずです。iterator が null の時、キューの後ろから null を pop し続け、途中に null でない値が入っていたら false を返します。

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

function isCompleteBinaryTree(root:BinaryTree<number> | null): boolean{
    // 関数を完成させてください
    // キューを使います。
    let queue = [];
    let iterator = root;
    // iteratorがnullになるまで幅優先探索を行います。
    while (iterator != null) {
        queue.push(iterator.left); // 左の子をキューへ
        queue.push(iterator.right); // 右の子をキューへ
        iterator = queue.shift(); // キューの先頭を削除

        // iteratorがnullだったら、キューの後ろに入っているnullをpopします。
        if (iterator == null) {
            while (queue.length > 0) {
              // もしnull以外の値が入っていた場合はfalseを返します。
              if (queue.pop() != null) return false;
            }
        }
    }
    return true;
  }
}