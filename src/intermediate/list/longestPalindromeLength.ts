// クイズゲーム
// Brecker がクイズ大会に参加した時、ある文字列をランダムに並び替えた時に、最長となる回文を答える問題が出題されました。文字列 string が与えられるので、最長の回文の長さを返す、longestPalindromeLength という関数を作成してください。例えば、文字列 hello 内の文字を組み合わせてできる最長の回文の 1 つは lhl となるので、3 を返します。

// 関数の入出力例
// 入力のデータ型： string string
// 出力のデータ型： integer
// longestPalindromeLength("abcccdd") --> 5
// longestPalindromeLength("kayak") --> 5
// longestPalindromeLength("abcdefa") --> 3
// longestPalindromeLength("abcdabct") --> 7
// longestPalindromeLength("abcdefg") --> 1
// longestPalindromeLength("hello") --> 3
// longestPalindromeLength("forkayakkayakfor") --> 16
// longestPalindromeLength("nursesrunatthehole") --> 15
// longestPalindromeLength("sitnumquametaspernatur.") --> 17
// longestPalindromeLength("harumautdoloresetaperiamrationeestvoluptatesexercitationem.") --> 47
// longestPalindromeLength("quidebitisaspernaturvelfugautexpeditaassumenda.") --> 37
// longestPalindromeLength("omnisetidest.") --> 9

function longestPalindromeLength(string: string) {
  let hashmap: {[key: string]: number} = {};
  let count = 0;

  for (let i = 0; i < string.length; i++) {
      hashmap[string[i]] = (hashmap[string[i]] || 0) + 1;

      if (hashmap[string[i]] % 2 === 0) {
          count += 2;
      }
  }

  return string.length > count ? count + 1 : count;
}

console.log(longestPalindromeLength("abcccdd"));
console.log(longestPalindromeLength("kayak"));
console.log(longestPalindromeLength("abcdefa"));
console.log(longestPalindromeLength("abcdabct"));


// まずは、回文のおさらいをしてみましょう。文字列が回文となるパターンは、

// (i) abccba（全て対となっている場合）
// (ii) abcba（対と、真ん中に単独の文字が入っている場合）

// の 2 パターンに分類されます。文字の個数を把握する必要がある理由は、回文の構築において、文字がペアであることが重要だからです。例えば、文字 'a' が 2 回出現する場合、これらは回文の左右対称の部分に配置できます。しかし、3 回出現する場合は、2 つをペアとして使用し、残りの 1 つを中央に置くことができます。

// 例えば、文字列 "nursesrunatthehole" を考えましょう。この文字列から作成できる最長の回文を見つけるためには、まず各文字の出現回数を数えます。これにはハッシュマップを使用します。ハッシュマップでは、キーとして文字を、値としてその文字の出現回数を記録します。この例では、ハッシュマップは次のようになります：{'n': 2, 'u': 2, 'r': 2, 's': 2, 'e': 3, 'a': 1, 't': 2, 'h': 2, 'o': 1, 'l': 1}。

// 次に、回文を作成する際に考慮する点は、回文は中心から左右対称であるということです。したがって、ペア（2 回出現する文字）を使って左右対称の部分を構成します。この例では 'n', 'u', 'r', 's', 't', 'h' がペアとして使えます。これらの文字を使って左右対称の部分を作成すると、回文の長さはこれらの文字数の 2 倍になります。

// しかし、回文は中心に単一の文字を持つこともできます。例えば "racecar" の中央にある 'e' のようにです。この文字列では 'e', 'a', 'o', 'l' が中心として使える候補ですが、回文はただ一つの中心を持つことができるため、これらの中から一つだけを選んで回文の中心に使います。

// この場合、最長の回文は "nurseth + o + htesrun" のようになり、その長さは 2 * 7 + 1 = 15 となります。ここで、7はペアとして使える文字の数（'n', 'u', 'r', 's', 't', 'h'）、1 は中心として選んだ 'o' のための加算です。