// パングラム
// Faraone は宿題で英文を作るように頼まれました。ただし、a - z までの全てのアルファベットを含まなければいけない条件がついています。英文 string が与えられるので、a - z までの全ての文字を含んでいるか判定する、isPangram という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： string string
// 出力のデータ型： bool
// isPangram("we promptly judged antique ivory buckles for the next prize") --> true
// isPangram("We promptly judged Antique ivory buckles for the next prize") --> true
// isPangram("a quick brown fox jumps over the lazy dog") --> true
// isPangram("sphinx of black quartz judge my vow") --> true
// isPangram("the five boxing wizards jump quickly") --> true
// isPangram("sheep for a unique zebra when quick red vixens jump over the yacht") --> false
// isPangram("the Japanese yen for commerce is still well-known") --> false
// isPangram("dan took the deep dive down the rabbit hole") --> false

function isPangram(string:string): boolean{
  // 関数を完成させてください
    // キャッシュを作成
    let cache = Array(26).fill(0);

    // 1文字ずつ取得し、文字コードを使ってキャッシュを更新します
    for (let i = 0; i < string.length; i++){
      let ascii = string.toLowerCase().charCodeAt(i);
      if (ascii >= 97 && ascii <= 122) cache[ascii - 97] = 1;
    }

    // 0が一つもなかったら全ての文字が存在する事になります。
    return Math.min(...cache) != 0;
}