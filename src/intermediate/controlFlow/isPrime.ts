// 素数
// Kate は音楽の野外フェスを行うことになり、入場者の中から抽選でプレゼントを渡す企画を立てています。そこで、素数の値で入場した方を当選者とすることにしました。入場者番号 number が与えられるので、素数かどうか判定する isPrime という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer number
// 出力のデータ型： bool
// isPrime(1) --> false
// isPrime(2) --> true
// isPrime(3) --> true
// isPrime(4) --> false
// isPrime(25) --> false
// isPrime(29) --> true
// isPrime(36) --> false
// isPrime(45) --> false
// isPrime(85) --> false
// isPrime(455) --> false

function isPrime(number:number): boolean{
  // 関数を完成させてください
  if(number === 1) return false;
  for(let i = 2; i < number; i++) {
      if(number % i === 0) return false;
  }

  return true;
}


// 素数の解説と解答
// 素数とは 「1 と自分自身以外に約数を持たない数」 のこと、つまり約数が 2 つしかない数のことを指します。例えば、6 の約数は「1,2,3,6」で、この時 1 と 6 が含まれるのは当たり前でしょう。一方、7 の約数は「1,7」であり、1 と 7 以外の約数は持ちません。したがって、7 は素数になります。

// この判定プログラムを作るには、目標の値を n とすると、n を i = 2から n-1 までのそれぞれの値で割って、その数値が割り切れるか調べ、割り切れなければ良いことになります。例えば、10 の場合、10 を 2 から 9 で順番に割っていき、その中に割り切れるものがあれば、10 は素数ではないということになります。ではコードを見てみましょう。

// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//       // 2からnumber-1まで割っていく
//       // どこかで割れたら素数ではない
//       if (number % i == 0) return false;
//   }
//   // 0と1は素数ではない
//   return number > 1;
// }

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(29));
// console.log(isPrime(45));
// console.log(isPrime(85));
// console.log(isPrime(455));

// 整数 n は √n * √n と表せることから、i = 2 から √n まで調べるプログラムでも ok です。
// function isPrime(number) {
//   for (let i = 2; i * i <= number; i++) {
//       if (number % i == 0) return false;
//   }
//   return number > 1;
// }

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(29));
// console.log(isPrime(45));
// console.log(isPrime(85));
// console.log(isPrime(455));
