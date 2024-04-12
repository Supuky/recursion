// 文字列が不変オブジェクトの場合、状態を変更できないことから、一度配列に変換して状態を変更し、再度文字列に戻す処理が行われることがあります。例えば、JavaScript で文字列 ABCD の B と C を入れ替える処理を考えてみましょう。

let s = "ABCD";
 
// 配列へ
let arr = s.split('');
console.log(arr);
 
// 配列は可変オブジェクトなので、状態の変更が可能
let temp = arr[1];
arr[1] = arr[2];
arr[2] = temp;
 
console.log(arr);

// 配列を文字列に戻す
console.log(arr.join(''));

// このように扱うデータが可変性、不変性どちらを持つのか把握しておくのは、とても重要。