// 1 + 2 + 3 + … + n を計算する再帰関数 simpleSummation を使って、総和の総和を計算する simpleSummationOfSummations を見てみましょう。

// 例として、1 から 3 までの総和の総和を考えます。1 から 3 までの総和の総和は以下のように表すことができます。

// 1 から 3 までの総和の総和
// = (1 から 3 までの総和) + (1 から 2 までの総和) + (1 から 1 までの総和)
// 見やすくするために、1 から n までの総和の総和を SS(n)、1 から n までの総和を S(n) と表記します。1 から 3 までの総和の総和 SS(3) を S(n) を使って表すと、
// SS(3)
// = S(3) + S(2) + S(1)
// 再帰関数を作成するために、SS(3) を SS(2) を使って表してみます。S(2) + S(1) は、(1 から 2 までの総和) + (1 から 1 までの総和)、つまり「1 から 2 までの総和の総和」なので SS(2) になります。したがって、再帰関数は、
// SS(3)
// = S(3) + SS(2)
// と自身の関数を用いて表すことができました


// 総和の再帰関数
function simpleSummation(count: number): number{
  // ベースケース
  if(count <= 0 ){
      return 0;
  }

  return count + simpleSummation(count-1);
}

// 総和の総和の再帰関数
function simpleSummationOfSummations(count: number): number{
  // ベースケース
  if(count <= 0 ){
      return 0;
  }

  // SS(n) = S(n) + SS(n-1)
  return simpleSummation(count) + simpleSummationOfSummations(count-1);
}

console.log(simpleSummationOfSummations(4));
console.log(simpleSummationOfSummations(3));
console.log(simpleSummationOfSummations(2));
console.log(simpleSummationOfSummations(10));
console.log(simpleSummationOfSummations(2));


// 再帰の流れ
// SS(3)
// S(3) + SS(2)
// (3 + S(2)) + SS(2)
// (3 + (2 + S(1))) + SS(2)
// (3 + (2 + (1 + S(0)))) + SS(2)
// (3 + (2 + (1 + 0))) + SS(2)
// (3 + (2 + 1)) + SS(2)
// (3 + 3) + SS(2)
// 6 + SS(2)
// 6 + (S(2) + SS(1))
// 6 + ((2 + S(1)) + SS(1))
// 6 + ((2 + (1 + S(0))) + SS(1))
// 6 + ((2 + (1 + 0)) + SS(1))
// 6 + ((2 + 1) + SS(1))
// 6 + (3 + SS(1))
// 6 + (3 + (S(1) + SS(0)))
// 6 + (3 + ((1 + S(0)) + SS(0)))
// 6 + (3 + ((1 + 0) + SS(0)))
// 6 + (3 + (1 + SS(0)))
// 6 + (3 + (1 + 0))
// 6 + (3 + 1)
// 6 + 4
// 10