// 動的計画法
// このように、キャッシュを使うことによって再帰的な問題を解決する方法を動的計画法（Dynamic Programming: DP）と呼びます。動的計画法は、複雑な問題を扱いやすい部分問題として分割し、重複する部分問題の不必要な計算を避けることによって効率化を図るという手法です。


// 動的計画法を実装する方法として、
// メモ化
// タビュレーション
// の 2 種類があります。

// タビュレーション
// タビュレーションとは、動的計画法において、過去に解いた部分問題の結果を表に格納して問題を解く手法です。この手法では、基本ケースから始めて目的の結果に至るまで、ボトムアップ方式を用います。以前に解いた部分問題の結果を保存するテーブルを作成し、ループを使って、ベースケースから目的の結果までテーブルを埋めていきます。タビュレーションは、再帰的な関数呼び出しを回避し、アルゴリズムの時間計算量を低減することを目的としています。

// 木構造の結果を下から上にキャッシュする方法をタビュレーションと呼びます
function tabulationFib(n: number){
  // これはキャッシュであり、計算済みのフィボナッチ数をすべて保存します
  // 全てを 0 に設定します
  let cache = [];
  for(let i = 0; i <= n; i++) {
    cache.push(-1);
  }
  console.log(cache);
  // fib0 は 0、fib1 は 1 であり、他のすべての数は fib(n) = fib(n-1) + fib(n-2) を使って求めることができます
  cache[0] = 0;
  cache[1] = 1;

  // 反復を使って全ての数を求めます
  for (let i = 2; i <= n; i++){
      cache[i] = cache[i-1] + cache[i-2];
  }

  console.log(cache);
  
  // n 番目のフィボナッチを返します
  return cache[n];
}

// console.log(tabulationFib(50));
console.log(tabulationFib(20));


// メモ化
// 一方、元の問題から始めて、サブ問題を順に解いていき、それぞれのサブ問題を解きながら、キャッシュやルックアップテーブルに解を保存していく方法もあります。このような方法はメモ化とも呼ばれ、トップ（元の問題）から始めて下に向かうので、「トップダウン」のアプローチとして知られています。

// メモ化を使用する再帰的関数が呼び出されると、まず、現在の部分問題の解がすでにキャッシュに格納されているかどうかを確認します。もしそうであれば、関数は単にキャッシュされた解を返します。そうでない場合、関数は再帰的な式を用いて解を計算し、キャッシュに保存してから返します。これにより、この関数は同じ部分問題の解を何度も再計算する必要がなくなり、アルゴリズムの効率を大幅に向上させることができます。


// 以下のコードでは、キャッシュを使用して、下位問題の解を格納することによって計算を行います。まず、現在の部分問題（n 番目のフィボナッチ数）の解がすでに計算されてキャッシュに格納されているかどうかをチェックします。既に計算されている場合、単にキャッシュから値を返します。キャッシュにない場合は n-1 と n-2 を引数に自分自身を再帰的に呼び出して計算し、その結果を将来の参照用にキャッシュに保存します。

// メモ化は、木構造の上から下へと続くアルゴリズムでのキャッシングです
// n から始まり、n-1、n-2、n-3 と下に向かって計算していきます
function memoizationFib(totalFibNumbers: number){
  // キャッシュ内にすでに計算したフィボナッチ数をすべて保存します
  let cache: any[] = [];
  for(let i = 0; i <= totalFibNumbers; i++) {
      cache.push(null);
  }

  // ローカル関数を用いてキャッシュを更新していきます
  function innerMemoizationFib(n: number){
      console.log(cache);

      // キャッシュに値が保存されていない時は再帰処理
      if (cache[n] == null){
          if (n == 0){
              cache[n] = 0;
          } else if (n == 1){
              cache[n] = 1;
          } else {
              cache[n] = innerMemoizationFib(n-1) + innerMemoizationFib(n-2);
          }
      }

      // キャッシュに値が保存されてる時はその値を返します
      return cache[n];
  }
  return innerMemoizationFib(totalFibNumbers);
}

console.log(memoizationFib(4));

// このように、動的計画法を用いると時間計算量が指数関数的であるような問題に対して、線形時間になるように導くことができます。


// メモ化とタビュレーションのどちらかを選択する場合、元の問題がすべての下位問題を解く必要がある場合、通常、タビュレーションはメモ化より優れています。これは、タビュレーションでは、再帰関数の関数呼び出しスタックを保存・管理するためにメモリや時間などのリソースが追加で必要にならないからです。反対に、すべての部分問題を解く必要はなく、その一部だけを解けばよい場合は、必要な計算を正確に行うことができるので、メモ化が望ましく、また実装もタビュレーションに比べシンプルです。

// 上の例のフィボナッチ数列の問題に限らず、動的計画法を用いて効率的に解く事のできる問題は数多く存在します。基本的に、以下のような特徴を持つ様々な問題を解決することができます。

// 問題が「重複する部分問題」に分解でき、何度も再利用できる。
// 問題が「最適部分構造」を持っている。部分問題を独立に解き、その解を組み合わせて元の問題の最適解を得ることができる。
// 最適部分構造とは、部分問題にも同じ最適化問題が成立し、また、部分問題間が独立していることが条件となっています。


// つまり、ある点 A から点 C までの最短経路を求める問題において、A -> B も B -> C も最短経路でなければいけないという事になります。これは、動的計画法が問題を分割することによって、部分問題を解き、それを利用して、全体の最適化問題を解く戦略だということを考えると理解できるかと思います。

// フィボナッチ数列の例に当てはめて考えてみましょう。

// まず、フィボナッチ数 f(n) は、f(n-1) と f(n-2) という小さな問題に分解することができます。そして、これらの小問題の解を足し合わせると、f(n) の解を導くことができます。つまり、部分問題の解から元の問題の解が形成できるので、この問題は最適部分構造を持つということになります。また、これらの部分問題は重複しており、例えば、f(4) と f(5) の両方を計算するためには f(3) が必要になります。

// 漸化式でも学びますが、動的計画法とは、数列の漸化式のように、状態間の関係性を表す（前後関係を見つける）ことによって、複雑な問題であっても部分問題の結果を利用して簡単に答えを導くことができるアルゴリズムだと言えます。
