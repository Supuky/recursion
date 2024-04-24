// 従業員リスト
// Cole はある企業の人事として働いており、従業員のリストを整理しています。従業員のリスト employees と来月解雇されるリスト unemployed が与えられるので、来月残留する従業員の配列を返す fireEmployees という関数を定義してください。

// 関数の入出力例
// 入力のデータ型： string[] employees, string[] unemployed
// 出力のデータ型： string[]
// fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],["Donald","Lake"]) --> [Steve,David,Mike,Julian]
// fireEmployees(["Donald","Lake"],["Donald","Lake"]) --> []
// fireEmployees(["Steve","David","Mike","Donald","Lake","Julian"],[]) --> [Steve,David,Mike,Donald,Lake,Julian]
// fireEmployees(["Mike","Steve","David","Mike","Donald","Lake","Julian"],["Mike"]) --> [Steve,David,Donald,Lake,Julian]
// fireEmployees(["Kailey","Kailey"],["Kailey"]) --> []

function fireEmployees(employees:string[], unemployed:string[]): string[]{
  // 関数を完成させてください
  let hashmap: {[key: string]: string}= {}
  let results: string[] = []

  for(let i = 0; i < unemployed.length; i++) {
      hashmap[unemployed[i]] = unemployed[i]
  }

  for(let i = 0; i < employees.length; i++) {
      if(employees[i] !== hashmap[employees[i]]) results.push(employees[i])
  }

  return results
}