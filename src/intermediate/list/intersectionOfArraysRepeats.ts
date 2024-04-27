// 配列の重複（区別あり）
// easy
// 整数で構成される配列 num1 と num2 が与えられるので、両方の配列に表示されている要素を小さい順で配列で返す、intersectionOfArraysRepeats という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] intList1, integer[] intList2
// 出力のデータ型： integer[]
// intersectionOfArraysRepeats([3,2,1],[3,2,1]) --> [1,2,3]
// intersectionOfArraysRepeats([1,1,1],[1,2,3,2,1]) --> [1,1]
// intersectionOfArraysRepeats([3,2,2,2,1,10,10],[3,2,10,10,10]) --> [2,3,10,10]
// intersectionOfArraysRepeats([2,19,11,2,6,8],[10,23,5,8,19]) --> [8,19]
// intersectionOfArraysRepeats([4,22,100,88,6,8],[1,2,3]) --> []
// intersectionOfArraysRepeats([-1,-2,-1,-1],[-1,-1,-2,-2]) --> [-2,-1,-1]
// intersectionOfArraysRepeats([1,2,2,1],[2,2,2,1]) --> [1,2,2]
// intersectionOfArraysRepeats([4,9,5],[9,4,9,8,4]) --> [4,9]

function intersectionOfArraysRepeats(intList1:number[], intList2:number[]): number[]{
  // 関数を完成させてください
  const hashmap: {[key: number]: number} = {};
  const result: number[] = [];

  for(let i = 0; i < intList1.length; i++) {
      if(hashmap[intList1[i]] === undefined) hashmap[intList1[i]] = 1;
      else hashmap[intList1[i]] += 1;
  }

  for(let i = 0; i < intList2.length; i++) {
      if(hashmap[intList2[i]] > 0){
          result.push(intList2[i]);
          hashmap[intList2[i]] -= 1;
      }
  }

  return result.sort((a, b) => a - b);
}
