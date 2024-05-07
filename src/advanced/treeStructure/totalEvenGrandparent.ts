// 祖父母ノード
// medium
// 自然数で構成される二分木 root が与えられるので、祖父母ノードが偶数値を持つノードの合計を返す、totalEvenGrandparent という関数を作成してください。ここでの祖父母ノードは親ノードの親ノードを指します。もし、偶数値を持つ祖父母ノードが存在しない場合、0 を返してください。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： integer

// totalEvenGrandparent( toBinaryTree([8,9,11]) )--> 0 

// totalEvenGrandparent( toBinaryTree([8,9,11,3,null,null,2]) )--> 5 

// totalEvenGrandparent( toBinaryTree([57,33,77,9,40,61,92,7,14,35,46,59,63,78,96,null,null,null,23,null,37,null,47,null,null,null,76,null,84,null,99]) )--> 267 

// totalEvenGrandparent( toBinaryTree([41,15,70,8,28,55,78,4,10,21,34,47,63,74,83,2,6,9,14,16,25,33,35,46,50,56,65,72,75,81,90,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,40,null,null,null,null,null,null,null,69,null,null,null,null,null,null,null,96]) )--> 765 

// totalEvenGrandparent( toBinaryTree([52,33,72,17,39,63,85,10,25,35,44,58,69,80,98,5,12,18,27,34,36,40,48,53,59,66,70,73,82,89,99,null,null,null,16,null,22,null,28,null,null,null,37,null,43,null,49,null,null,null,60,null,68,null,71,null,79,null,83,null,94,null,99]) )--> 1032 

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

  function totalEvenGrandparent(root:BinaryTree<number> | null): number{
      // 関数を完成させてください

    // arrを作成しヘルパー関数から返ってきた配列を保存します。
    let arr: number[] = []
    arr = totalEvenGrandparentHelper(root, arr, null, null);
    // arrをループしてノードのデータを足し合わせます。
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

    // ヘルパー関数を定義します。親ノード、祖父母ノードを引数に追加します。
function totalEvenGrandparentHelper(root:BinaryTree<number> | null, arr: number[], parent:BinaryTree<number> | null, grandParent:BinaryTree<number> | null){

    if (root != null){
        // 祖父母ノードが存在し、それが偶数である場合、arrにその値を追加します。
        if (grandParent != null && grandParent.data % 2 == 0) arr.push(root.data);
        // 左の子、右の子へ進みながら再帰します。
        totalEvenGrandparentHelper(root.left, arr, root, parent);
        totalEvenGrandparentHelper(root.right, arr, root, parent);
    }
    // ベースケース rootがnullになったらarrを返します。
    return arr;
}

}

// 祖父母ノードの解説と解答
// 親ノード、祖父母ノードを保存するために、ヘルパー関数に引数を追加します。また条件に当てはまる祖父母ノードが存在した時そのデータを保存する配列を用意し、それもヘルパー関数の引数に追加します。

// ヘルパー関数では、引数に現在のノードを親ノード、現在のノードの親ノードを祖父母ノードとして再帰しながら、深さ優先探索を行います。その時、祖父母ノードが存在し、かつそれが偶数であるときには arr にそのノードのデータを追加しておきます。すべてのノードを走査したら、保存した配列を返してarrに保存します。最後に配列内の要素を足し合わせて返します。

