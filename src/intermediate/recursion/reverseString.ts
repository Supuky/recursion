// 文字列の逆表示
// Catherine は与えられた単語や文章を逆側から読み上げる遊びを友達とやっています。文字列 string が与えられるので、string を反転した文字列を返す reverseString という関数を再帰を使って定義してください。

// 関数の入出力例
// 入力のデータ型： string s
// 出力のデータ型： string
// reverseString("abcd") --> dcba
// reverseString("recursion") --> noisrucer
// reverseString("I am a software engineer") --> reenigne erawtfos a ma I

function reverseString(s:string): string{
  if (s.length <= 1) return s;
  let subStr = s.substring(0, s.length - 1);
  return s[s.length - 1] + reverseString(subStr);
};