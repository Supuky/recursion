// 深さ最小
// medium
// 二分木 root が与えられるので、最小の深さを返す、minDepth という関数を作成してください。ここでの最小の深さとは、根ノードから最も近い葉ノードまでのノード数を指します。


// 関数の入出力例

// 入力のデータ型： binaryTree<integer> root

// 出力のデータ型： integer

// minDepth( toBinaryTree([8,9,11]) )--> 1 

// minDepth( toBinaryTree([93,16,65,80]) )--> 1 

// minDepth( toBinaryTree([92,88,53,36,27,16,80,45]) )--> 2 

// minDepth( toBinaryTree([44,12,49,3,29,46,62,null,null,null,null,null,null,null,70]) )--> 2 

// minDepth( toBinaryTree([19,34,73,39,56,4,86,17,84,34]) )--> 2 

// minDepth( toBinaryTree([97,10,77,32,40,70,32,96,27,10,12,93,82,33,55,71,59,82,37,75,25,31,14,96,85,41,28,70,9,56,8,90,8,65,49,45,34,30,25,7,7,97,23,66,84,57,38,38,95,9,77,60,44,3,81,41,89,90,73,100,86,53,96,40]) )--> 5 

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

function minDepth(root:BinaryTree<number> | null): number{
    // 関数を完成させてください
    // 現在の深さを保存するためのリストを用意します。
    let levelList: number[] = [];
    // 根ノードの深さ0からスタートします。
    levelList = minDepthHelper(root, 0, levelList);

    // 最小値を入れる変数 初期値としてint型の最大値を入れておきます。
    let minLevel = Infinity;
    // リストから最小値を探します。
    for(let num of levelList) {
        if(num < minLevel) {
            minLevel = num;
        }
    }
    // 更新した最小値を返します。
    return minLevel;
}

// 現在の深さを保存するlevelとそれ入れたリストlevelListを引数に追加します。
function minDepthHelper(root:BinaryTree<number> | null, level: number, levelList: number[]) {

    // ベースケース
    if (root == null) return levelList;

    if (root.right == null && root.left == null) {
        // 葉ノードについたらその深さをリストに保存します。
        levelList.push(level);
    }
    // 現在の深さに1を足して再帰します。
    minDepthHelper(root.left, level+1, levelList);
    minDepthHelper(root.right, level+1, levelList);

    return levelList;
}


}

// 深さ最小の解説と解答
// ヘルパー関数を使って、現在の深さと、それを保存していくリストを引数に追加します。ベースケースは、root が null の時に levelList を返すとします。

// 深さ優先探索で、左の子へ 1 つ進むと現在の深さに 1 を足して再帰し、同じように右の子にも再帰します。右の子、左の子両方が null の時、そのノードは葉ノードなので、リストに追加します。すべてのノードをたどったらヘルパー関数が返したリストから最小値を探索し返します。

