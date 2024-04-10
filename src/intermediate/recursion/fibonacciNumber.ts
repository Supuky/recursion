// フィボナッチ数列とは、最初の 2 つの項が 0 と 1 で、その後の項は前の 2 つの項を足し合わせることで得られる数列のことで、自然界や科学・工学分野においても様々な場面で現れる重要な数列です。


// フィボナッチ数列の n 番目の数を求める再帰プログラムは次のようになります。

function fibonacciNumber(n: number): number {
  // ベースケース
  if(n == 0) {
    return 0;
  } else if(n == 1) {
    return 1;
  }

  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(3))
console.log(fibonacciNumber(5))
console.log(fibonacciNumber(8))
console.log(fibonacciNumber(10))

// 末尾再帰を使って、n 番目のフィボナッチを返す関数を作成します。
function fibonacciNumberTailHelper(fn1: number, fn2: number, n: number){
  if(n < 1) {
    return fn1;
  }

  return fibonacciNumberTailHelper(fn2, fn1+fn2, n-1);
}

function fibonacciNumberTail(n: number){
  // 補助関数を使用し、初期値 0, 1 を追加します
  return fibonacciNumberTailHelper(0,1,n);
}

console.log(fibonacciNumberTail(6));
console.log(fibonacciNumberTail(10));


// 反復
function fibonacciNumberForLoopIteration(n: number){
  let fn1 = 0;
  let fn2 = 1;

  for (let i = 0; i < n; i++) {
      // 前の fn1 を保存し、f1 と f2 をアップデートします
      let prevFn1 = fn1; 
      fn1 = fn2;
      fn2 = prevFn1 + fn2;
  }

  return fn1;
}