// 3で割り続ける
// 3 の累乗 n が与えられるので、整数 n を 3 で除算できる回数を返す、divideBy3Count という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： integer
// divideBy3Count(1) --> 0
// divideBy3Count(3) --> 1
// divideBy3Count(27) --> 3
// divideBy3Count(729) --> 6
// divideBy3Count(6561) --> 8

function divideBy3Count(n:number): number{
  // 関数を完成させてください
  if(n < 3) return 0;
  return divideBy3CountHelper(Math.floor(n/3), 1);
}

function divideBy3CountHelper(n: number, count: number) {
  if(n < 3) return count;
  return divideBy3CountHelper(Math.floor(n/3), count + 1);
}

// 約数
// 正の整数を引数として受け取り、その数の約数をすべてハイフンで区切って返す関数 divisor を再帰を用いて定義してください。この関数を呼び出した際に返される文字列の形式は以下のようになります。

// 例えば、divisor(12) を呼び出すと、文字列 "1-2-3-4-6-12" が返されます。最初の数値は必ず 1 で、その後の数値は昇順で約数が表示されます。最後の数値は引数で与えられた整数そのものです。

// 関数の入出力例
// 入力のデータ型： integer number
// 出力のデータ型： string
// divisor(28) --> 1-2-4-7-14-28
// divisor(29) --> 1-29
// divisor(720) --> 1-2-3-4-5-6-8-9-10-12-15-16-18-20-24-30-36-40-45-48-60-72-80-90-120-144-180-240-360-720
function divisor(number:number): string{
  // 関数を完成させてください
  return divisorHelper(number, 2, "1");
}

function divisorHelper(number: number, divisorNum: number, output: string) {
  if(number === divisorNum) return output + `-${divisorNum}`;
  
  if(number % divisorNum === 0) output += `-${divisorNum}`;
  
  return divisorHelper(number, divisorNum + 1, output);
}

// 約数の解説と解答
// 28 を例としてみてみましょう。

// 28 --> 1-2-4-7-14-28
// 右側に羅列されている数値は、28 を 1 から 28 の数字で順に割って、割り切れた数値です。1 から 28 までカウントを増やす必要があるので、パラメータを増やした helper 関数を用意して、(number,1) を初期値としてスタートとしましょう。ベースケースはカウンタが最後まで到達した時、つまり、カウンタ = number となった時です。それではコードを見てみましょう。

// function divisor(number){
//   return divisorHelper(number, 1);
// }

// function divisorHelper(number, i) {
//   // iがnumberと等しくなったら再帰を終了する
//   if (number <= i) return number.toString();
//   // numberを割り切れる数の場合、文字列を追加する
//   if (number % i == 0) return i.toString() + '-' + divisorHelper(number, i+1);
//   else return divisorHelper(number, i+1);
// }

// console.log(divisor(28));
// console.log(divisor(29));
// console.log(divisor(720));