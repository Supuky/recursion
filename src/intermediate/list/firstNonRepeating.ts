// 復習のお知らせ機能
// Zollar は算数の計算練習ができるウェブサイトを立ち上げました。このサイトには a 問題から z 問題までの 26 個の問題があり、サイトには復習機能が備わっています。この機能では、ユーザーが一度しか解いていない問題をトップページの一番上に表示します。

// ユーザーが解いたことのある問題一覧が、小文字のアルファベットから成る文字列 s として与えられるとき、この文字列内で最初に出現し、かつ一度しか解かれていない問題のインデックスを返す firstNonRepeating という関数を定義してください。このような問題が存在しない場合は -1 を返してください。例えば、文字列が "aabbcdddeffg" の場合、一度しか解かれていない最初の問題は c で、そのインデックスは 4 なので 4 を返します。

// 関数の入出力例

// 入力のデータ型： string s

// 出力のデータ型： integer

// firstNonRepeating("aabbcdddeffg") --> 4

// firstNonRepeating("abcdabcdf") --> 8

// firstNonRepeating("abcddaebcdf") --> 6

// firstNonRepeating("aabbbccdd") --> -1

// firstNonRepeating("ddecdfgf") --> 2

// firstNonRepeating("abcdeeff") --> 0

// firstNonRepeating("zzcbdefghafhgbbcd") --> 5

function firstNonRepeating(s: string) {
  const countMap: {[key: string]: number} = {};

  for (let i = 0; i < s.length; i++) {
      if (!countMap[s[i]]) {
          countMap[s[i]] = 0;
      }
      countMap[s[i]]++;
  }

  for (let i = 0; i < s.length; i++) {
      if (countMap[s[i]] === 1) {
          return i;
      }
  }

  return -1;
}

console.log(firstNonRepeating("aabbcdddeffg"));
console.log(firstNonRepeating("abcdabcdf"));
console.log(firstNonRepeating("abcddaebcdf"));

// 復習のお知らせ機能の解説と解答
// まず各問題（文字列 s の各文字）が何回解かれたかを数える必要があります。これを実現するために、ハッシュマップを使用して、文字列内の各文字の出現回数を追跡します。

// 最初のステップでは、文字列 s を1文字ずつ走査し、各文字が何回出現するかを countMap でカウントします。文字が初めて出現した場合はカウンターを 0 に初期化し、その後、その文字が出現するたびにカウンターを増やします。

// 次に、もう一度文字列 s を走査しますが、今度は各文字が countMap で 1 としてカウントされているかどうかを確認します。これは、その文字が文字列内で一度しか出現していないことを意味します。一度しか解かれていない最初の問題（文字）を見つけたら、そのインデックス（位置）を返します。

// 例えば、文字列が "aabbcdddeffg" の場合、countMap は各文字の出現回数を保存し、二度目の走査で最初に出現回数が1の文字 'c' を見つけます。'c' のインデックスは 4 なので、関数は 4 を返します。