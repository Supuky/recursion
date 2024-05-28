function isPalindrome(str: string) {
  // 文字列を配列にする
  const arr = str.split(" ");
  const [str1, str2] = arr;

  // 文字列を小文字に変換し、文字の配列に変換します
  var arr1 = str1.toLowerCase().split('');
  var arr2 = str2.toLowerCase().split('');

  // 配列をソートします
  arr1.sort();
  arr2.sort();

  // ソートされた配列を文字列に戻します
  var sortedStr1 = arr1.join('');
  var sortedStr2 = arr2.join('');

  // 2つの文字列が等しいかどうかを確認します
  return sortedStr1 === sortedStr2;
};

console.log(isPalindrome("dog god"));
console.log(isPalindrome("tag agt"));
console.log(isPalindrome("pineapple apple"));

function pair(array: number[], target: number) {
  // {value: index}の形で作る
  const hashmap: { [key: number]: number } = {};

  // ハッシュマップ作成 
  for(let i = 0; i < array.length; i++) {
    const curr = array[i];
    if(!hashmap[curr]) hashmap[curr] = i;
  };

  for(let i = 0; i < array.length; i++) {
    // diff: targetから現在の値を引いた数
    const diff = target - array[i]
    // 現在のインデックスではない時とハッシュマップにdiffが存在する時
    if(i !== hashmap[diff] && hashmap[diff]) {
      return [array[i], array[hashmap[diff]]];
    }
  }
}

console.log(pair([2, 6, 8, 3, 5, 9], 10));