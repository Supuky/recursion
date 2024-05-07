// サイズkの部分配列の最小値
// medium
// 配列 intArr と整数 k が与えられるので、サイズ k の連続する部分配列の最小値を返す、minWindowArrK を作成してください。


// 関数の入出力例

// 入力のデータ型： integer[] intArr, integer k

// 出力のデータ型： integer[]

// minWindowArrK([2,3,1,1,12,3,10],1) --> [2,3,1,1,12,3,10]

// minWindowArrK([2,3,1,1,12,3,10],3) --> [1,1,1,1,3]

// minWindowArrK([2,3,1,1,12,3,10],4) --> [1,1,1,1]

// minWindowArrK([3,9,10,2,4,5],3) --> [3,2,2,2]

// minWindowArrK([3,9,10,2,4,5],5) --> [2,2]

// minWindowArrK([30,50,60,20,30,64,80],3) --> [30,20,20,20,30]

// minWindowArrK([30,50,60,20,30,64,80],2) --> [30,50,20,20,30,64]

// minWindowArrK([24,5,67,60,24,64,23,536,345],3) --> [5,5,24,24,23,23,23]

// サイズkの部分配列の最小値の解説と解答
// 上級コース / データ構造入門 / 両端キュー(3) にある応用問題の最小値バージョンです。スライディングウィンドウを使うと O(n) で解くことができます。配列 intArr が [3,9,10,2,4,5], 整数 k が 3 の場合を例に説明します。両端キュー deque と最小値を保存するための配列 results を初期化します。deque に入るのはインデックス、results に入るのは配列の要素と言う点に注意しましょう。まずは配列 intArr の先頭から K 個までの最初のウィンドウを考えます。for 文でサイズ 3 までループして要素のインデックスを deque に入れていきます。

// deque が空の時、最初の要素 3 (index = 0) のインデックスを deque に入れます。
// deque [0]

// 次の要素 9 (index = 1) は、3 (index = 0) よりも大きいので deque に 9 (index = 1) を追加します。
// deque[0, 1]

// 次の要素 10 (index = 2) は、9 (index = 1) よりも大きいので deque に 10 (index = 2) を追加します。
// deque[0, 1, 2]

// 最初のウィンドウ[0～2] の要素を入れた deque ができました。配列の並びによっては deque の要素はサイズ k と同じにならない場合があります。
// それではウィンドウを配列の右方向へとスライディングしていきます。for 文は k からスタートします。

// deque の先頭は最小値となっているので、対応する要素 3 (index = 0) を intArr から取得し results に push します。
// results[3]

// dequeの先頭がウィンドウから左にはみ出るので、先頭を削除します。
// deque[1,2]

// 次の要素 2 (index = 3) は、10 (index = 2) よりも小さいので 10 (index = 2) を pop します。
// deque[1]

// さらに 9 (index = 1) よりも小さいので、9 (index = 1) を pop します。
// deque[]

// 2 (index = 3) を deque に追加します。
// deque[3]

// results に intArr の要素 2 (index = 3) を追加します。
// results[3, 2]

// ウィンドウが右に 1 つずれて、[1～3] になりました。

// 次の要素 4 (index = 4) は、2 (index = 3) よりも大きいので deque に 4 (index = 4) を追加します。
// deque[3, 4]

// results に deque の先頭 1 (index = 3) を追加します。
// results[3, 2, 2]

// ウィンドウが右に 1 つずれて、[2～4] になりました。

// 次の要素 5 (index = 5) は、4 (index = 4) よりも大きいので deque に 5 (index = 5) を追加します。
// deque[3, 4, 5]

// ウィンドウが右端まで来たのでループを終了し、最後のウィンドウの分を results に追加します。
// results[3, 2, 2, 2]

// results を返し終了です。

function minWindowArrK(intArr:number[], k:number): number[]{
  // 関数を完成させてください
  let deque = [];
  let results = [];

  // サイズKのウィンドウ
  for(let i = 0; i < k; i++){
      // 新しい値とdequeの最後尾の値を比較して、新しい値より大きい値は全て削除
      while(deque.length !== 0 && intArr[deque[deque.length-1]] >= intArr[i]){
          deque.pop();
      }
      // 新しい値をdequeに入れる
      deque.push(i);
  }

  // Kからスタートし、残りの要素をウィンドウへ入れる
  for(let i = k; i < intArr.length; i++){
      // 先頭の値をresultsにpush 先頭はサイズkのウィンドウの中で最小値
      results.push(intArr[deque[0]]);

      // ウィンドウの左端からはみ出た要素は取り除く、shift()は配列の先頭を削除
      while(deque[0] !== null && deque[0] <= i-k) deque.shift();

      // 新しい値とdequeの最後尾を比較 新しい値より大きい値はdequeからpop
      while(deque[deque.length-1] !== null && intArr[deque[deque.length-1]] >= intArr[i]) deque.pop();
      // 新しい値をdequeに入れる
      deque.push(i);
  }

  // 最後のウィンドウの分の最小値をresultsに追加
  results.push(intArr[deque[0]]);

  return results;
}