// 括弧チェック(https://youtu.be/YiM19Bgl8J0)
// medium
// Walker は出版社で文章チェックの仕事をしています。() や {}、[] で括られている文章をチェックしているのですが、正しく使われているか見なければいけません。文字列 parentheses が与えられるので、それが有効かどうか判定する、isParenthesesValid という関数を定義してください。与えられる文字列が有効の条件は以下の通りです。

// 左カッコが同じ種類の右カッコで閉じられてる
// 左カッコが右カッコによって正しい順で閉じられている
// 関数の入出力例

// 入力のデータ型： string parentheses

// 出力のデータ型： bool

// isParenthesesValid("{}") --> true

// isParenthesesValid("[{}]") --> true

// isParenthesesValid("[{(]") --> false

// isParenthesesValid("(){}[]") --> true

// isParenthesesValid("((()(())))") --> true

// isParenthesesValid("[{(}])") --> false

// isParenthesesValid("]][}{({()){}(") --> false

// isParenthesesValid("{(([])[])[]}[]") --> true

// isParenthesesValid("{(([])[])[]]}") --> false

// isParenthesesValid("{{[[(())]]}}") --> true

function isParenthesesValid(parentheses: string){

  let charStack = [];
  // key => serched char
  // value => pair
  let pairs: {[key: string]: string} = {
    '}':'{',
    ')':'(',
    ']':'[',
  }

  for(let i = 0; i < parentheses.length; i++) {
      let currChar = parentheses[i];

      if (charStack.length === 0 || charStack[charStack.length-1] !== pairs[currChar]) charStack.push(currChar); 
      else charStack.pop();  
  }

  return charStack.length === 0; 
}

console.log(isParenthesesValid("{}")); // true
console.log(isParenthesesValid("[{}]")); // true
console.log(isParenthesesValid("[{(]")); // false
console.log(isParenthesesValid("(){}[]")); // true
console.log(isParenthesesValid("((()(())))")); // true
console.log(isParenthesesValid("[{(}])")); // false
console.log(isParenthesesValid("]][}{({()){}(")); // false
console.log(isParenthesesValid("{(([])[])[]}[]")); // true
console.log(isParenthesesValid("{(([])[])[]]}")); // false