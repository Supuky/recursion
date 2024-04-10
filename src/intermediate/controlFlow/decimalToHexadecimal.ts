// 10進数から16進数への書き換え
// Zayn は 16 進数しか使えない世界は飛ばされてしまったため、自動で 10 進数を 16 進数へ変えるプログラムを作ることにしました。正の 10 進数 decNumber が与えられるので、16 進数に書き換える decimalToHexadecimal という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer decNumber
// 出力のデータ型： string
// decimalToHexadecimal(532454) --> 81FE6
// decimalToHexadecimal(90304) --> 160C0
// decimalToHexadecimal(28394) --> 6EEA
// decimalToHexadecimal(15) --> F
// decimalToHexadecimal(74) --> 4A

function decimalToHexadecimal(decNumber:number): string{
  // 関数を完成させてください
  const hashmap: {[key: number]: string} = {
      10: "A",
      11: "B",
      12: "C",
      13: "D",
      14: "E",
      15: "F"
  };

  let output = "";

  while(decNumber > 0) {
      output = hashmap[decNumber % 16] === undefined ? decNumber % 16 + output : hashmap[decNumber % 16] + output;
      decNumber = Math.floor(decNumber / 16);
  };

  return output;
}

