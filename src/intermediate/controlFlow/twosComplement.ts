// 2の補数
// Chan は宿題で、2 進数で 2 の補数を求めるプログラム作成を課されました。2 進数 bits が与えられるので 2 の補数を返す、twosComplement という関数を作成してください。ただし入力の 2 進数は 8 ビットとします。通常、回路はオーバーフローしたビットを保持することはできないですが、今回は 00000000 の 2 の補数の最上位ビットを出力に含めてください。

// 中上級者向け
// 整数型において、2 の補数表現を用いると加算で整数の減算が可能になり、正負の符号に 1 ビット扱う方法よりもハードウェアの構成が簡単になるため広く扱われています。

// 関数の入出力例
// 入力のデータ型： string bits
// 出力のデータ型： string
// twosComplement("00000000") --> 100000000
// twosComplement("00000010") --> 11111110
// twosComplement("11111111") --> 00000001
// twosComplement("01110101") --> 10001011
// twosComplement("00000001") --> 11111111
// twosComplement("10000000") --> 10000000
// twosComplement("10101010") --> 01010110
// twosComplement("11111110") --> 00000010

function twosComplement(bits:string): string{
  // 関数を完成させてください
  // 1の補数へ
  let twoComplement = oneComplement(bits);
  let carryOut = false;

  // 全てに1を足す
  for(let i = twoComplement.length - 1; i >= 0; i--) {
      if(twoComplement[i] === "0") {
          twoComplement = twoComplement.slice(0, i) + "1" + twoComplement.slice(i + 1);
          carryOut = false;
          break;
      } else {
          twoComplement = twoComplement.slice(0, i) + "0" + twoComplement.slice(i + 1);
          carryOut = true;
      }
  }

  return carryOut ? "1" + twoComplement : twoComplement;
}

function oneComplement(bits:string): string{
    let output = "";
    for(let i = 0; i < bits.length; i++) {
        if(bits[i] === "0") output += "1";
        else output += "0";
    }

    return output;
}


// 2の補数の解説と解答
// 2 の補数とは、ビットの 0 と 1 を入れ替えて最後に 1 を足したものと定義されます。
// 0 と 1 の入れ替えは 1 の補数を使えば簡単にできますが、1 を足す処理は少々頭を使う必要があります。なぜなら繰り上がりを考慮する必要があるからです。データは常に追跡しておく必要があるので、繰り上がりを追跡する carryOut というブール値を導入しましょう。繰り上がりが発生する際は true、発生しない場合は false とします。

// まずは 1 の補数を使って、twoComplement にそれを保存しましょう。0110 + 1 = 0111 になるように、足し算は常に最後の桁から実行されます。したがって、最後の桁から逆向きに for loop を実装しましょう。

// 今回は一気に考えるのではなく、for loop で 1 つ 1 つの桁の状態を考えていきます。文字列の後ろのビットから各桁 1 を足していき、あるポイントでストップするという処理を考えます。

// (i). 桁が 0 の時、その桁は 0 + 1 で 1 になります。i 番目の前後の文字列を切り取って、文字列 + 1 + 文字列という処理を行います。またこの際、繰り上がりはないので、carryOut は false にしておきます。桁が 0 で 1 を足される場合、そこで全ての処理は終了するはずなので for loop を break しましょう。

// (ii). 桁が 1 の時、その桁は 1 + 1 で 0 になります。i 番目の前後の文字列を切り取って、文字列 + 0 + 文字列という処理を行います。この時繰り上がりが発生するので、carryOut を true にしましょう。桁が 1 で 1 を足される場合、処理は終わらないため、for loop の最初に戻ります。


// 最後にもし carryOut が true でこの for loop を抜けた場合、それは twoComplement の全てのビットが 1 であったことを示し、今全てのビットは 0 になっているはずなので、一番左端に 1 をプラスして処理を終了します。

// function twosComplement(bits){
//   let twoComplement = oneComplement(bits);
//   let len = twoComplement.length;
//   let carryOut = false;

//   for (let i = len - 1; i >= 0; i--) {
//       if (twoComplement[i] == '0') {
//           twoComplement = twoComplement.slice(0, i) + '1' + twoComplement.slice(i+1, len);
//           carryOut = false;
//           break;
//       } else {
//           twoComplement = twoComplement.slice(0, i) + '0' + twoComplement.slice(i+1, len);
//           carryOut = true;
//       }
//   }
//   return carryOut ? '1' + twoComplement : twoComplement;
// }

// function oneComplement(bits){
//   let output = '';
//   for (let i = 0; i < bits.length; i++) {
//       bits[i] == '0' ? output += '1' : output += '0';
//   }
//   return output;
// }

// console.log(twosComplement("00011100")); // 11100100
// console.log(twosComplement("10010")); // 01110
// console.log(twosComplement("001001")); // 110111
// console.log(twosComplement("0111010")); // 1000110
// console.log(twosComplement("1")); // 1
// console.log(twosComplement("0")); // 10
// console.log(twosComplement("000")); // 1000