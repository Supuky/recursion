// リズムゲーム
// Kilson はリズムゲームをプレイしており、画面上に表示される文字と同じパターンでボタン入力をする必要があります。ユーザーのボタン入力 inputChar、画面上に表示される単語一覧 wordList が与えられるので、2 つが同じパターンかどうか判定する hasSameStructure という関数を定義してください。空白は同じ文字としてカウントしないものとします。
// 例：abcabc, soccer baseball tennis soccer baseball tennis
// -> inputChar の文字の並び方と wordList の文字の並び方が対応しているため true を返します。

// 関数の入出力例
// 入力のデータ型： string inputChar, string wordList
// 出力のデータ型： bool
// hasSameStructure("abc","hello world") --> false
// hasSameStructure("tut","hot mild cold") --> false
// hasSameStructure("tut","hot mild mild") --> false
// hasSameStructure("aabac","word word dictionary word word") --> false
// hasSameStructure("aabac","word word dictionary word string") --> true
// hasSameStructure("abcabc","soccer baseball tennis soccer baseball tennis") --> true
// hasSameStructure("zabccabcz","book comic phone music music comic phone music book") --> true
// hasSameStructure("zzz","math math math") --> true

function hasSameStructure(inputChar: string, wordList: string){
  // 文字列をスペースで区切って配列にします
  let arr = wordList.split(' ');
  // inputChar と arrの 長さが違えば false
  if (inputChar.length != arr.length) return false;

  // inputChar の文字をキー、arr の文字列を値としてハッシュマップを作成します
  let hashmap: {[key: string]: string} = {};

  for (let i = 0; i < inputChar.length; i++) {
      // ハッシュマップに inputChar[i] があるけど、inputChar[i]: arr[i] ペアがないとき False
      if (hashmap[inputChar[i]] != undefined && hashmap[inputChar[i]] != arr[i]) return false;
      // ハッシュマップに inputChar[i] がないけど、arr[i] があるとき False
      if (hashmap[inputChar[i]] === undefined && Object.values(hashmap).includes(arr[i])) return false;
      // それ以外はハッシュマップに追加
      else hashmap[inputChar[i]] = arr[i];
  }      
  return true;
}

console.log(hasSameStructure("tut","hot mild cold")); // false
console.log(hasSameStructure("aabac","word word dictionary word word")); // false
console.log(hasSameStructure("aabac","word word dictionary word string")); // true
console.log(hasSameStructure("abcabc","soccer baseball tennis soccer baseball tennis")); // true
console.log(hasSameStructure("zabccabcz","book comic phone music music comic phone music book")); // true
console.log(hasSameStructure("zzz","math math math")); // true