// 二項係数
// 二項係数を、連続する整数 n に対する各行に k を 0 から n まで順に並べて得られる三角形状の数の並びをパスカルの三角形と呼びます。パスカルの三角形において、n 段目の左から k 番目の係数を返す binomialCoefficient という関数を動的計画法を用いて作成してください。

// 関数の入出力例
// 入力のデータ型： integer n, integer k
// 出力のデータ型： integer
// binomialCoefficient(1,1) --> 1
// binomialCoefficient(2,2) --> 1
// binomialCoefficient(4,2) --> 6
// binomialCoefficient(7,4) --> 35

function binomialCoefficient(n:number, k:number): number{
  // 関数を完成させてください
  // let result: (number | null)[][] = [];
  let result: any[] = [];
  for(let i = 0; i <= n; i++) {
      result.push([null]);
  }

  result[0] = [1];

  for(let i = 1; i < result.length; i++) {
      let arr = [];
      for(let j = 0; j <= i; j++) {
          if(j === 0) arr.push(result[i - 1][j]);
          else if(j === i) arr.push(result[i - 1][j - 1]);
          else arr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
      result[i] = arr;
  }

  console.log(result);

  return result[n][k];
}