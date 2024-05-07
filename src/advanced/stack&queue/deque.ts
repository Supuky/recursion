// Dequeクラス
// easy
// 両端キューとは、先頭または末尾で要素を追加、削除できるキューのことを指します。両端キューは 4 つの基本操作 enqueueFront, enqueueBack, dequeueFront, dequeueBack を持ちます。


// 両端キューに含まれる要素は、以下のように双方向リストに基づいた Item クラスによって管理することができます。

// int data: 要素の値
// Item prev: 1 つ前のノード。デフォルトでは null に設定してください。
// Item next: 1 つ先のノード。デフォルトでは null に設定してください。
// 両端キューでは、先頭と末尾を定義することによって、要素の追加や削除をスムーズに行うことができます。以下に従って、Deque クラスを作成してください。

// Item head: 先頭のノード。デフォルトでは null に設定してください。
// Item tail: 末尾のノード。デフォルトでは null に設定してください。
// Integer peekFront(): キューの先頭の Item の値を返します。
// Integer peekBack(): キューの末尾の Item の値を返します。
// void enqueueFront(int data): 先頭に Item を追加します。
// void enqueueBack(int data): 末尾に Item を追加します。
// Integer dequeueFront(): 先頭から Item を削除し、その値を返します。両端キューに Item が存在しない場合、null を返してください。
// Integer dequeueBack(): 末尾から Item を削除し、その値を返します。両端キューに Item が存在しない場合、null を返してください。
// テストケース

// q = new Deque()

// q.enqueueBack(4)

// q.enqueueBack(50)

// q.peekFront() --> 4

// q.peekBack() --> 50

// q.enqueueFront(36)

// q.enqueueFront(96)

// q.peekFront() --> 96

// q.peekBack() --> 50

// q.dequeueBack() --> 50

// q.dequeueBack() --> 4

// q.peekFront() --> 96

// q.peekBack() --> 36

// q.enqueueFront(20)

// q.dequeueBack() --> 36

class Item {
  data: number;
  prev: Item | null;
  next: Item | null;

  constructor(data: number) {
      this.data = data;
      this.prev = null;
      this.next = null;
  }
}

class Deque {
  head: Item | null;
  tail: Item | null;

  constructor() {
      this.head = null;
      this.tail = null;
  }

  peekFront(): number | null {
      if (this.head === null) {
          return null;
      }
      return this.head.data;
  }

  peekBack(): number | null {
      if (this.tail === null) {
          return null;
      }
      return this.tail.data;
  }

  enqueueFront(data: number): void {
      const item = new Item(data);
      if (this.head === null) {
          this.head = item;
          this.tail = item;
      } else {
          item.next = this.head;
          this.head.prev = item;
          this.head = item;
      }
  }

  enqueueBack(data: number): void {
      const item = new Item(data);
      if (this.tail === null) {
          this.head = item;
          this.tail = item;
      } else {
          item.prev = this.tail;
          this.tail.next = item;
          this.tail = item;
      }
  }

  dequeueFront(): number | null {
      if (this.head === null) {
          return null;
      }
      const data = this.head.data;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          if (this.head !== null) {
              this.head.prev = null;
          }
      }
      return data;
  }

  dequeueBack(): number | null {
      if (this.tail === null) {
          return null;
      }
      const data = this.tail.data;
      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.prev;
          if (this.tail !== null) {
              this.tail.next = null;
          }
      }
      return data;
  }
}

let q = new Deque()

q.enqueueBack(4)

q.enqueueBack(50)

console.log(q.peekFront()) //--> 4

console.log(q.peekBack()) // --> 50

q.enqueueFront(36)

q.enqueueFront(96)

console.log(q.peekFront()) // --> 96

console.log(q.peekBack()) // --> 50

console.log(q.dequeueBack()) //--> 50

console.log(q.dequeueBack()) //--> 4

console.log(q.peekFront()) //--> 96

console.log(q.peekBack()) //--> 36

q.enqueueFront(20)

console.log(q.dequeueBack()) //--> 36