// 红黑树也是一种自平衡二叉树
// 节点非红即黑、树的根节点与所有叶节点为黑色、如果一个节点是红色,那么其子节点都是黑色、不可能有相邻两个红节点给定节点到其后代节点所有路径包含相同数量的黑色节点
import { Compare, defaultCompare } from '../util.mjs'
import BinarySearchTree from '../BST/bst.mjs'
import Node from '../node.mjs'
class RedBlackTree extends BinarySearchTree {
    constructor(compare = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
    insert(key:T) {
        // 红黑树没有节点情况
        if(this.root == null) {
            this.node = new RedBlackTree(node);
            this.root.color = Colors.BLACKS; // 根节点都是黑色
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }
    insertNode(node, key) {
        if(this.compareFn(key, node.key) === this.Compare.LESS_THAN) {
            if(node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            }
            else {
                return this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        }
        else {
            return this.insertNode(node.right, key)
        }
    }
}
class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = Colors.RED;
        this.parent = null;
    }
    isRed() {
        return this.color === Colors.RED;
    }
}