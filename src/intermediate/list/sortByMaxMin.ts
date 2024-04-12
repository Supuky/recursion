// 特殊な並べ替え
// 整数によって構成される配列が与えられるので、最初の最大値の後に最初の最小値、2 番目の最大値の後に 2 番目の最小値、といったように値を並べ替えてから返す sortByMaxMin という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer[] arr
// 出力のデータ型： integer[]
// sortByMaxMin([6,2,3,5,8,4]) --> [8,2,6,3,5,4]
// sortByMaxMin([11,15,9,7,12]) --> [15,7,12,9,11]
// sortByMaxMin([85,69,56,61,78]) --> [85,56,78,61,69]
// sortByMaxMin([1,2,3]) --> [3,1,2]

function sortByMaxMin(arr:number[]): number[]{
  // 関数を完成させてください
  const result = [];
  const sortedArr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = sortedArr.length - 1;
  
  while(start < end) {
      result.push(sortedArr[end]);
      result.push(sortedArr[start]);
      start++;
      end--;
  };

  if(start === end) {
      result.push(sortedArr[start]);
  }

  return result;
}


// 昇順: sort((a, b) => a - b)
// 降順: sort((a, b) => b - a)