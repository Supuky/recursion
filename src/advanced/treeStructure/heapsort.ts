// ヒープソート
// medium
// 整数によって構成される intArr が与えられるので、ヒープソートアルゴリズムによって、昇順ソートする、heapsort という関数を作成します。配列の要素間の入れ替えをすることによって、空間計算量 O(1) で実装してください。

// 関数の入出力例

// 入力のデータ型： integer[] intArr

// 出力のデータ型： integer[]

// heapsort([1,2,3]) --> [1,2,3]

// heapsort([1,2,3,4]) --> [1,2,3,4]

// heapsort([1,2,3,4,5]) --> [1,2,3,4,5]

// heapsort([6,5,4,3,2,1,0,-1,-2,-3,-4,-5]) --> [-5,-4,-3,-2,-1,0,1,2,3,4,5,6]

// heapsort([3,4,5,5,5,6,7,2,10,2,1,-10,2,-2,0,-1]) --> [-10,-2,-1,0,1,2,2,2,3,4,5,5,5,6,7,10]

function heapsort(intArr:number[]): number[]{
  // 関数を完成させてください
  // ヒープ構造化した配列にする
  buildMaxHeap(intArr)
  // 配列の長さを取得
  let heapEnd = intArr.length - 1
  // 配列のスワップと最大ヒープのデータ構造を維持を行う
  while(heapEnd > 0) {
      let temp = intArr[heapEnd]
      intArr[heapEnd] = intArr[0]
      intArr[0] = temp
      
      heapEnd--
      maxHeapify(intArr, heapEnd, 0)
  }

  return intArr
}

function buildMaxHeap(arr: number[]): void {
  let middle = Math.floor(arr.length-1 / 2)
  for(let i = middle; i >= 0; i--) {
      maxHeapify(arr, arr.length - 1, i)
  }
}

function maxHeapify(arr: number[], heapEnd: number, i: number): void {
  const l: number = i * 2 + 1
  const r: number = i * 2 + 2
  let biggest = i

  if(l <= heapEnd && arr[l] > arr[biggest]) biggest = l
  if(r <= heapEnd && arr[r] > arr[biggest]) biggest = r

  if(biggest !== i) {
      let temp = arr[i]
      arr[i] = arr[biggest]
      arr[biggest] = temp

      maxHeapify(arr, heapEnd, biggest)
  }
}