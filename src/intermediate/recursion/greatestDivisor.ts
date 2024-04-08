// プログラミング言語に sqrt 関数がない場合、自然数nの平方根をどのように求めるか

// 自然数 n が与えられるので、n の約数のうち、n 自身を除く最大の数値を返す関数
// 例えば、12 の約数は 1,2,3,4,6,12 であるが、これは、12 を 12,11,10,...,2,1 で順に割っていき、割り切れたものの羅列である
// したがって、n を固定して、n-1,n-2,n-3,..., と動く変数が存在すれば良い
// 引数を追加した補助関数を作成します。
function getGreatestDivisor(n: number){
  // 補助関数に n-1 を引数として渡します
  return getGreatestDivisorHelper(n, n-1);
}
  

// n/k が割り切れるか再帰的にチェックする関数
function getGreatestDivisorHelper(n: number,k: number){
  // n を大きい数字から割っていき、最初に割り切れたものが答え
  if (n % k == 0){
     return k;
  }
  return getGreatestDivisorHelper(n,k-1);
}
  

// 12 の約数は、1,2,3,4,6,12
console.log(getGreatestDivisor(12));

// 36 の約数は、1,2,3,4,9,12,18,36
console.log(getGreatestDivisor(36));