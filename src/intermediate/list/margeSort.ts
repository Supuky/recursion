// 例えば、配列 [9,4,3,7,8,0,2,1] をマージソートでソートする場合、最初にこの配列を半分に分割します。[9,4,3,7] と [8,0,2,1] に分割されます。それぞれの配列を更に半分に分割し、[9,4]、[3,7]、[8,0]、[2,1] に分割されます。これを繰り返し、配列の要素が単一の要素になるまで分割します。

// その後、分割した配列を統合する作業を行います。この作業は、マージソートアルゴリズムの中核となる部分です。分割した配列がソート済みであるという前提を利用し、効率的に結合を行うことができます。具体的には、2 つの配列の先頭要素を比較し、小さい方から順に結合していきます。

// 単一の要素になるまで分割した後、次の作業はそれらを結合することです。このように、マージソートは、すでにソート済みの 2 つの配列を合併（マージ）するアルゴリズムが基礎になっています。ここでは、それぞれソート済みということを利用し、計算効率が O(n1+n2) となるようなマージのアルゴリズムにすることが重要です。

// mergeSort 関数は配列 A を受け取り、以下のような処理を行います。

// 配列 A が 1 つの要素しか持たないとき、すでに整列されているので、そのまま A を返します。
// そうでない場合、配列Aを2つの小さな配列（leftArray と rightArray）に分割します。
// それぞれの小さな配列（leftArrayとrightArray）を、マージソート関数を使って整列します。このプロセスは、配列が 1 つの要素になるまで繰り返し行われます。
// leftArrayとrightArrayが整列された後、これら 2 つの配列を 1 つの配列（combinedArray）に結合します。結合するには、以下の手順があります。
// leftArray と rightArray の最初の要素を比較して、どちらが小さいかを確認します。
// 小さい方の要素を combinedArray に追加します。
// a と b の手順を、leftArray と rightArray の全ての要素が combinedArray に入るまで繰り返します。

//merge sort
function mergeSort(arr: number[]){
  return mergeSortHelper(arr, 0, arr.length - 1);
}

function mergeSortHelper(arr: number[], start: number, end: number): number[] {
  // 配列が 1 つになるまで再帰的に分割していきます
  // 1 つになったらマージ作業へ移ります
  if(start === end) return [arr[start]];

  // 配列が 2 つ以上の時には leftArray と rightArray に分割し続けます
  let middle = Math.floor((start+end)/2);
  let leftArr = mergeSortHelper(arr, start, middle);
  let rightArr = mergeSortHelper(arr, middle+1, end);

  // leftArr と rightArr それぞれの最後に無限大を入れておくことで、ソートが完了するまで比較し続けることができます
  leftArr.push(Infinity)
  rightArr.push(Infinity)

  let l = leftArr.length + rightArr.length - 2;
  let li = 0;
  let ri = 0;
  
  // 右と左がソートされた後、結合されます
  let merged = [];

  // leftarray と rightarray を比較して、どちらが先に merged に入るか決めます
  while(li+ri < l){
      // console.log("leftArr", leftArr)
      // console.log("rightArr", rightArr)
      if(leftArr[li] <= rightArr[ri]){
          merged.push(leftArr[li]);
          li++;
      }
      else{
          merged.push(rightArr[ri]);
          ri++;
      }
  }
 
  // leftArray と rightArray の全ての値が merged に入るまで繰り返します。
  return merged;
}

// let arr1 = [34,4546,32,3,2,8,6,76,56,45,34,566,1];
let arr1 = [3, 2, 1, 4];
console.log(arr1);
console.log(mergeSort(arr1));

// マージソートの計算量
// マージソートは空間計算量 O(n)、時間計算量 O(nlogn) になります。挿入ソートと比較しても圧倒的に性能が向上していることがわかるでしょう。以前、再帰で学習した n が 2 で何回割れるかを返す divideBy2Count(n) では、毎回 n を半分ずつ分割していました。この問題では、O(logn) という時間計算量になっていました。

// 同様に、マージソートでは再帰で各レベルのリストが半分に分割されるため、lognの深さで分割され、結果として再帰関数が nlogn回呼ばれることになります。つまり、総計算量はO(nlogn) になります。

