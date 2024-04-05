// 文字列の圧縮
// Hodge は文章を短く表示するアプリを作成しており、文字が連続して 2 回以上続く場合は文字を数字に置き換えようと考えています。アルファベットで書かれた文字列 s が与えられるので、再帰を使って連続で続いた文字を数字に置き換える、stringCompression という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： string s
// 出力のデータ型： string
// stringCompression("aaabbb") --> a3b3
// stringCompression("aaabbbc") --> a3b3c
// stringCompression("aaabbbCCL") --> a3b3C2L
// stringCompression("aaabbbCCLL") --> a3b3C2L2
// stringCompression("abceeaaaddbbb") --> abce2a3d2b3
// stringCompression("aaabbbaaaaccaaaaba") --> a3b3a4c2a4ba
// stringCompression("a") --> a

function stringCompression(s:string): string{
  // 関数を完成させてください
  return stringCompressionHelper(s, 0, 1, "");
}

function stringCompressionHelper(s: string, start: number, end: number, output: string) {
  if(start === s.length) return output;
  if(s[start] !== s[end]) {
    output = end - start === 1 ? output + s[start] : output + s[start] + (end - start);
    return stringCompressionHelper(s, end, end + 1, output)
  } 
  return stringCompressionHelper(s, start, end + 1, output);
}


// 模範解答
// function stringCompression(s){
//   return stringCompressionHelper(s, 0, 0, '');
// }

// // helper関数で引数を増やします
// // right: leftの右側にある文字, left: 連続の始まりの文字, output: 出力する文字を格納する
// function stringCompressionHelper(s, right, left, output) {

//   // leftが文字列の長さ以上になったら再帰を終了し、文字を格納してきたoutputを返します。
//   if (left >= s.length) return output;
//   // rightが文字列の長さ未満かつ、rightの文字とleftの文字が等しい場合、次の文字の比較に移ります
//   if (right < s.length && s[right] == s[left]) return stringCompressionHelper(s, right + 1, left, output);

//   // rightの文字とleftの文字が等しくない場合と、rightが文字列のサイズ以上の値になった場合(最後の文字の比較が終わった後の場合)

//   // right - left で連続した値を出します
//   let count = right - left;

//   // outputに文字を加えます。文字が2以上連続していれば数字も加えます
//   if (count > 1) output += s[left] + count;
//   else output += s[left];

//   // rightをleftに格納することで、連続の始まりの値を変更します。
//   left = right;
//   // 再帰
//   return stringCompressionHelper(s, right, left, output);
// }

// console.log(stringCompression("aaabbb"));
// console.log(stringCompression("aaabbbc"));
// console.log(stringCompression("aaabbbCCL"));
// console.log(stringCompression("aaabbbCCLL"));