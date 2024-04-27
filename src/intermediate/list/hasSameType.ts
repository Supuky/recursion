// マッチングアプリ
// Redd はマッチングアプリを開発しています。ユーザーの属性をアルファベットで記録しており、アルファベットの並ぶパターンが同じユーザーは相性が良いと判定しています。ユーザー1 の属性 user1、ユーザー2 の属性 user2 が与えられるので、この 2 つが同じパターンをしているかどうか判定する、hasSameType という関数を定義してください。

// 関数の入出力例
// 入力のデータ型： string user1, string user2
// 出力のデータ型： bool
// hasSameType("aabb","yyza") --> false
// hasSameType("aappl","bbtte") --> true
// hasSameType("aappl","bbttb") --> false
// hasSameType("aabb","abab") --> false
// hasSameType("aappl","bktte") --> false
// hasSameType("aaapppl","bbbttke") --> false
// hasSameType("abcd","tso") --> false
// hasSameType("abcd","jklm") --> tru
// hasSameType("aaabbccdddaa","jjjddkkpppjj") --> true
// hasSameType("aaabbccdddaa","jjjddkkpppjd") --> false

function hasSameType(user1: string,user2: string){
  // 文字列の長さが違う場合を最初に除きます。
  if (user1.length != user2.length) return false;
  // ハッシュマップを作成します
  let hashmap: {[key: string]: string} = {};

  let res = '';

  for (let i = 0; i < user1.length; i++) {
      // Object.values() メソッドは、指定されたオブジェクトが持つ列挙可能なプロパティの値を、 for...in ループで提供される場合と同じ順序で配列にして返します。

      // includes() メソッドは、特定の要素が配列に含まれているかどうかを true または false で返します。

      // user1,user2それぞれのi番目の文字が、どちらもハッシュマップにまだなかったら保存します。        
      if (hashmap[user1[i]] == undefined && !Object.values(hashmap).includes(user2[i])) hashmap[user1[i]] = user2[i];

      // ハッシュマップに存在したらresに対応する値を追加します。
      if (hashmap[user1[i]] != undefined) res += hashmap[user1[i]]; 
  }
  // できたresとuser2が同じ文字列ならtrueです。
  return res == user2;
}

console.log(hasSameType("aabb","yyza")); // false
console.log(hasSameType("aappl","bbtte")); // true
console.log(hasSameType("aappl","bbttb")); // false
console.log(hasSameType("aappl","bktte")); // false
console.log(hasSameType("aaapppl","bbbttke")); // false
console.log(hasSameType("abcd","tso")); // false
console.log(hasSameType("abcd","jklm")); // true
console.log(hasSameType("aaabbccdddaa","jjjddkkpppjj")); // true
console.log(hasSameType("aaabbccdddaa","jjjddkkpppjd")); // false

// マッチングアプリの解説と解答
// user1 の文字をキー、user2 の文字を値としてハッシュマップに保存します。user1 = "aappl", user2 = "bbttb" のケースで説明します。user1, user2 それぞれの文字列について、同じインデックスの文字を取り出します。

// i = 0 の時
// user1[0] = 'a'
// user2[0] = 'b'
// ハッシュマップに { a: 'b'} と保存します。
// hashmap = { a: 'b'}
// ハッシュマップに user1[0] = 'a' があるので、対応する値つまり 'b' を比較用の変数 res に追加します。
// res = 'b';

// i = 1 の時
// user1[1] = 'a'
// user2[1] = 'b'
// ハッシュマップに {'a':'b'} はすでに存在するのでハッシュマップはそのまま。
// hashmap = { a: 'b'}
// ハッシュマップにキー 'a' があるので、対応する値つまり 'b' を変数 res に追加します。
// res = 'bb'

// i = 2 の時
// user1[2] = 'p'
// user2[2] = 't'
// ハッシュマップに { a: 'b', p: 't'} と保存されます。
// hashmap = { a: 'b', p: 't'}
// ハッシュマップにキー 'p' があるので、対応する値つまり 't' を res に追加します。
// res = 'bbt'

// i = 3 の時
// user1[3] = 'p'
// user2[3] = 't'
// ハッシュマップに {p: 't'} は存在するのでそのまま。
// hashmap = { a: 'b', p: 't'}
// キー 'p' があるので、対応する値つまり 't' を res に追加します。
// res = 'bbtt'

// i = 4 の時
// user1[4] = 'l'
// user2[4] = 'b'
// ハッシュマップにキー l はありませんが、値に 'b' があるのでハッシュマップは何もしません。
// hashmap = { a: 'b', p: 't'}
// ハッシュマップにキー 'l' はないのでそのまま。
// res = 'bbtt'
// 最後に user2 と res を比較し、同じ文字列ができていたら true です。 