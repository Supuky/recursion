// パスカルの三角形
// 図のように三角数の数列があります。天才 Pascal は小学生の時にこの並びを見て規則的な発見をしました。自然数 x が与えられるので、x 番目の三角形に含まれるドットの数を返す、numberOfDots という関数を再帰を使って作成してください。

// 関数の入出力例
// 入力のデータ型： integer x
// 出力のデータ型： integer
// numberOfDots(2) --> 3
// numberOfDots(4) --> 10
// numberOfDots(5) --> 15
// numberOfDots(10) --> 55

// 1番目 1ドット
// 2番目 3ドット
// 3番目 6ドット
// 4番目 10ドット

const numberOfDots = (num: number): number => {
  if(num === 1) return 1;

  return numberOfDots(num - 1) + num;
};

console.log(numberOfDots(2)); 
console.log(numberOfDots(4)); 
console.log(numberOfDots(5)); 
console.log(numberOfDots(10)); 