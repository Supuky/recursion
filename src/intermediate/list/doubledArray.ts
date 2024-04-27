// 配列の要素を2倍
// 整数で構成される配列 arr が与えられるので、配列の各要素を 2 倍にして返す doubledArray という関数を分割統治法を用いて実装してください。

// 関数の入出力例
// 入力のデータ型： integer[] arr
// 出力のデータ型： integer[]
// doubledArray([1,2,3,4,5]) --> [2,4,6,8,10]
// doubledArray([5,4,3,2,1]) --> [10,8,6,4,2]
// doubledArray([1,1,2,2,3,3]) --> [2,2,4,4,6,6]

function doubledArray(arr:number[]): number[]{
  // 関数を完成させてください
  return doubledArrayHelper(arr, 0, arr.length - 1);
}

function doubledArrayHelper(arr: number[], start: number, end: number): number[] {
  if(start === end) return [arr[start] * 2];

  const middle = Math.floor((start + end) / 2);

  const left = doubledArrayHelper(arr, start, middle);
  const right = doubledArrayHelper(arr, middle + 1, end);

  return [...left, ...right];
}

// function doubledArrayHelper(arr:number[], start: number, end: number): number[]{
//   if(start === end) {
//       arr[start] *= 2;
//       return arr;
//   }

//   const middle = Math.floor((start + end) / 2);

//   doubledArrayHelper(arr, start, middle);
//   doubledArrayHelper(arr, middle + 1, end);

//   return arr;
// }