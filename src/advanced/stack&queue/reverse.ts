// 配列の逆表示
// 問題 410 で以下の Item クラスと Stack クラスを実装しました。

// Item クラス

// int data: 要素の値
// Item next: 1 つ先のノード。デフォルトでは null に設定してください。
// Stack クラス

// Item head: 先頭のノード。デフォルトでは null に設定してください。
// void push(int data): スタックの先頭に Item を追加します。
// Integer pop(): スタックの先頭から Item を取り除き、その Item の値を返します。先頭が何も存在しない場合、null を返します。
// Integer peek(): スタックの先頭の Item の値を返します。
// スタックを使うと、後入れ先出しの構造で保持することができます。つまり、全ての要素をスタック内に一度 push し、そこから全てを pop させると、要素を逆の順番で取り出すことができます。

// 整数によって構成される配列 arr が与えられるので、配列を受け取って逆向きの配列を返す、reverse という関数を Stack クラスを使って作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] arr

// 出力のデータ型： integer[]

// reverse([3,2,1,5,6,4]) --> [4,6,5,1,2,3]

// reverse([7,8,2,3,1,7,8,11,4,3,2]) --> [2,3,4,11,8,7,1,3,2,8,7]

// reverse([]) --> []

// reverse([1]) --> [1]

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

let stack = new Stack()

function reverse(arr:number[]): number[]{
    // 関数を完成させてください
    for(let i = 0; i < arr.length; i++) {
        stack.push(arr[i])
    }

    let reverse: number[] = []

    for(let i = 0; i < arr.length; i++) {
      reverse.push(stack.pop())
    }

    return reverse
}
}