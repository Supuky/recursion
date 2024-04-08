// 素数（再帰）
// 自然数 n が素数かどうか判定する、recursiveIsPrime という関数を再帰計算を使って作成してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： bool
// recursiveIsPrime(1) --> false
// recursiveIsPrime(2) --> true
// recursiveIsPrime(3) --> true
// recursiveIsPrime(4) --> false
// recursiveIsPrime(25) --> false
// recursiveIsPrime(29) --> true
// recursiveIsPrime(36) --> false
// recursiveIsPrime(45) --> false
// recursiveIsPrime(85) --> false
// recursiveIsPrime(455) --> false

function recursiveIsPrime(n:number): boolean{
  // 関数を完成させてください
  if(n === 1) return false;
  if(n === 2) return true;
  return recursiveIsPrimeHelper(n, 2);
}

function recursiveIsPrimeHelper(n: number, m: number) {
  if(n === m) return true;
  if(n % m === 0) return false;
  return recursiveIsPrimeHelper(n, m + 1);
}

// # コードレビュー

// ## 良い点
// - 素数かどうかを判定するための再帰関数を適切に実装している点が良いです。
// - 再帰関数を使って素数判定を行っている点が適切です。

// ## 改善点
// - 素数判定のアルゴリズムとしては、nがmで割り切れるかどうかを確認する方法は効率的ではありません。例えば、nの平方根までの数で割り切れるかどうかを確認する方法の方が効率的です。
// - 現在の実装では、再帰の深さがnに比例して増加する可能性があります。大きな数に対して再帰を行うとスタックオーバーフローのリスクがあります。この点を考慮して改善する必要があります。

// ## 改善例
// - 素数判定のアルゴリズムを改善し、nの平方根までの数で割り切れるかどうかを確認する方法を採用することで、効率的な素数判定が可能です。
// - 再帰の深さを減らすために、末尾再帰を利用することでスタックオーバーフローのリスクを軽減できます。

// ## 改善したコード例
// function recursiveIsPrime(n: number): boolean {
//     if (n <= 1) {
//         return false;
//     }
//     return isPrime(n, 2);
// }

// function isPrime(n: number, m: number): boolean {
//     if (m * m > n) {
//         return true;
//     }
//     if (n % m === 0) {
//         return false;
//     }
//     return isPrime(n, m + 1);
// }