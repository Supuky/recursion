// 選択ソート
// 選択ソート（selection sort）は、配列の未ソートの部分から最小の要素を選んで、現在の位置の要素と交換することを繰り返すだけの、とてもシンプルなソートアルゴリズムです。この方法は in-place ソートと呼ばれています。つまり、要素をソートするために追加のスペースを必要とせず、元の配列の中でソートが行われるということです。初心者でも理解しやすいアルゴリズムです。

function selectionSort(list: number[]) {
  let n = list.length;

  for (let i = 0; i < n; i++){
      // i 番目の値を暫定の最小値とします
      let minIndex = i;
      // i 番目より後ろから最小値を探します
      for (let j = i + 1; j < n; j++){
          // 暫定の最小値以下なら最小値を更新
          if (list[j] <= list[minIndex]){
              minIndex = j;
          }
      }    
      // 最小値と先頭を in-place で入れ替え
      let temp: number = list[i];
      list[i] = list[minIndex];
      list[minIndex] = temp;
  }
}

let numArr: number[] = [34,4546,32,3,2,8,6,76,56,45,34,566,1];

// 昇順に並び替え
selectionSort(numArr);

// ソートされた配列
console.log(arr);

// 選択ソートでは、まず 1 つのデータの位置を確定するために、n-1 回の比較が必要です。これによって対象となるデータが 1 つ減っているので、n-2 回の比較が必要になります。これを何度も繰り返していくので、計算量は次のようになります。

// 選択ソートは、たとえ不要な場合でも、常に配列全体をチェックするアルゴリズムです。したがって、最初からリストのほとんどがソートされている場合、余分な計算量がかかってしまいます。