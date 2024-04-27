// ペアチケット
// ある学校では文化祭のときに、生徒全員に数字をランダムに配っています。そして同じ数字同士を持つペアが現れたら、テーマパークのペアチケットをプレゼントしています。同じ数字を持つ生徒が 3 人以上いたら適応外になります。生徒たちが持っている数字 numbers が与えられるので、ペアになる生徒たちの数字を返す findPairs という関数を作成してください。配列は昇順で返してください。

// 関数の入出力例
// 入力のデータ型： integer[] numbers
// 出力のデータ型： integer[]
// findPairs([10,12,13,14,15,16,16,7,7,8]) --> [7,16]
// findPairs([1,1]) --> [1]
// findPairs([1,2]) --> []
// findPairs([1,2,3,4,5,6,6,7,7,8]) --> [6,7]
// findPairs([1,3,6,3,1,4,6,4]) --> [1,3,4,6]
// findPairs([3,3,-1,-1,1,6,6,4,4]) --> [-1,3,4,6]
// findPairs([30,30,30,30,1,600,600,40,40,40]) --> [600]

function findPairs(numbers: number[]){

  // numbersの要素をキー、その数を値としてハッシュマップを作成します。
  let hashmap: {[key: number]: number} = {};
  let res = [];

  for (let i = 0; i < numbers.length; i++) {
      if (hashmap[numbers[i]] == undefined) hashmap[numbers[i]] = 1;
      else hashmap[numbers[i]]++;
  }

  // 値が 2 の時にキーを res へ push します。
  for (let key in hashmap) {
    if (hashmap[key] == 2) res.push(parseInt(key));
  }
  // ソートして返します。JavaScriptのsortは辞書順で返します。
  // 数値順にしたいときは引数に比較関数を指定します。
  return res.sort((a, b) => a - b);
}

console.log(findPairs([10,12,13,14,15,16,16,7,7,8])); // [7,16]
console.log(findPairs([1,1])); // [1]
console.log(findPairs([1,2])); // []
console.log(findPairs([1,2,3,4,5,6,6,7,7,8])); // [6,7]
console.log(findPairs([1,3,6,3,1,4,6,4])); // [1,3,4,6]
console.log(findPairs([3,3,-1,-1,1,6,6,4,4])); // [-1,3,4,6]
console.log(findPairs([30,30,30,30,1,600,600,40,40,40])); // [600]