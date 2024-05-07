// K個の最大値
// medium
// 整数によって構成される intArr と整数 k（0 < k <= intArr.length）が与えられるので、配列から k 個の最大値を返す、topKElements という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] intArr, integer k

// 出力のデータ型： integer[]

// topKElements([3,2,1,5,6,4],2) --> [6,5]

// topKElements([3,2,1,5,6,4],3) --> [6,5,4]

// topKElements([7,8,2,3,1,7,8,11,4,3,2],5) --> [11,8,8,7,7]

// topKElements([6,4,6,2,4,8,10,10,12],5) --> [12,10,10,8,6]

// topKElements([8,4,13,10,18],4) --> [18,13,10,8]

// topKElements([3,100,201,56,8,591,985,291],4) --> [985,591,291,201]

// topKElements([879,487,98,397,610,150,474,977,404,478,623,554,306],6) --> [977,879,623,610,554,487]

{
  function topKElements(intArr:number[], k:number): number[]{
    // 関数を完成させてください
    let heapSortedArr = heapsort(intArr)
    let resultsArr: number[] = []
    for(let i = 0; i < k ; i++) {
        resultsArr.push(heapSortedArr[heapSortedArr.length - 1 - i])
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