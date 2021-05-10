import { Compare, defaultCompare } from '../util.mjs'

export class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
export default class BinarySearchTree {
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.root = null;
    }
    insert(key) {
        if(this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) {
        if(this.compareFn(node.key, key) === Compare.BIGGER_THAN){
            if(node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left,key);
            }
        } else {
            if(node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    // 中序遍历是对BST的顺序遍历=>由小到大
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    // 先序遍历
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback) {
        if(node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    // 后序遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if(node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // 搜寻树最小键
    min() {
        return this.minNode(this.root); // 传入根节点-找到树的最小键
    }
    minNode(node) {
        let current = node;
        while(current != null && current.left != null) {
            current = current.left;
        }
        return current
    }
    // 搜寻树最大键
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let current = node;
        while(current != 0 && current.right != 0){
            current = node.right;
        }
        return current;
    }

    // 搜索特定值
    search(key) {
        // 辅助方法searchNode
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if(node == null) {
            return false;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if(
            this.compareFn(key, node.key) === Compare.BIGGER_THAN
        ) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    // 移除节点
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if(node == null) { return null }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left == null && node.right ==null) {
                // 去除此叶节点
                node = null;
                // 去除父节点指针
                return node;
            }
            if(node.left == null) {
                node = node.right;
                return node;
            } else if(node.right == null) {
                node = node.left;
                return node;
            } else {
                const aux = this.minNode(node.right);
                node.key = aux.key;
                // 这里 node.right 等于更新后 node.right.left == null 的更新节点
                node.right = this.removeNode(node.right, aux.key);
                return node;
            }
        }
    }
}
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

// printNode 是一种 callback
const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
tree.preOrderTraverse(printNode) // 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
tree.postOrderTraverse(printNode) // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

console.log(tree.search(1)?'key 1 found.':'key 1 not found.');
console.log(tree.search(8)?'key 8 found.':'key 8 not found.');