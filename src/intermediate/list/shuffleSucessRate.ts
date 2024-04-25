// シャッフルの割合
// Beck は倉庫の整理係で、倉庫内にある荷物には全て商品番号が振られています。ある日、地震が起きて棚にある荷物が全て落ちてしまい、Beck は急いで棚に戻したら荷物の順番がバラバラになりました。地震前の荷物 arr と地震後の荷物 shuffledArr が与えられるので、地震が起きた後に何%の荷物が移動したかを返す、shuffleSuccessRate という関数を定義してください。小数点以下に対しては切り捨ての処理を行ってください。また商品番号は一意であるとします。

// 関数の入出力例
// 入力のデータ型： integer[] arr, integer[] shuffledArr
// 出力のデータ型： integer
// shuffleSuccessRate([2,32,45],[45,32,2]) --> 66
// shuffleSuccessRate([2,32,45],[45,2,32]) --> 100
// shuffleSuccessRate([2,32,45],[2,32,45]) --> 0
// shuffleSuccessRate([2,32,45,67],[2,32,67,45]) --> 50
// shuffleSuccessRate([2,32,45,67,89],[2,89,67,45,32]) --> 80
// shuffleSuccessRate([119,726,398,187,943,486,728,305,968,754,650,536,969,305,111,225,708,806,40,969],[708,969,111,398,754,726,536,943,486,305,969,40,650,806,187,225,968,119,728,305]) --> 95

function shuffleSuccessRate(arr: number[],shuffledArr: number[]){
  // ハッシュマップを作成します。
  let hashmap: {[key: number]: number } = {};
  // shuffledArrの要素とインデックスをハッシュマップに保存します。
  for (let i = 0; i < shuffledArr.length; i++) {
    hashmap[shuffledArr[i]] = i;
  }

  let count = 0;
  // ハッシュマップの中からarr[i]を探し、その値と現在のインデックスiを比較します。
  for (let i = 0; i < arr.length; i++) {
      // 位置が変わっていたらcountに1足します。
      if (hashmap[arr[i]] != i) count++; 
  }

  // 変更した割合を％にして小数点以下は切り捨てます。
  return Math.floor(100 * count / arr.length);
}


// shuffledArr の要素を保存するハッシュマップを作成します。for 文で shuffledArr をループして、要素をキー、インデックスをバリューとして保存します。

// 次に arr をループして、ハッシュマップにある arr[i] を取得し、そのバリューが i と異なる場合をカウントします。移動した数を配列の長さで割り、100 をかけると ％ になります。小数点以下は切り捨てなので Math.floor 関数で切り捨てます。それではコードを見てみましょう。