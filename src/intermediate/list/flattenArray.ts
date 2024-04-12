// 多次元配列を受け取り、平坦化された一次元配列を返します
function flattenArray(arr: (number | (number | number[])[])[]): number[]{
  let result: number[] = [];
  
  for(let i = 0; i < arr.length; i++){
      const currVal = arr[i];
      // 値がリストかどうかをチェックします
      if(Array.isArray(currVal)){
          // 再帰のベースケースにより配列が返ってくるため、concat を使用します
          result = result.concat(flattenArray(currVal));
          // 以下のようにしても同じように求めることができます
          // result = [...result, ...(flattenArray(currVal))];
      }
      else{
          result.push(currVal);
          // if(currVal % 2 == 0){
          //     result.push(currVal);
          // }
      }
      // console.log(result);
  }
  return result;
}

const multiArray = [1, 2, 3, [4, 5, [6, 7]], 8, [9, 10, 11], 12, 13]
console.log(flattenArray(multiArray)); 

// JS の flat メソッドは、引数に深さレベルを渡すことで配列を平坦化することができます
console.log(multiArray.flat(2).filter(val => val % 2 == 0));
// 正確な深さレベルがわからない場合は、Infinity を引数に渡すこともできます
// console.log(multiArray.flat(Infinity).filter(val => val % 2 == 0));