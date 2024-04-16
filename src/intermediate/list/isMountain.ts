// Bond はクラスの文化祭で行う劇で背景を制作することになり、現在は山を作っています。各地点での山の高さの一覧 height が与えられるので、山型になっているかどうか判断する isMountain という関数を定義してください。山型の条件は以下の通りです。

// 配列のサイズが 3 以上であること
// 高さは初めは上がり続け、一度下がったら下がり続けること（例：1,2,3,4,5,3,2,1）

// 関数の入出力例
// 入力のデータ型： integer[] height
// 出力のデータ型： bool
// isMountain([1,2,3,2]) --> true
// isMountain([1,2]) --> false
// isMountain([2,1]) --> false
// isMountain([1,2,2,2,2]) --> false
// isMountain([1,2,3]) --> false
// isMountain([4,3,2,1]) --> false
// isMountain([1,2,2,2,3,2]) --> false
// isMountain([3,2,2,2,1,1]) --> false
// isMountain([10,20,30,400,500,10]) --> true
// isMountain([100,200,100,400,500,100]) --> false
// isMountain([100,200,300,200,100,300]) --> false
// isMountain([100,50,100,200,300,400]) --> false
// isMountain([53,158,477,994,994,867,797,755,744,621,616]) --> false

function isMountain(height:number[]): boolean{
  // 関数を完成させてください
  let l = height.length;
  if (l <= 0 || height[0] > height[1]) return false;

  // 最大値・最小値・インデックスの初期値
  let max = -Infinity;
  let min = Infinity;
  let i = 0;

  // 昇順が終わるまで処理を繰り返します
  while (i < l && height[i] > max) {
      max = height[i];
      i++;
  }

  // 昇順のみの配列の場合、falseを返します
  if (i === l || max == height[i]) return false;

  // 降順が終わるまで処理を繰り返します
  while (i < l && height[i] < min) {
      min = height[i];
      i++;
  }

  // 配列の末尾まで降順が続いていなかったらfalseを返します
  return i === l;
}