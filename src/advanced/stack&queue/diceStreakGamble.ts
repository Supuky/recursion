// 賭けサイコロゲーム
// easy
// Mike は友達 3 人とお金を賭けながらサイコロゲームで遊んでいます。このゲームでは 36 面で構成されているサイコロを n 回振ることができサイコロの目が出ると$4獲得し、蓄積していくことができます。ただし、出た目が前に自分が出した目の数字よりも低い場合、バーストし、今までの蓄積は全て失われます。バーストは $4 獲得の前に起こります。

// プレイヤーのサイコロ目を表す配列 player1、player2、player3、player4 が与えられるので、勝利プレイヤー、その金額、勝利を決定した連続部分配列を文字列として返す、diceStreakGamble という関数を作成してください。ただし、最終的に獲得した金額が同じ場合は最初にサイコロを投げた人を優先してください。このゲームではプレイヤー1、2、3、4の順にサイコロを投げます。

// 関数の入出力例

// 入力のデータ型： integer[] player1, integer[] player2, integer[] player3, integer[] player4

// 出力のデータ型： string

// diceStreakGamble([1,2,3],[3,4,2],[4,2,4],[6,16,4]) --> Winner: Player 1 won $12 by rolling [1,2,3]

// diceStreakGamble([1,2,3,-1,4,5],[3,4,2],[4,2,4],[6,16,4]) --> Winner: Player 1 won $12 by rolling [-1,4,5]

// diceStreakGamble([4,3,2,1],[4,3,2,1],[4,3,2,1],[4,3,2,1]) --> Winner: Player 1 won $4 by rolling [1]

// diceStreakGamble([1,2,3],[3,4,2],[4,2,4],[6,16,26]) --> Winner: Player 1 won $12 by rolling [1,2,3]

// diceStreakGamble([1,2,1],[3,4,2],[4,2,4],[6,16,26]) --> Winner: Player 4 won $12 by rolling [6,16,26]

// diceStreakGamble([5,19,19,20],[23,23,32,5],[20,23,30,23],[12,20,24,29]) --> Winner: Player 1 won $16 by rolling [5,19,19,20]

// diceStreakGamble([10,9,9,9,1,4],[10,9,9,9,1,4],[0,1,3,6,2,8],[1,2,2,1,0,1]) --> Winner: Player 1 won $8 by rolling [1,4]

// diceStreakGamble([2,45,56,6,4,10,34,20,3,4],[20,45,56,6,4,3,5,3,2,20],[3,4,20,20,21,30,33,35,35,36],[3,4,20,45,56,6,4,3,5,9]) --> Winner: Player 3 won $40 by rolling [3,4,20,20,21,30,33,35,35,36]

function diceStreakGamble(player1: number[],player2: number[],player3: number[],player4: number[]){
  const scores = [
      consecutiveWalk(player1),
      consecutiveWalk(player2),
      consecutiveWalk(player3),
      consecutiveWalk(player4)
  ];

  let maxScore = scores[0].length;
  let index = 0;

  for(let i = 0; i < scores.length; i++) {
      if(maxScore < scores[i].length) {
          maxScore = scores[i].length;
          index = i;
      }
  }

  return `Winner: Player ${index+1} won $${maxScore * 4} by rolling [${scores[index]}]`; 
}

function consecutiveWalk (arr: number[]) {
  let stack = [];
  stack.push(arr[0]);

  for(let i = 1; i < arr.length; i++) {
      if (stack[stack.length - 1] > arr[i]) {
          let max = 0;
          while (stack.pop() != undefined);
      }
      stack.push(arr[i]);
  }

  return stack;
}