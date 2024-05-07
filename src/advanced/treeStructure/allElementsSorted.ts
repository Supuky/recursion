// BSTソート
// medium
// 二分探索木 root1、root2 が与えられるので、2 つに含まれる全ての整数を昇順でリストとして返す、allElementsSorted いう関数を作成してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root1, binaryTree<integer> root2

// 出力のデータ型： integer[]

// allElementsSorted( toBinaryTree([9,8,11]), toBinaryTree([3,1,5]) )--> [1,3,5,8,9,11] 

// allElementsSorted( toBinaryTree([3,null,5]), toBinaryTree([2,1,6]) )--> [1,2,3,5,6] 

// allElementsSorted( toBinaryTree([73,11,90,null,24,79,93]), toBinaryTree([44,39,49,36,41,46,72,null,null,null,null,null,null,null,86]) )--> [11,24,36,39,41,44,46,49,72,73,79,86,90,93] 

// allElementsSorted( toBinaryTree([29,14,48,1,20,42,76,null,null,null,null,null,null,null,97]), toBinaryTree([46,21,85,7,27,73,98]) )--> [1,7,14,20,21,27,29,42,46,48,73,76,85,97,98] 

// allElementsSorted( toBinaryTree([22,19,54,4,21,28,56]), toBinaryTree([29,10,64,4,28,32,75,null,null,null,null,null,null,null,100]) )--> [4,4,10,19,21,22,28,28,29,32,54,56,64,75,100] 

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

function allElementsSorted(root1:BinaryTree<number> | null, root2:BinaryTree<number> | null): number[]{
    // 間順走査で昇順に要素を取り出します。  
    const res1 = inOrderWalk(root1, []);
    const res2 = inOrderWalk(root2, []);
    let res = [];
    // root1のインデックスをi、root2のインデックスをjとします。
    let i = 0;
    let j = 0;

    while (i < res1.length && j < res2.length) {
        // 2つのリストを比較しながら小さい方をresに入れていきます。
        if (res1[i] < res2[j]) {
            res.push(res1[i]);
            i++;
        } else {
            res.push(res2[j]);
            j++;
        }
    }
    // 要素が残っているリストを足します。
    return i < res1.length ? res.concat(res1.slice(i)) : res.concat(res2.slice(j));
}

  // 間順走査
  function inOrderWalk(root: BinaryTree<number> | null, res: number[]) {
      if (root == null) return;

      inOrderWalk(root.left, res);
      res.push(root.data);
      inOrderWalk(root.right, res);

      return res;
  }
}

// BSTソートの解説と解答
// ID207 間順走査を参考にソートされた 2 つのリストを作りましょう。間順走査は要素を昇順に二分探索木から取り出すことができます。2 つのリストのインデックスを追いかける変数 i と j を用意します。先頭から比較し、小さい方を新しいリストに追加していきます。どちらか一方のリストが最後尾まで来たら、要素が残っているもう片方のリストを足します。それではコードを見てみましょう。
