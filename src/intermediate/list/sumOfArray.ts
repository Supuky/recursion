// 配列の合計値
// 整数で構成される配列が与えられるので、配列の合計値を返す sumOfArray という関数を分割統治法を用いて実装してください。

// 関数の入出力例
// 入力のデータ型： integer[] arr
// 出力のデータ型： integer

// sumOfArray([2,4,6,8,10]) --> 30
// sumOfArray([0]) --> 0
// sumOfArray([2,4,6,8,10,12]) --> 42

function sumOfArray(arr:number[]): number{
  // 関数を完成させてください
  return sumOfArrayHelper(arr, 0, arr.length - 1);
}

function sumOfArrayHelper(array: number[], start: number, end: number): number {
  if(start === end) return array[start];

  const middle = Math.floor((start + end) / 2);

  const left = sumOfArrayHelper(array, start, middle);
  const right = sumOfArrayHelper(array, middle + 1, end);

  return left + right;
};