// タイルの数 (できなかった)
// n × m の四角形の中に、2^i × 2^i（i≥0）のタイルを敷き詰めていくことを考えています。自然数 n、m が与えられるので、最も少ないタイルの数を返す、minTiles という関数を再帰を使って作成してください。

// 例えば、4 × 3 の四角形の中には、2^1 × 2^1のタイルを 2 つ、2^0 × 2^0のタイルを 4 つ敷き詰めることができます。

// 関数の入出力例
// 入力のデータ型： integer n, integer m
// 出力のデータ型： integer
// minTiles(10,5) --> 14
// minTiles(100,7) --> 175
// minTiles(55,9) --> 75
// minTiles(73,8) --> 17
// minTiles(3,4) --> 6
// minTiles(10,10) --> 10

// タイルの数の解説と解答
// ここでは n を縦、m を横として扱っていきます。また、f(n,m) は n × m に含まれるタイルの数とします。では、例として n = 18、m = 12 を考えてみましょう。

// この問題では 1 辺が 2n のタイルを調べているので、両辺が 2 の倍数のとき、2 で割ることができます。つまり、n = 18、m = 12 と、n = 9、m = 6 は拡大縮小の関係にあり、タイルは同じ敷き詰め方で、含まれるタイルの数も同じになります。この結果から、n、m 共に偶数の場合、f(n,m) = f(n/2, m/2) が成り立つことがわかります。

// では、次に n = 9、m = 6 について見ていきましょう。n から横だけ 1 列分だけ切り取ると、両方とも偶数の n = 8、m = 6 の長方形と 1 辺が 20 = 1 のタイル 6 枚と置き換えることができます。

// したがって、f(9,6) = 6 + f(8,6) となりますが、先ほどのパターンから f(8,6) = f(4,3) とわかるので、f(9,6) = 6 + f(4,3)と表すことができます。つまり、n が奇数、m が偶数の場合は、f(n,m) = m + f(n-1/2, m/2) が成り立つことがわかります。

// 次は、n = 4、m = 3 を考えることになりますが、これは先ほどと全く同じ考え方を適用することによって、n = 4、m = 2 の長方形と、1 辺が 20 = 1 のタイル 4 枚と置き換えることができます。つまり、f(4,3) = 4 + f(4,2) = 4 + f(2,1) となります。したがって、n が偶数かつ、m が奇数の場合、f(n,m) = n + f(n/2, m-1/2) が成り立つことがわかります。

// n = 18、m = 12 の一連の処理では出てきませんでしたが、最後に n、m 両方とも奇数の場合を考えてみましょう。n = 9、m = 7 としましょう。n の 1 列分と m の 1 列分を切り取ると、n = 8、m = 6 の長方形を取得することができます。

// 上の画像のように、両辺から 1 列ずつ切り取った場合、n と m に重複する箇所が出ます。重複をなくした場合のタイルの数は、n + m - 1になるため、n、m 共に奇数の場合、f(n,m) = n + m - 1 + f((n-1)/2, (m-1)/2) という関係が成り立ちます。

// ベースケースは n = 0、または m = 0 のときで、0 を返します。それではコードを見てみましょう。

function minTiles(n: number,m: number): number{
  // ベースケース
  if (m == 0 || n == 0) return 0;    

  // 両辺とも2で割り切れる場合、f(n,m) = f(n/2, m/2)が成り立ちます
  if (n % 2 == 0 && m % 2 == 0) return minTiles(n/2, m/2);

  // nのみが奇数の場合、nから横一列分切り取ると両辺を2で割ることができます
  // したがって、f(n,m) = m + f(n-1/2, m/2)となります
  else if (n % 2 != 0 && m % 2 == 0) return m + minTiles((n-1)/2, m/2);

  // mのみが奇数の場合、mから縦一列分切り取ると両辺を2で割ることができます
  // したがって、f(n,m) = n + f(n/2, m-1/2)となります
  else if (n % 2 == 0 && m % 2 != 0) return n + minTiles(n/2, (m-1)/2);

  // n,mの両方が奇数の場合は、nの1列分とmの1列分を切り取ると両辺を2で割ることができます
  // f(n,m) = n + m - 1 + f((n-1)/2, (m-1)/2)
  else return n + m - 1 + minTiles((n-1)/2, (m-1)/2);
}

console.log(minTiles(10,5));
console.log(minTiles(100,7));
console.log(minTiles(55,9));