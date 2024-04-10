// x になるまでの組み合わせ
// 自然数 x が与えられるので、1 または 2 を足し合わせて合計が x になる組み合わせの数を返す、numberOfWay という関数を作成してください。例えば、3 になる組み合わせは以下の通りです。

// 1 + 1 + 1
// 2 + 1
// 1 + 2

// 関数の入出力例
// 入力のデータ型： integer x
// 出力のデータ型： integer
// numberOfWay(1) --> 1
// numberOfWay(2) --> 2
// numberOfWay(3) --> 3
// numberOfWay(4) --> 5
// numberOfWay(5) --> 8
// numberOfWay(10) --> 89
// numberOfWay(12) --> 233
// numberOfWay(20) --> 10946

function numberOfWay(x:number): number{
  // 関数を完成させてください
  if(x === 1) return 1;
  if(x === 2) return 2;
  return numberOfWay(x - 1) + numberOfWay(x -2);
}


// numberOfWay(3)は,1+?か2+?しかない
// 1 -> 1 (1)
// 2 -> 2 (1 + 1, 2)
// 3 -> 3 (1 + 1 + 1, 2 + 1, 1 + 2)
// 4 -> 5 (1 + 1 + 1 + 1, 2 + 1 + 1, 1 + 2 + 1, 1 + 1 + 2, 2 + 2)

// ヒント
// 6 は、5 に 1 を加えるか、4 に 2 を加えるの 2 つの場合しかありません。
// つまり、n になるまでの組み合わせ数 numberOfWay(n) は、 n-1 になるまでの組み合わせ数 numberOfWay(n-1) と n-2 になるまでの組み合わせ数 numberOfWay(n-2) を足したものになります。