// ページ付け
// Joe は web サイト作成をしており、pagination を担当することになりました。URL によって構成される配列 urls、各ページのサイズ pageSize、特定のページ page が与えられるので、特定のページに表示される URL を返す、websitePagination という関数を作成してください。例えば、url1, url2, url3, url4, url5, url6, url7, url8, url9 の一覧があり、1 ページに含まれる URL の数が 3、現在作成しているページが 2 ページ目の場合、各ページに 3 つの URL が含まれることになるので、返される配列は 2 ページに含まれる url4, url5, url6 になります。

// 入力のデータ型： string[] urls, integer pageSize, integer page
// 出力のデータ型： string[]
// websitePagination(["url1","url2","url3","url4","url5","url6"],4,1) --> [url1,url2,url3,url4]
// websitePagination(["url1","url2","url3","url4","url5","url6","url7","url8","url9"],3,2) --> [url4,url5,url6]
// websitePagination(["url1","url2","url3","url4","url5","url6","url7","url8","url9"],4,3) --> [url9]

function websitePagination(urls:string[], pageSize:number, page:number): string[]{
  // 関数を完成させてください
  const output = [];
  let startIndex = 0 + pageSize * (page - 1);
  let count = 0;

  while(count < pageSize && urls[startIndex]) {
      output.push(urls[startIndex]);
      startIndex++;
      count++;
  };

  return output;
}

