// 株式予測
// medium
// Garrett は R 商事の株を売買する事で儲けようと考えています。R 商事の毎日の予想株価リスト stocks が与えられたとき、各日にちの株価がより高くなるまで何日待つかを示したリストを返す、dailyStockPrice という関数を作成してください。株価がより高くなる日がない場合は 0 を入力してください。

// 関数の入出力例

// 入力のデータ型： integer[] stocks

// 出力のデータ型： integer[]

// dailyStockPrice([58,59,71]) --> [1,1,0]

// dailyStockPrice([58,59,37,83]) --> [1,2,1,0]

// dailyStockPrice([63,63,64]) --> [2,1,0]

// dailyStockPrice([85,83,67,83,81,38,88,85]) --> [6,5,1,3,2,1,0,0]

// dailyStockPrice([38,37,38,35,34,37,39,40,33,33]) --> [6,1,4,2,1,1,1,0,0,0]

// 後ろからスタックを使って効率よく計算してみましょう。


// 株式予測の解説と解答
// まずは、[58,59,37,83] -> [1,2,1,0] の例に注目します。58 -> 59 で 1、59 -> 37 -> 83 で 2 とわかるように、前からチェックしていくと、要素の先にどのような要素が存在するか毎回確認しなければいけません。これでは効率の悪い計算になってしまいます。そこで、後ろからスタックを使ってチェックしていきます。


// [58,59,56,44,37,83] を考えます。res = [0,0,0,0,0,0] とします。インデックスの差分を計算しないといけないので、スタックにはインデックスを積み上げていきます。

// i = 5
// arr[5] = 83 -> push, stack = [5]

// i = 4
// arr[4] = 37 -> push, stack = [5,4]

// i = 3
// arr[3] = 44, stack の頂上 37 と比較。
// 44 未満が続く間は pop し、最後に arr[3] を push, stack = [5,3]


// i = 2
// arr[2] = 56, stack の頂上 44 と比較。
// 56 未満が続く間は pop し、最後に arr[2] を push, stack = [5,2]

// i = 1
// arr[1] = 59, stack の頂上 56 と比較。
// 59 未満が続く間は pop し、最後に arr[1] を push, stack = [5,1]


// ※ スタックの中に 59 以上の数字のインデックスが入っていることが保証されているので、59 からそのインデックスまでどれだけ差が開いているか計算することができます。実際、[58,59,56,44,37,83] で、59 より先に存在する数字の中で 59 以上の要素は 83 でその情報はスタックの中に保存されています。つまり、積み上げたスタックの頂上と現在の要素を常に比較し、現在の要素が大きければ、その要素より小さくなるまで頂上を pop し続ければ目的の情報は取得することができます。

function dailyStockPrice(stocks:number[]): number[]{
  // 関数を完成させてください
  // インデックスをstackに入れる
  let stack: number[] = []
  // stocksの数だけ全て0で初期化 [0, 0, 0, 0]
  let results: number[] = [...Array(stocks.length)].map(() => 0);
  for(let i = stocks.length - 1; i >= 0; i--) {
      while(stack.length > 0 && stocks[stack[stack.length - 1]] <= stocks[i]) stack.pop()
      if(stack.length > 0) results[i] = stack[stack.length - 1] - i
      stack.push(i)
  }
  console.log(stack)
  return results
}

// function dailyStockPrice(stocks){
//   let stack = [];
//   // インデックスで同時に追跡しやすいように、0で先に埋めておきます。
//   let res = new Array(stocks.length).fill(0);
//   // 配列の後ろから追跡します
//   for (let i = stocks.length - 1; i >= 0; i--) {
//       // 積み上げたスタックの頂上と現在の要素を常に比較し、現在の要素が大きければ、その要素より小さくなるまでスタックの頂上をpopし続けます。
//       while (stack.length > 0 && stocks[stack[stack.length - 1]] <= stocks[i]) stack.pop();
//       // スタックの頂上と現在の要素の差をres[i]に記録します。
//       if (stack.length > 0) res[i] = stack[stack.length - 1] - i;
//       // 現在の要素のインデックスをスタックにpushします。
//       stack.push(i);
//   }

//   return res;
// }

console.log(dailyStockPrice([58,59,71])); // [1,1,0]
console.log(dailyStockPrice([58,59,37,83])); // [1,2,1,0]
console.log(dailyStockPrice([63,63,64])); // [2,1,0]
console.log(dailyStockPrice([85,83,67,83,81,38,88,85])); // [6,5,1,3,2,1,0,0]
console.log(dailyStockPrice([38,37,38,35,34,37,39,40,33,33])); // [6,1,4,2,1,1,1,0,0,0]