// 数字の分割
// 自然数 digits（0 < digits < 1015）が与えられるので、数字を 1 桁ずつ分解して、それぞれの値を合計し、その値が 1 桁になるまで同じ作業を繰り返した時、それぞれの合計値を足し合わせて得られる値を返す、recursiveDigitsAdded という関数を再帰を使って作成してください。例えば、45622943 の場合、1 桁ずつ分解することによって、4 + 5 + 6 + 2 + 2 + 9 + 4 + 3 = 35 となりますが、値が 1 桁ではないので、もう一度 35 = 3 + 5 = 8 のように分解します。最後にそれぞれ足し合わせて 8 + 35 = 43 となります。99999999999884 の場合は、9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 8 + 8 + 4 = 119 となり、その後 1 + 1 + 9 = 11 となるので、119 + 11 + 2 = 132 となります。

// 関数の入出力例
// 入力のデータ型： long digits
// 出力のデータ型： integer
// recursiveDigitsAdded(5) --> 5
// recursiveDigitsAdded(8) --> 8
// recursiveDigitsAdded(12) --> 3
// recursiveDigitsAdded(98) --> 25
// recursiveDigitsAdded(3528) --> 27
// recursiveDigitsAdded(99999999999884) --> 132
// recursiveDigitsAdded(5462) --> 25
// recursiveDigitsAdded(45622943) --> 43
// recursiveDigitsAdded(9514599) --> 48

function recursiveDigitsAdded(digits:number): number{
  // 関数を完成させてください
  if(digits < 10) return digits;

  const current = splitAndAdd(digits, 0);
  
  if(current < 10) return current;
  
  return current + recursiveDigitsAdded(current);
}

function splitAndAdd(digits: number, sum: number): number {
  if(digits === 0) return sum;
  return splitAndAdd(Math.floor(digits / 10), digits % 10 + sum);
};