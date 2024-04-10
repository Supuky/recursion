// 1の補数
// Chan は宿題で、2 進数で 1 の補数を求めるプログラム作成を課されました。2 進数 bits が与えられるので 1 の補数を返す、oneComplement という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： string bits
// 出力のデータ型： string
// oneComplement("00011100") --> 11100011
// oneComplement("10010") --> 01101
// oneComplement("001001") --> 110110
// oneComplement("0111010") --> 1000101
// oneComplement("1") --> 0

// function oneComplement(bits:string): string{
//   // 関数を完成させてください
//   let output = "";
//   for(let i = 0; i < bits.length; i++) {
//       if(bits[i] === "0") output += "1";
//       else output += "0";
//   }

//   return output;
// }
