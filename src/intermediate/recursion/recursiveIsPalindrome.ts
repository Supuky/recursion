// 回文（再帰）
// 文字列 s が与えられるので、文字列が回文かどうか判定する、recursiveIsPalindrome という関数を作成してください。回文とは、始めから読んだ場合と終わりから読んだ場合でも同じ文字列を指します。

// 関数の入出力例
// 入力のデータ型： string s
// 出力のデータ型： bool
// recursiveIsPalindrome("kayik") --> false
// recursiveIsPalindrome("kayak") --> true
// recursiveIsPalindrome("recursion") --> false
// recursiveIsPalindrome("Top spot") --> true
// recursiveIsPalindrome("Was it a cat I saw") --> true
// recursiveIsPalindrome("abba") --> true

function recursiveIsPalindrome(s:string): boolean{
  // 関数を完成させてください
  s = s.replace(/ /g, "").toLowerCase();
  return recursiveIsPalindromeHelper(s, 0, s.length - 1);
}

function recursiveIsPalindromeHelper(s : string, start: number, end: number) {
  if(start >= end) return true;
  
  if(s[start] != s[end]) return false;

  return recursiveIsPalindromeHelper(s, start + 1, end - 1);
}