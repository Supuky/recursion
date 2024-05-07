// 最小ヒープ
// medium
// 整数によって構成される intArr が与えられるので、最小値が先頭に配置される最小ヒープを表す配列を返す、buildMinHeap という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] intArr

// 出力のデータ型： integer[]

// buildMinHeap([3,2,1]) --> [1,2,3]

// buildMinHeap([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3]) --> [-3,0,-2,2,1,-1,4,3,7,9,6,10,5,8]

// buildMinHeap([7,8,2,3,1,4,3,2]) --> [1,2,2,3,8,4,3,7]

// buildMinHeap([8,4,13,10,18]) --> [4,8,13,10,18]

// buildMinHeap([3,100,201,56,8,591,985,291]) --> [3,8,201,56,100,591,985,291]

// buildMinHeap([879,487,98,397,610,150,474,977,404,478,623,554,306]) --> [98,397,150,404,478,306,474,977,487,610,623,554,879]

{
  function buildMinHeap(intArr:number[]): number[]{
    // 関数を完成させてください
    const middle: number = Math.floor((intArr.length - 1) / 2);

    for (let i = middle; i >= 0; i--) {
        minHeapify(intArr, i);
    }

    return intArr
}

function minHeapify(arr: number[], i: number): void {
    const l: number = i * 2 + 1;
    const r: number = i * 2 + 2;

    let smallest: number = i;

    if (arr[l] < arr[smallest]) smallest = l;
    if (arr[r] < arr[smallest]) smallest = r;

    if(smallest != i) {
        const temp: number = arr[i]
        arr[i] = arr[smallest]
        arr[smallest] = temp
        minHeapify(arr, smallest)
    }
}
}