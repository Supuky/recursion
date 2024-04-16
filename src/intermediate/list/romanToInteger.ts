// Spinozza はローマ数字を自動で普通の数字に変換するシステムを開発しています。ローマ数字 romanNumber が与えられるので、それを自然数へと変換する、romanToInteger という関数を定義してください。ローマ数字への表は以下の通りです。

// I → 1
// V →	5
// X →	10
// L →	50
// C →	100
// D →	500
// M →	1000

// 関数の入出力例
// 入力のデータ型： string romanNumber
// 出力のデータ型： integer
// romanToInteger("IV") --> 4
// romanToInteger("IX") --> 9
// romanToInteger("XXXVIII") --> 38
// romanToInteger("LIV") --> 54
// romanToInteger("LXXXIX") --> 89
// romanToInteger("XCVIII") --> 98
// romanToInteger("MCMXCIII") --> 1993
// romanToInteger("MMXV") --> 2015
// romanToInteger("MMXX") --> 2020

function romanToInteger(romanNumber:string): number{
  // 関数を完成させてください
  let number = 0;
  const romanToNumMap: {[key: string]: number} = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
  };

  for(let i = 0; i < romanNumber.length; i++) {
      if(romanToNumMap[romanNumber[i]] < romanToNumMap[romanNumber[i + 1]]) number -= romanToNumMap[romanNumber[i]];
      else number += romanToNumMap[romanNumber[i]];
  }

  return number;
}

// ローマ数字を数字に変換の解説と解答
// ローマ数字は、次のローマ数字が大きいか小さいかによって正負が決まります。例えば、IV の場合、I = 1、V = 5 となり、I は V より小さいので負の数になります。よって、IV = -1 + 5 = 4 となります。VI の場合、V は I より大きいので正の数となり、VI = 5 + 1 = 6 となります。

// コードを書く際は、I から M までに対応している数字が決まっているので、これらを連想配列にまとめます。ローマ数字を変換するときは、与えられたローマ数字を for 文で 1 つずつ取得し、i 番目と i+1 番目の大きさを比較して、数字の正負を決めていきます。そして、連想配列からローマ数字に対応している数字を取得し、足し合わせます。