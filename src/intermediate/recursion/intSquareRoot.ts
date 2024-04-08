// 整数上の平方根
// 自然数 n が与えられるので、平方根の整数部分だけを返す、intSquareRoot という関数を再帰計算によって作成してください。例えば、
// 2が与えられたとき、√2は 1.414213...であり、その整数部分は1です。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： integer
// intSquareRoot(12) --> 3
// intSquareRoot(35) --> 5
// intSquareRoot(78) --> 8
// intSquareRoot(81) --> 9

function intSquareRoot(n: number) {
  let guess = 1;

  while(guess * guess < n) {
    guess++
  };

  return guess - 1;
};