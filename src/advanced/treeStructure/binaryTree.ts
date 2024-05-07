// 二分木の作成
// very easy
// 二分木の構造をオブジェクトを使って定義し、根ノードが 10、子（左）が 6、子（右）が 8 の二分木を作成し、テストケースを出力してみましょう。

// テストケース

// binaryTree = new BinaryTree(10)

// node2 = new BinaryTree(6)

// node3 = new BinaryTree(8)

// binaryTree.left = node2

// binaryTree.right = node3

// binaryTree.data --> 10

// binaryTree.left.data --> 6

// binaryTree.right.data --> 8

{ 
  class BinaryTree {
    data: number
    left: BinaryTree | null
  right: BinaryTree | null
  
  constructor(data: number) {
    this.data = data
      this.left = null
      this.right = null
    }
  }
  
  const binaryTree = new BinaryTree(10)
  const node2 = new BinaryTree(6)
  const node3 = new BinaryTree(8)
  binaryTree.left = node2
  binaryTree.right = node3
  
  console.log(binaryTree.data)
  console.log(binaryTree.left.data)
  console.log(binaryTree.right.data)
}