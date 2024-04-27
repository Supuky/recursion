// ピーク要素
// 整数で構成される配列が与えられるので、その中のピークとなる要素を返す findPeak という関数を作成してください。 ピーク要素とは、隣接する要素と値が等しいかそれ以上の要素のことであり、最初と最後の要素の場合は、1 つの隣接要素のみを考慮する必要があります。 ピーク要素が複数ある場合は、O(
// log
// n
// ) 時間で実行されるように、中央の要素が隣接するどの要素よりも小さくない場合は、中央の要素をそのまま返し、 もし真ん中の要素が左隣の要素より小さければ、左側に必ずピーク要素が存在することになるので常に左半分の配列から真ん中の要素を起点にピーク要素を探すようにしてください。

// 同じように真ん中の要素が右隣の要素より小さければ、常に右半分の配列から真ん中の要素を起点にピーク要素を探すようにしてください。 真ん中の要素が両隣の要素より小さければ、最初に見つかる要素をピーク要素として返してください。

// 関数の入出力例
// 入力のデータ型： integer[] arr
// 出力のデータ型： integer
// findPeak([4,5,10,2,7,5]) --> 10
// findPeak([8,10,11,14,18]) --> 18
// findPeak([20,12,8,5,9,1]) --> 20
// findPeak([1]) --> 1
// findPeak([1,-5,2]) --> 1
// findPeak([1,1,1]) --> 1
// findPeak([1,-5,-7]) --> 1
// findPeak([1,2,3]) --> 3
// findPeak([4,6,5,10,2,7,5,3]) --> 10
// findPeak([4,6,5,4,2,7,5,3]) --> 6
// findPeak([2,4,5,12,12,7,8,14]) --> 12

// 2 つの特殊なケースに注意する必要があります。配列が降順にソートされている場合、そのピーク要素は最初の要素となり、配列が昇順でソートされている場合、ピーク要素は最後の要素となります。

function findPeak(arr:number[]): number{
  // 関数を完成させてください
  // ピーク要素とは、隣接する要素と値が等しいかそれ以上の要素
  // 最初と最後の要素の場合は、1 つの隣接要素のみを考慮する
  // ピーク要素が複数ある場合は、O(logn) 時間で実行されるようにする

      // ケース1 左 < 中央 > 右のとき、中央の要素をそのまま返す。

      // ケース2 左 > 中央 > 右のとき、左側に必ずピーク要素が存在することになるので
      // 常に左半分の配列から真ん中の要素を起点にピーク要素を探す

      // ケース3 左 < 中央 < 右のとき、右側に必ずピーク要素が存在することになるので
      // 常に右半分の配列から真ん中の要素を起点にピーク要素を探す

      // ケース4 左 > 中央 < 右のとき、最初に見つかる要素をピーク要素として返す
  
  return findPeakOfHelper(arr, 0, arr.length - 1);
}

function findPeakOfHelper(arr: number[], start: number, end: number): number {
  if (start === end) return arr[start];

  const midIndex: number = Math.floor((start + end) / 2);
  if (midIndex === 0) return Math.max(arr[midIndex], arr[midIndex + 1]);
  if (midIndex === arr.length - 1) return Math.max(arr[midIndex], arr[midIndex - 1]);

  if (arr[midIndex] >= arr[midIndex - 1] && arr[midIndex] >= arr[midIndex + 1]) {
      // ケース1 
      return arr[midIndex];
  } else if (arr[midIndex] < arr[midIndex - 1] && arr[midIndex] < arr[midIndex + 1]) {
      // ケース4
      return findPeakOfHelper(arr, start, midIndex - 1);
  } else if (arr[midIndex] < arr[midIndex - 1]) {
      // ケース2 
      return findPeakOfHelper(arr, start, midIndex - 1);
  } else if (arr[midIndex] < arr[midIndex + 1]) {
      // ケース3
      return findPeakOfHelper(arr, midIndex + 1, end);
  }
}