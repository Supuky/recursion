// 重複なし最長部分文字列
// Richard は SNS アプリを開発し、ユーザーがパスワードを作成する時にパスワードの強度を表示する機能を実装しようと思いました。そこで、同じ文字を含まない文字数が長いほど強度が大きい仕組みにしようと考えています。小文字のパスワード password が与えられるので、同じ文字を含まない最長の文字列の長さを返す、longestSubstringLength という関数を作成してください。例えば、slloel では、loe が最長の部分文字列になります。

// 関数の入出力例
// 入力のデータ型： string password
// 出力のデータ型： integer
// longestSubstringLength("abcabcab") --> 3
// longestSubstringLength("abcdbcab") --> 4
// longestSubstringLength("abcdcbcab") --> 4
// longestSubstringLength("eafghijak") --> 7
// longestSubstringLength("abcddcab") --> 4
// longestSubstringLength("abcdddcab") --> 4
// longestSubstringLength("aa") --> 1
// longestSubstringLength("inciduntilloetassumendaet") --> 7
// longestSubstringLength("cupiditatenonetomnisvoluptatumquidelectusaliquam") --> 11
// longestSubstringLength("ametetoccaecatieosprovidentutvel") --> 11
// longestSubstringLength("laudantiumsintlaborumpariaturquiadeserunt") --> 12
// longestSubstringLength("omnisquiaoccaecaticommodi") --> 7

function longestSubstringLength(password: string){
  let hashmap: {[key: string]: number} = {};   // 各文字のインデックスを格納
  let window = 0; // 同じ文字を含まない最大文字数を格納
  let start = 0;  // 同じ文字を含まない部分文字列の始まりのインデックス

  // 各文字を1つずつ取得していきます
  for (let end = 0; end < password.length; end++) {

    // hashmapに文字が存在していたら、startを更新
    if (hashmap[password[end]] != undefined) {
        start = Math.max(start, hashmap[password[end]] + 1);
    }

    // まだhashmap内に文字が存在しないとき、その文字を追加
    hashmap[password[end]] = end;
    // windowを更新
    window = Math.max(window, end - start + 1);

  }

  return window;
}

console.log(longestSubstringLength("uddvqd"));
console.log(longestSubstringLength("abcabcab"));
console.log(longestSubstringLength("abcdbcab"));
console.log(longestSubstringLength("abcdcbcab"));
console.log(longestSubstringLength("eafghijak"));
console.log(longestSubstringLength("inciduntilloetassumendaet"));

// 問題から文字が文字列のどこにあるか調べる必要があるので、ハッシュマップを使ってインデックスを保存していきます。

// uddvqd
// について、d に着目すると、hashmap[d] = 1 -> 2 -> 5 と値を更新していくことができるので、for 文を回したときに、password[i] より前かつ、password[i] と同じ文字のインデックス情報を取得することができます。uddvqd の例で言えば、i = 4のときに d を使って、hashmap[d] = 2 を取得することができるので、start の位置を特定できます。このロジックを使って、常に start の位置、window のサイズを把握すれば最大値を求めることができます。

// それでは、具体例 slloel で一度確認してみましょう。

// i = 0
// start = 0
// hashmap[s] = 0
// window = 1
// i = 1
// start = 0
// hashmap[l] = 1
// window = 2
// i = 2
// l がすでにハッシュマップの中にあるので
// start = 2 へ変更
// hashmap[l] = 2 へ変更
// window = 1
// i = 3
// start = 2
// hashmap[o] = 3
// window = 2
// i = 4
// start = 2
// hashmap[e] = 4
// window = 3
// i = 5
// l がすでにハッシュマップの中にあるので
// start = 3
// hashmap[l] = 5 へ変更
// window = 1
// このように文字がハッシュマップに含まれているかチェックしていくことで、目的の値を O(n) で取得することができます。それではコードを見てみましょう。