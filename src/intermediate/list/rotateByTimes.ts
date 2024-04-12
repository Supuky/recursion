// 部屋替え
// Glover は定期的に部屋替えを行うルールがあるシェアハウスに住んでいます。くじ引きで数字をランダムに引いて、その数だけ住人が部屋をずらす仕組みです。例えば、数字 2 を引いたとき、部屋番号 1 に住んでいる人は 3 に移動します。住人たちの ID をまとめた ids と、くじ引きで引いた自然数 n が与えられるので、住人の位置をずらさせた配列を返す、rotateByTimes という関数を作成してください。

// 関数の入出力例
// 入力のデータ型： integer[] ids, integer n
// 出力のデータ型： integer[]
// rotateByTimes([1,2,3,4,5],2) --> [4,5,1,2,3]
// rotateByTimes([1,2,3,4,5],5) --> [1,2,3,4,5]
// rotateByTimes([10,12,3,4,5],3) --> [3,4,5,10,12]
// rotateByTimes([4,23,104,435,5002,3],26) --> [5002,3,4,23,104,435]
// rotateByTimes([4,23,104,435,5002,3],0) --> [4,23,104,435,5002,3]
// rotateByTimes([4,23,104,435,5002,3],1) --> [3,4,23,104,435,5002]
// rotateByTimes([4,23,104,435,5002,3],2) --> [5002,3,4,23,104,435]
// rotateByTimes([2,3],1) --> [3,2]

function rotateByTimes(ids:number[], n:number): number[]{
  // 関数を完成させてください
  const length = ids.length;
  const number = n % length;
  if(number === 0) return ids;

  const result = [...ids];

  for(let i = 0; i < length; i++) {
      result[(i + n) % length] = ids[i]; 
  };

  return result;
};

// function rotateByTimes(ids,n){
//   // 関数を完成させてください
//   for(let i = 0; i < n; i++) ids.unshift(ids.pop());
//   return ids
// }

// function rotateByTimes(ids,n){
//   // 関数を完成させてください
//   if (n <= 0 || ids.length === 0) {
//   return ids;
// }

// // 回転数を配列の長さで割った余りを求める
// const rotations = n % ids.length;

// // 配列を分割して回転させ、結合する
// const rotatedPart = ids.slice(-rotations);
// const remainingPart = ids.slice(0, -rotations);
// return rotatedPart.concat(remainingPart);
// }