// 完全数
// 与えられた自然数 n に対して、2 から n までの範囲内に存在する全ての完全数を '-' で区切って並べた文字列を返す関数 perfectNumberList を定義してください。ここで完全数とは、自分自身以外の約数を全て足した値が自分自身に等しい自然数のことです。ただし、完全数が存在しない場合は、文字列 'none' を返してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： string
// perfectNumberList(3) --> none
// perfectNumberList(6) --> 6
// perfectNumberList(28) --> 6-28
// perfectNumberList(100) --> 6-28
// perfectNumberList(496) --> 6-28-496
// perfectNumberList(1000) --> 6-28-496
// perfectNumberList(10000) --> 6-28-496-8128

function perfectNumberList(n:number): string{
  // 関数を完成させてください
  let output = "";

  for(let i = 1; i <= n; i++) {
      let sum = 0;
      for(let j = 1; j < i ; j++) {
          if(i % j === 0) sum += j;
      }
      if(i === sum) output += output === "" ? sum : `-${sum}`
  }

  return output === "" ? "none" : output;
};