// x回出現
// Block は野球のリーグ戦の運営者であり、26 チーム（a チームから z チームまで）の試合の組み合わせを考えています。リーグ戦では、各チームが同じ数の試合を行う必要があります。Block は、どのチームが試合を行ったかを記録しており、例えば「a チーム」と「b チーム」が試合を行った場合、「ab」と記録されます。このようにして、「aabcbcdda」のような記録が作成されることもあります。

// あなたの仕事は、与えられた文字列 teams で、全てのチームが同じ数の試合を行っているかを判定する findXTimes という関数を作成することです。文字列 teams は試合を行ったチームの名前が連続して記録されたものです。

// 関数の入出力例
// 入力のデータ型： string teams
// 出力のデータ型： bool
// findXTimes("bacddc") --> false
// findXTimes("babcddc") --> false
// findXTimes("babacddc") --> true
// findXTimes("aaabbbcccddd") --> true
// findXTimes("aaabbccdd") --> false
// findXTimes("zadbchvwxbwhdxvcza") --> true
// findXTimes("zadbchvwxbwhdxvczb") --> false
// findXTimes("zab") --> true
// findXTimes("z") --> true

function findXTimes(teams: string){
  let hashmap: {[key: string]: number} = {};
  // ハッシュマップを作成し、teamsの要素をキー、その数を値として保存します。
  for (let i = 0; i < teams.length; i++) {
      if (hashmap[teams[i]] == undefined) hashmap[teams[i]] = 1;
      else hashmap[teams[i]]++;
  }
  // hashmapの値のみを取得するにはObject.value()を使います。
  // スプレッド構文「...」を使って要素を展開し、最大値と最小値を取得します。
  // 最大値と最小値が同じならtrueです。
  return Math.max(...Object.values(hashmap)) == Math.min(...Object.values(hashmap));
}

console.log(findXTimes("bacddc")); // false
console.log(findXTimes("babcddc")); // false
console.log(findXTimes("babacddc")); // true
console.log(findXTimes("aaabbbcccddd")); // true
console.log(findXTimes("aaabbccdd")); // false
console.log(findXTimes("zadbchvwxbwhdxvcza")); // true
console.log(findXTimes("zadbchvwxbwhdxvczb")); // false
console.log(findXTimes("zab")); // true
console.log(findXTimes("z")); // true


// x回出現の解説と解答
// 最初に、チーム名ごとの試合数を数えるためのハッシュマップを作成します。このハッシュマップでは、キーがチーム名、値がそのチームの試合数です。文字列 teams を一文字ずつ走査し、各チームの試合数をハッシュマップに記録します。もし新しいチーム名が現れたら、そのチームの試合数を 1 に設定します。既にハッシュマップに存在するチーム名の場合は、試合数を 1 増やします。

// 具体的な例として、teams が "aabcbcdda" の場合、ハッシュマップは以下のようになります。

// a: 3回
// b: 2回
// c: 2回
// d: 2回
// 最後に、ハッシュマップ内の全ての値（各チームの試合数）を調べ、最大値と最小値が同じであるかどうかをチェックします。もし最大値と最小値が同じであれば、全てのチームが同じ数の試合を行っていると判断し、true を返します。もしそうでない場合は、異なる数の試合を行っていることになり、false を返します。