// 総和
// 1 以上の整数 n が与えられるので、1 + 2 + 3 + ... + n を計算する simpleSummation という関数を再帰を使って作成してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： integer
// simpleSummation(3) --> 6
// simpleSummation(10) --> 55
// simpleSummation(100) --> 5050
// simpleSummation(54) --> 1485

function simpleSummation(n: number): number {
  if(n === 0) return 0;
  return simpleSummation(n - 1) + n;
};

// 二乗の総和
// 自然数 n が与えられるので、1^2 + 2^2 + 3^2 + ... + n^2 を計算する squareSummation という関数を再帰を使って作成してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： integer
// squareSummation(2) --> 5
// squareSummation(3) --> 14
// squareSummation(4) --> 30
// squareSummation(10) --> 385
// squareSummation(15) --> 1240
// squareSummation(100) --> 338350
// squareSummation(208) --> 3021304

function squareSummation(n:number): number{
  if(n === 0) return 0;
  return squareSummation(n - 1) + Math.pow(n, 2);
}

