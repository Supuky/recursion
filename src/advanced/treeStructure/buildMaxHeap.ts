// 最大ヒープ
// medium
// 整数によって構成される intArr が与えられるので、最大値が先頭に配置される最大ヒープを表す配列を返す、buildMaxHeap という関数を作成してください。

// 関数の入出力例

// 入力のデータ型： integer[] intArr

// 出力のデータ型： integer[]

// buildMaxHeap([1,2,3]) --> [3,2,1]

// buildMaxHeap([-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]) --> [10,7,9,5,6,8,3,4,0,-2,1,-3,2,-1]

// buildMaxHeap([7,8,2,3,1,4,3,2]) --> [8,7,4,3,1,2,3,2]

// buildMaxHeap([8,4,13,10,18]) --> [18,10,13,8,4]

// buildMaxHeap([3,100,201,56,8,591,985,291]) --> [985,291,591,100,8,3,201,56]

// buildMaxHeap([879,487,98,397,610,150,474,977,404,478,623,554,306]) --> [977,879,554,487,623,306,474,397,404,478,610,150,98]

{
  function buildMaxHeap(intArr:number[]): number[]{
    // 関数を完成させてください
    const middle: number = Math.floor((intArr.length - 1) / 2);

    for (let i = middle; i >= 0; i--) {
        maxHeapify(intArr, i);
    }

    return intArr;
}

function maxHeapify(arr: number[], i: number): void {
    const l: number = i * 2 + 1;
    const r: number = i * 2 + 2;

    let biggest: number = i;

    if (arr[l] > arr[biggest]) biggest = l;
    if (arr[r] > arr[biggest]) biggest = r;

    if (biggest !== i) {
        const temp: number = arr[i];
        arr[i] = arr[biggest];
        arr[biggest] = temp;
        maxHeapify(arr, biggest);
    }
}
}