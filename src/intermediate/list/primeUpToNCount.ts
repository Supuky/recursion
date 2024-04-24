// 素数の個数
// Eric はとある組織に囚われの身となっており、ある条件を満たせば自由になれる約束をしていました。それは、整数 n が与えられたときに n 未満に何個素数があるか正確に答えることでした。整数 n が与えられるので、n 未満に含まれる素数の個数を返す、primesUpToNCount という関数を定義してください。

// 関数の入出力例
// 入力のデータ型： integer n
// 出力のデータ型： integer
// primesUpToNCount(2) --> 0
// primesUpToNCount(3) --> 1
// primesUpToNCount(5) --> 2
// primesUpToNCount(13) --> 5
// primesUpToNCount(18) --> 7
// primesUpToNCount(89) --> 23
// primesUpToNCount(97) --> 24
// primesUpToNCount(100) --> 25
// primesUpToNCount(367) --> 72
// primesUpToNCount(673) --> 121
// primesUpToNCount(1000) --> 168
// primesUpToNCount(3406) --> 478
// primesUpToNCount(20034) --> 2266

function primesUpToNCount(n: number) {
  let primes = [];
  for(let i = 0; i < n; i++) primes[i] = true;

  // 0と1を除去するため予め count には2を入れておきます。
  let count = 2;

  for(let i = 2; i * i < n; i++){
      let p = 2;
      while(i*p < n){
          // 約数を持っている数をカウントします。
          if (primes[i*p]) count++;
          primes[i*p] = false;
          p++;
      }
  }

  return primes.length - count;
}