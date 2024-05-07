// Stackクラス
// easy
// スタックとはコンピュータで頻繁に使用される特殊なデータ構造です。スタックは要素が入ってきた順に一列に並べ、後に入れた要素から順に取り出すという規則に従った構造で、3 つの基本操作 push、pop、peek を持ちます。

// スタックに含まれる要素は、以下のように、片方向リストに基づいた Item クラスによって管理することができます。

// int data: 要素の値
// Item next: 1 つ先のノード。デフォルトでは null に設定してください。
// スタックは先頭を定義し、先頭に要素を追加していくことによって定義することができます。以下に従って、Stack クラスを作成してください。

// Item head: 先頭のノード。デフォルトでは null に設定してください。
// void push(int data): スタックの先頭に Item を追加します。
// Integer pop(): スタックの先頭から Item を取り除き、その Item の値を返します。先頭が何も存在しない場合、null を返します。
// Integer peek(): スタックの先頭の Item の値を返します。
// テストケース

// s1 = new Stack()

// s1.push(2)

// s1.peek() --> 2

// s1.push(4)

// s1.push(3)

// s1.push(1)

// s1.pop() --> 1

// s1.peek() --> 3


// s2 = new Stack()

// s2.pop()

// s2.push(9)

// s2.push(8)

// s2.peek() --> 8
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
  
  const s1 = new Stack()
  
  s1.push(2)
  console.log(s1.peek())
  s1.push(4)
  s1.push(3)
  s1.push(1)
  console.log(s1.pop())
  console.log(s1.peek())
  
  const s2 = new Stack()
  s2.pop()
  s2.push(9)
  s2.push(8)
  console.log(s2.peek())
}