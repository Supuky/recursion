// フィボナッチの合計
// 自然数 n が与えられるので、フィボナッチ数列の n 項目までの総和を返す、fibonacciTotal という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： integer
// fibonacciTotal(5) --> 12
// fibonacciTotal(9) --> 88
// fibonacciTotal(10) --> 143
// fibonacciTotal(19) --> 10945
// fibonacciTotal(30) --> 2178308

function fibonacciTotal(n:number): number{
  // 関数を完成させてください
  return fibonacciTotalHelper(n, 0, 1, 0);
}

function fibonacciTotalHelper(n: number, f1: number, f2: number, sum: number) {
  if(n < 1) return sum;
  return fibonacciTotalHelper(n - 1, f2, f1 + f2, sum + f2);
}