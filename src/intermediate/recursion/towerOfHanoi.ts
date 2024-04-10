// ハノイの塔 (模範解答のように解けなかった。)
// Simon は 3 本の棒と複数枚の円盤を用意し、以下の条件がある課題に取り組んでいます。

// 1 本目の棒に積み上げられている円盤を全て 2 本目の棒に移します。
// 円盤は 1 枚ずつしか動かせません。また、3 本の棒以外の所に置いてはいけません。
// 小さな円盤の上に大きな円盤を置いてはいけません。
// 最初に積み重ねている円盤は、一番下が大きく、一番上が小さくなっています。

// 円盤の枚数 discs が与えられるので、円盤を移し終えるために必要な回数を返す関数 towerOfHanoi を作成してください。

// 関数の入出力例
// 入力のデータ型： integer discs
// 出力のデータ型： integer
// towerOfHanoi(1) --> 1
// towerOfHanoi(2) --> 3
// towerOfHanoi(3) --> 7
// towerOfHanoi(5) --> 31
// towerOfHanoi(10) --> 1023
// towerOfHanoi(20) --> 1048575

function towerOfHanoi(discs:number): number{
  // 関数を完成させてください
  if(discs === 1) return 1;
  return towerOfHanoi(discs - 1) + Math.pow(2, discs - 1);
};

// ヒント
// 円盤 3 枚を異なる棒へ移動させる際に必要な回数を f(3) としたとき、f(3) を f(2) をどのように表現できるか考えてみましょう。
// f(2) とは、円盤 2 枚を移動させる際に必要な回数です。円盤を 3 枚動かすには、必ず図の赤と青の円盤 2 枚を動かす必要があります。
// まず、赤と青の円盤 2 枚を一番右の棒へ移動させます。移動回数は f(2) です。次に、黄色の円盤を真ん中に移動させます。移動回数は 1 です。最後に右の棒から赤と青の円盤を真ん中の棒へ移動させます。移動回数は f(2) です。したがって、f(3) = f(2) + 1 + f(2) となります。
// では、円盤 4 枚のときを考えてみましょう。

// ハノイの塔の解説と解答
// 典型的な再帰の問題です。再帰の問題は前後関係をおさえることが非常に重要です。円盤 n 枚を移動させる際に必要な回数を f(n) としましょう。まずはわかりやすくするために、一番左の棒を left、真ん中の棒を middle、右の棒を right とします。図のように、4 枚の円盤が left にあるとします。今 4 枚の円盤を middle に移動させることを考えています。移動に必要な回数は f(4) です。
// 全ての円盤を middle まで持っていくには、先に right に 3 枚の円盤を移動させた後、middle に最後の円盤を移動させる必要があります。
// 円盤 3 枚を left から right まで移動させる回数は f(3) で、最後の円盤を left から middle まで移動させる回数は 1 となります。今、すでに middle には最後の円盤があるので、もう一度3枚の円盤を right から middle へ移動させる必要があります。
// つまり、f(4) = f(3) + 1 + f(3) が成り立つことがわかります。n 枚の円盤を middle へ動かすときは、同じ要領で、f(n) = f(n-1) + 1 + f(n-1) となります。ベースケースは、f(1) = 1 になります。このように前後の関係と初期値さえわかってしまえば、再帰的に解くことができます。

// function towerOfHanoi(discs){
//   // ベースケース
//   if (discs == 1) return 1;

//   // left->right にn-1枚を動かす
//   let leftToRight = towerOfHanoi(discs - 1);

//   // left->middle に最後の円盤を動かす
//   let leftToMiddle = 1;

//   // right->middle にn-1枚を動かす。値はleftToRightと同じ
//   let rightToMiddle = leftToRight;

//   return leftToRight + leftToMiddle + rightToMiddle;
// }

// console.log(towerOfHanoi(1));
// console.log(towerOfHanoi(2));
// console.log(towerOfHanoi(3));
// console.log(towerOfHanoi(5));
// console.log(towerOfHanoi(10));
// console.log(towerOfHanoi(20));