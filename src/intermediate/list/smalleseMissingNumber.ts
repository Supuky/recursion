// 欠番
// 0 ~ M-1 の範囲でユニークな要素を持つ N 個のソートされた配列（M > N）が与えられるので、その中で最も小さい欠番を返す smallestMissingNumber という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer[] arr
// 出力のデータ型： integer
// smallestMissingNumber([0,2,3,4,6]) --> 1
// smallestMissingNumber([0,1,2,3,5]) --> 4
// smallestMissingNumber([0,1,2,3,4]) --> 5

function smallestMissingNumber(arr:number[]): number{
  // 関数を完成させてください
  if(arr.length === 0) return 0;
  return smallestMissingNumberHelper(arr, 0, arr.length - 1);
}

function smallestMissingNumberHelper(arr: number[], start: number, end: number){
  if(start === end && start !== arr[start]) return start;
  else if(start === end) return arr.length;

  const middle = Math.floor((start + end) / 2);

  if(middle === arr[middle]) return smallestMissingNumberHelper(arr, middle + 1, end);
  else return smallestMissingNumberHelper(arr, start, middle);
}