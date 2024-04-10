// カエサルの暗号
// 紀元前 70 年頃、古代ローマの軍事的指導者ガイウス・ユリウス・カエサル（Gaius Iulius Caesar）は秘密文書を敵に解読されないために文字列に含まれる全ての単語を数文字分シフトさせる方法を思いつきました。小文字によって構成された文字列 message、自然数 n が与えられるので、暗号を作成する caesarCipher という関数を作成してください。z の次は a に戻ることに注意してください。また空白によってメッセージが読み取られないよう、返される文字列の空白は全て取り除いてください。

function caesarCipher(message:string, n:number): string{
  // 関数を完成させてください
  const trimedMessage = message.replace(/ /g, "");
  let output = "";

  for(let i = 0; i < trimedMessage.length; i++) {
      let charCode = trimedMessage.charCodeAt(i);
      charCode += n;

      if(charCode >= 123) {
          charCode -= 26;    
      };

      output += String.fromCharCode(charCode);
  }

  return output;
}

// コードの番号
// a -> 97
// z -> 122

// 123以上なら26を引けばaの文字コードになる。


// カエサルの暗号の解説と解答
// messege = "i love you"、n = 2 を例にして流れを見ましょう。

// まずは問題で指定されている、空白の取り除きを行います。空白の除去を行うと文字列は、iloveyou になります。次に、各文字を n 文字分シフトさせていきます。文字をシフトさせる際は文字コードを使います。i を文字コードに変換すると 105 になります。k（i を 2 文字分シフトさせた文字）を文字コードに変換すると 107 になります。

// つまり、文字を文字コードに変換させ、その値に n を加えた値を文字に戻せばシフトが完了することになります。n を加えた際に z の文字コードである 122 を超えた場合、26 を引けば a に戻ることができます。各文字に上記の処理を行うと、答えは knqxgaqw になります。

// また、n = 500のような大きい数が与えられた場合、同じシフトを何周も繰り返すことになるので、n % 26 で重複を削りましょう（1 回 = 27 回 = 53回）。それではコードを見てみましょう。

// function caesarCipher(message,n){
//   const string = message.replace(/ /g,"");    // 空白を消します
//   let res = '';

//   // 1文字ずつシフトさせていきます
//   for (let i = 0; i < string.length; i++) {
//       // 文字は26種類なので、1文字分シフトさせた文字と27文字分シフトさせた文字は同じになります
//       // そのため、26で割った余りで文字をシフトさせます
//       res += converter(string[i], n % 26);
//   }

//   return res;
// }

// // 文字をシフトさせる関数
// function converter(char, n) {
//   // 文字を文字コードに変えて、n文字分だけシフトさせます
//   // zの文字コードである122を超えた場合は、26を引いてaから数えられるようにします
//   let ascii = char.charCodeAt(0);
//   let shifted = ascii + n > 122 ? ascii + n - 26 : ascii + n;

//   return String.fromCharCode(shifted);
// }

// console.log(caesarCipher("i love you",0));
// console.log(caesarCipher("i love you",1));
// console.log(caesarCipher("i love you",2));
// console.log(caesarCipher("the future belongs to those who believe in the beauty of their dreams",2));