// 優先度付きキュー top
// easy
// 特定の操作に基づくデータ構造である優先度付きキューを作成します。優先度付きキューは、要素が優先度によって管理されるキューで、最も高い優先度を持つ要素を効率的に取得するためのデータ構造です。この問題では、優先度付きキューを実現するために、整数の配列から最大ヒープを構築し、最も高い優先度を持つ要素を取得する top メソッドを実装します。

// 通常のキューは FIFO 原則に基づいて動作し、要素が追加された順序で処理されます。しかし、優先度付きキューでは、要素の優先度に基づいて処理される必要があり、最も高い優先度の要素を迅速に取り出すことが重要です。通常のキューでは、このような優先度ベースの処理を効率的に行うことができません。

// 最大ヒープは、完全二分木の一種で、各ノードがその子ノードよりも大きい（または等しい）値を持つ特性を持っています。これにより、最大ヒープの根（木の最上部）は常に最大値を持ち、優先度付きキューの「最も高い優先度を持つ要素を取得する」操作に最適です。最大ヒープを使用することで、優先度が最も高い要素を効率的に取得し、処理することが可能になります。

// PriorityQueue クラスの作成：

// array maxHeap
// PriorityQueue クラスを作成し、最大ヒープを動的配列で管理します。この動的配列 maxHeap は、優先度付きキューの要素を保持します。コンストラクタでは、入力として与えられた配列 arr のディープコピーを作成し、元の配列の変更を防ぎつつ、HeapLibrary の buildMaxHeap 関数を使用して、このコピーを最大ヒープに変換します。

// int top()
// 最大ヒープの最大値を返します。

// テストケース
// pq1 = new PriorityQueue([2,3,43,2,53,6,75,10])

// pq1.top() --> 75


// pq2 = new PriorityQueue([3,12,0,2,9,1,65,32])

// pq2.top() --> 65


// pq3 = new PriorityQueue([1,2,3,4,8,2,1,9,7,3,4])

// pq3.top() --> 9


{
  class HeapLibrary {
    static buildMaxHeap(arr: number[]): number[] {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            HeapLibrary.maxHeapify(arr, n, i);
        }
        return arr;
    }

    static maxHeapify(arr: number[], n: number, i: number) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;
    
        if (left < n && arr[left] > arr[largest]) {
          largest = left;
        }
    
        if (right < n && arr[right] > arr[largest]) {
          largest = right;
        }
    
        if (largest !== i) {
          [arr[i], arr[largest]] = [arr[largest], arr[i]];
          HeapLibrary.maxHeapify(arr, n, largest);
        }
    }
}

class PriorityQueue {
  private maxHeap: number[];

  constructor(arr: number[]) {
    // arrのディープコピーを作成し、それを最大ヒープに変換する
    const copyArr = [...arr];
    this.maxHeap = HeapLibrary.buildMaxHeap(copyArr);
  }

  top(): number {
    if (this.maxHeap.length === 0) {
      throw new Error('PriorityQueue is empty');
    }
    return this.maxHeap[0];
  }
}

const pq1 = new PriorityQueue([2,3,43,2,53,6,75,10])
console.log(pq1.top()) //--> 75

const pq2 = new PriorityQueue([3,12,0,2,9,1,65,32])
console.log(pq2.top()) //--> 65

const pq3 = new PriorityQueue([1,2,3,4,8,2,1,9,7,3,4])
console.log(pq3.top()) //--> 9
}


// 優先度付きキュー pop
// medium
// 問題 451 では、PriorityQueue クラスを作成し、最も優先度の高い値にアクセスできるようになりました。それでは、最も優先度の高い要素を削除する pop() メソッドを実装してみましょう。

// pop メソッドは、キューから最も優先度の高い値を削除してその値を返す機能を持ちます。このメソッドの重要な点は、最大ヒープとしてのヒープのプロパティを維持しながら値を削除することです。最大ヒープでは、親ノードの値がその子ノードの値よりも常に大きいという特性があります。

// integer pop()
// pop メソッドでは、まず最大ヒープの根ノード、つまり最も優先度の高い値を取り出します。その後、ヒープの最後の葉ノード、つまり配列の最後の要素を根ノードの位置に移動させます。この新しい根ノードに対して maxHeapify 関数を適用することで、ヒープの整合性を保ちながら、最大値を効果的に削除します。このプロセスにより、優先度付きキューの最大値を削除し、ヒープの構造を適切に維持することができます。

// テストケース

// pq = new PriorityQueue([2,3,43,2,53,6,75,10])

// pq.pop() --> 75

// pq.pop() --> 53

// pq.pop() --> 43

// pq.pop() --> 10

{
  class HeapLibrary {
    static buildMaxHeap(arr: number[]): number[] {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            HeapLibrary.maxHeapify(arr, n, i);
        }
        return arr;
    }

    static maxHeapify(arr: number[], n: number, i: number) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            HeapLibrary.maxHeapify(arr, n, largest);
        }
    }
}

class PriorityQueue {
    private maxHeap: number[];

    constructor(arr: number[]) {
        // arrのディープコピーを作成し、それを最大ヒープに変換する
        const copyArr = [...arr];
        this.maxHeap = HeapLibrary.buildMaxHeap(copyArr);
    }

    top(): number {
        if (this.maxHeap.length === 0) {
            throw new Error('PriorityQueue is empty');
        }
        return this.maxHeap[0];
    }

    pop(): number {
        if (this.maxHeap.length === 0) {
            throw new Error('PriorityQueue is empty');
        }
        const popped = this.maxHeap[0];
        this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
        this.maxHeap.pop();
        HeapLibrary.maxHeapify(this.maxHeap, this.maxHeap.length, 0);
        return popped;
    }
}

const pq = new PriorityQueue([2, 3, 43, 2, 53, 6, 75, 10]);
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
}