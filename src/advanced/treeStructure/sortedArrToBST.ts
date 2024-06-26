// ソート済み配列を二分探索木へ変換
// easy
// 異なる整数値で構成されるソート済みのリスト numberList が与えられるので、平衡二分探索木を作成し、その根ノードを返す、sortedArrToBST という関数を作成してください。


// 関数の入出力例

// 入力のデータ型： integer[] numberList

// 出力のデータ型： binaryTree<integer>

// sortedArrToBST( [1,2,3] )--> [2,1,3] 

// sortedArrToBST( [1,2,3,5,6,9,10] )--> [5,2,9,1,3,6,10] 

// sortedArrToBST( [-1,0,3,10,13,19,22] )--> [10,0,19,-1,3,13,22] 

// sortedArrToBST( [1,3,4,5,8] )--> [4,1,5,null,3,null,8] 

// sortedArrToBST( [1,4,6,10,11,14,15,20,22,25,50,61,68,72] )--> [15,6,50,1,11,22,68,null,4,10,14,20,25,61,72] 

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

  function sortedArrToBST(numberList:number[]): BinaryTree<number> | null{
      // 関数を完成させてください
      return sortedArrToBSTHelper(numberList, 0, numberList.length - 1);
  }

  function sortedArrToBSTHelper(list: number[], start: number, end: number): BinaryTree<number> {
    // ベースケースは要素が1つになった時
    if (start === end) return new BinaryTree(list[start]);
    // 配列の中心を決めます。
    let mid = Math.floor((start + end) / 2);

    // startからmid-1までを左側、mid+1からendまでを右側の部分木にします。
    let left = start === mid ? null : sortedArrToBSTHelper(list, start, mid - 1);
    let right = end === mid ? null : sortedArrToBSTHelper(list, mid + 1, end);

    // 配列の中心を根ノードとして、左右の部分木を合わせて新しいノードにします。
    return new BinaryTree(list[mid], left, right);
}
}

// ソート済み配列を二分探索木へ変換の解説と解答
// ソート済みのリストを BST に移行するアルゴリズムを再帰的に実装していきます。配列の start と end を追跡するための変数を、ヘルパー関数を使って用意します。中間の要素を根ノードに設定し、start から mid-1 までを左側の部分木（変数 left）、 mid+1 から end までを右側の部分木（変数 right）として設定します。

// start と mid が同じになるまで自身を呼び出し、配列を半分に分け続けます。要素が 1 個になった時に新しいノードを作って返します。それではコードを見てみましょう。