// 正方形の合計枚数
// Thomas は図画工作で色紙を使って飛行機を作成しています。色紙にはさまざまなサイズが用意されており、選択することができます。今、Thomas は長方形の色紙から整数値を 1 辺とする、できるだけ大きく、かつ同じ大きさの正方形を何枚も切り取ることを計画しています。長方形の大きさとして、縦 x、横 y が与えられるので、正方形の合計枚数を返す、countSquare という関数を作成してください。ただし、入力 x , y はどちらも整数とします。

// 関数の入出力例
// 入力のデータ型： integer x, integer y
// 出力のデータ型： integer
// countSquare(28,32) --> 56
// countSquare(20,32) --> 40
// countSquare(8177,3315) --> 555

function countSquare(x:number, y:number): number{
  // 関数を完成させてください
  const GCD = gcd(x, y);
  return x / GCD * y / GCD;
}

function gcd(x: number, y: number): number {
  if(x % y === 0) {
      return y;
  } else {
      return gcd(y, x % y);
  };
};