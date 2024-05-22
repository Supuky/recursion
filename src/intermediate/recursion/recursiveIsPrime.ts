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

// 与えられた整数 n が素数であるかどうかを判定する再帰関数です。m は 2 から始まり、n の平方根まで増加していきます。ここで、if (m * m > n) の部分は、m の二乗が n より大きい場合、n は素数であると判断されることを意味しています。

// 具体的な例を見てみましょう。以下は isPrime 関数の動作を示すものです。

// n が 5 の場合:
// m は 2 から始まります。
// m * m は 4 です。4 は 5 より小さいので、次のステップに進みます。
// n % m は 5 % 2 であり、余りは 1 です。1 は 0 ではないため、次のステップに進みます。
// m を 3 に増加させて、再度同じステップを繰り返します。
// m * m は 9 です。9 は 5 より大きいため、この時点で判定が終了します。
// 5 は素数であるため、true を返します。
// n が 6 の場合:
// 同様に m を増加させていきます。
// m * m は 9 です。9 は 6 より大きいため、この時点で判定が終了します。
// 6 は 2 で割り切れるため、素数ではありません。false を返します。
// このように、if (m * m > n) の条件は、素数判定の効率的な方法を提供しています。平方根を計算する代わりに、m の二乗が n より大きい場合、素数であると判断できるためです。


// この再帰的なアプローチも素数判定には有効です。このコードは、与えられた数 n が素数であるかどうかを判定します。以下に、この再帰関数の動作を説明します：
// 関数 isPrime(n, m) は2つの引数を受け取ります。n は判定対象の数であり、m は現在の除数です。
// 最初に、m * m が n より大きい場合、これは素数であることを意味します。なぜならば、平方根までの範囲で割り切れるかどうかを調べているためです。
// 次に、n を m で割った余りが0であれば、n は素数ではありません。割り切れる場合は false を返します。
// 上記の条件に該当しない場合、再帰的に isPrime(n, m + 1) を呼び出します。これにより、次の除数で再度判定を行います。