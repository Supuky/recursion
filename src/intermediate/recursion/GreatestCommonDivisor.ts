// 3つの最大公約数
// 自然数 x, y, z が与えられるので、x, y, z の最大公約数を返す、threeGCD という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer x, integer y, integer z
// 出力のデータ型： integer
// threeGCD(12,18,24) --> 6
// threeGCD(30,243,91) --> 1
// threeGCD(1029,1071,2100) --> 21
// threeGCD(3180,1908,72) --> 12

function threeGCD(x:number, y:number, z:number): number{
  // 関数を完成させてください
  const xyGCD = GCD(x, y);
  const xyzGCD = GCD(xyGCD, z);
  return xyzGCD;
}

function GCD(x: number, y: number): number{
  if(x % y === 0) {
      return y;
  } else {
      // xとyを入れ替える [ex. 44 % 242 = 44]を利用する
      return GCD(y, x % y);
  }
}


// memo
// n = 0 のとき、gcd(m,n) = m
// n > 0 のとき、gcd(m,n) = gcd(n, m % n)

// ex.
// 3180 と 1908 の最大公約数、gcd(3180, 1908) を長方形から正方形を切り出していく例を想像しながら再帰的に求めてみましょう。
// gcd(3180, 1908)
// = gcd(3180 % 1908, 1908) = gcd(1272, 1908)
// = gcd(1272, 1908 % 1272) = gcd(1272, 636)
// = gcd(1272 % 636, 636) = gcd(0, 636)
// = 636

