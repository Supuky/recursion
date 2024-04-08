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