// 定义树节点
class Node {
    constructor(key){
        this.key = key; // 节点值
        this.left = null; // 左侧节点引用
        this.right = null; // 右侧节点应用
    }
}

// 定义一个比较的对象
let Compare = {
    LESS_THAN: -1,
    BIGGER_THAN:1,
    EQALS:0
};

// 定义一个比较函数(因为不能确定是 对象 或者 数)
function defaultCompare (a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};
// 测试比较函数
console.log(defaultCompare(1,2));

// 树类
class BinarySearchTree {
    constructor(cpFn = defaultCompare) {
        this.cpFn = cpFn; // 比较节点值
        // 类似于LinkedList中的head
        this.root = null; // 定义根节点
    }
    insert (key) {
        // null  == undefined // true
        if(this.root == null) { // 查看插入是否为新节点
            this.root = new Node(key);
        } else {
            // 树非空,寻插入新节点位置-调用insertNode方法
            this.insertNode(this.root,key)
        }
    }
    // 寻插入新节点方法
    insertNode (key) {
        this.node = new Node(key);
        // 判断新节点与当前节点的键(第一层就是根节点)
        if (this.compareFn(key,node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                // 调用递归找下一层
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }
    // 搜索二叉树中特定的值
    search (key) {
        return this.searchNode(this.root, key);
    }
    // searchNode函数
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if(this.compareFn(key,node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key,node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right,key);
        } else {
            return true
        }
    }
}
let zstree = new BinarySearchTree();
zstree.insert(11);
zstree.insert(7);
zstree.insert(15);
zstree.insert(5);
zstree.insert(3);
zstree.insert(9);
zstree.insert(8);
zstree.insert(10);
zstree.insert(13);
zstree.insert(12);
zstree.insert(14);
zstree.insert(20);
zstree.insert(18);
zstree.insert(25);
zstree.insert(6);
console.log(zstree.search(1)?'key found':'key not found');
