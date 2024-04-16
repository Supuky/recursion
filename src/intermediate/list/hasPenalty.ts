// シャトルラン
// E 高校の野球部は定期的に 20 メートルシャトルランを行なっており、1 日に複数回記録を取っており、1 回でも記録が減少した選手にペナルティを与える部則がありました。シャトルランの記録 records が与えられるので、ペナルティが与えられるか判定する、hasPenalty という関数を定義してください。シャトルランは本来は 247 までしか存在しませんが、今回はいかなる自然数も対象とします。

// 関数の入出力例
// hasPenalty([1,2,3,4]) --> false
// hasPenalty([4,3,2,1]) --> true
// hasPenalty([4,3,3,2,1]) --> true
// hasPenalty([150,130,130,82,51]) --> true
// hasPenalty([100,200,200,200,300,400]) --> false
// hasPenalty([80,80,80,80]) --> false
// hasPenalty([80,90,60,70,80]) --> true
// hasPenalty([150,140,58,67,1100]) --> true
// hasPenalty([1,28,48,85,3]) --> true

function hasPenalty(records:number[]): boolean{
  // 関数を完成させてください
  for(let i = 1; i < records.length; i++) {
    if(records[i - 1] > records[i]) return true;
  }

  return false;
}

