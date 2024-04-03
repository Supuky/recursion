// 階乗
// 自然数 n が与えられるので、1 × 2 × 3 × ... × n を計算する factorial という関数を再帰を使って作成してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： long
// factorial(2) --> 2
// factorial(3) --> 6
// factorial(5) --> 120
// factorial(10) --> 3628800
// factorial(15) --> 1307674368000

function factorial(n:number): number{
  if(n === 0) return 1;
  return factorial(n - 1) * n;
}