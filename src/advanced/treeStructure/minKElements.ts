// K個の最小値
// medium
// 整数によって構成される intArr と整数 k（0 < k <= intArr.length）が与えられるので、配列から k 個の最小値を返す、minKElements という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] intArr, integer k

// 出力のデータ型： integer[]

// minKElements([3,2,1,5,6,4],2) --> [1,2]

// minKElements([3,2,1,5,6,4],3) --> [1,2,3]

// minKElements([7,8,2,3,1,7,8,11,4,3,2],5) --> [1,2,2,3,3]

// minKElements([6,4,6,2,4,8,10,10,12],5) --> [2,4,4,6,6]

// minKElements([8,4,13,10,18],4) --> [4,8,10,13]

// minKElements([3,100,201,56,8,591,985,291],4) --> [3,8,56,100]

// minKElements([879,487,98,397,610,150,474,977,404,478,623,554,306],6) --> [98,150,306,397,404,474]

{
  function minKElements(intArr:number[], k:number): number[]{
    // 関数を完成させてください
    let heapSortedArr = heapsort(intArr)
    let resultsArr: number[] = []
    for(let i = 0; i < k ; i++) {
        resultsArr.push(heapSortedArr[i])
    }
    return resultsArr
}

function heapsort(intArr:number[]): number[]{
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
}