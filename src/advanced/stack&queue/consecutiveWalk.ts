// 単調増加の部分配列
// 問題 410 で以下の Item クラスと Stack クラスを実装しました。

// int data	要素の値
// Item next	1 つ先のノード。デフォルトでは null に設定してください。
// Item head	先頭のノード。デフォルトでは null に設定してください。
// void push(int data)	スタックの先頭に Item を追加します。
// Integer pop()	スタックの先頭から Item を取り除き、その Item の値を返します。先頭が何も存在しない場合、null を返します。
// Integer peek()	スタックの先頭の Item の値を返します。
// スタックを使うと値を連続で保存し、その先頭をいつでも参照することができます。配列 arr が与えられるので、配列の単調増加している部分配列を返す consecutiveWalk という関数を作成してください。配列の途中で単調減少する部分が出現したら、部分配列をリセットしてください。

// 例えば、配列 [1,2,3,2,4] が与えられたとき、最初に単調増加している部分は [1,2,3] になりますが、その次の要素 2 が 3 より小さいので、一度リセットされます。次に単調増加している部分は [2,4] となるため、[4,2] が出力されます。

// 関数の入出力例
// 入力のデータ型： integer[] arr
// 出力のデータ型： integer[]
// consecutiveWalk([3,4,20,45,56,6,4,3,2,3,9]) --> [9,3,2]
// consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54]) --> [-54]
// consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54,4]) --> [4,-54]
// consecutiveWalk([]) --> []
// consecutiveWalk([1]) --> [1]
// consecutiveWalk([1,2,3,2,4]) --> [4,2]

{
  class Item {
    data: number
    next: Item | null
    constructor(data: number) {
        this.data = data
        this.next = null 
    }
}

class Stack {
    head: Item | null

    constructor() {
        this.head = null
    }

    push(data: number) {
        let temp = this.head
        this.head = new Item(data)
        this.head.next = temp
    }

    pop() {
        if(this.head === null) return null;
        let temp = this.head
        this.head = this.head.next
        return temp.data
    }

    peek() {
        if(this.head === null) return null;
        return this.head.data
    }
}

function consecutiveWalk(arr:number[]): number[]{
    // 関数を完成させてください
    let stack = new Stack();
    stack.push(arr[0]);
    for(let i = 1; i < arr.length; i++){
        // スタックの上にある要素より、arr[i]が小さい場合、スタックをリセット
        if(stack.peek() > arr[i]){
            // スタックがnullになるまで繰り返される
            while(stack.pop() != null);
        }
        // スタックにプッシュします。スタックは常に単調増加になる
        stack.push(arr[i]);
    }
    let results = [];
    // 配列に追加します。
    while(stack.peek() != null) results.push(stack.pop());
    return results;
}
}