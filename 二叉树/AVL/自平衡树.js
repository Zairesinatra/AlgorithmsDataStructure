// BST 可能出现树的一条边特别深,为解决性能问题引入 Adelson-Velskii-Landi 树
// AVL 自平衡二叉搜索树 => 任何节点左右两侧高度只差为1
// 任意一节点的左子树和右字数高度相差1
import  BinarySearchTree  from '../BST/bst.mjs'
import { Compare, defaultCompare } from '../util.mjs'
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
    // 节点高度
    getNodeHeight(node) {
        if(node == null) {
            return -1
        }
        return  Math.max(
            this.getNodeHeight(node.left),this.getNodeHeight(node.right)
        ) + 1;
    }
    // 平衡因子
    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(ndoe.left) - this.getNodeHeight(node.right);
        const BalcanceFactor = {
            UNBALANCED_RIGHT: 1,
            SLIGHTLY_UNBALANCED_RIGHT: 2,
            BALANCED: 3,
            SLIGHTLY_UNBALANCED_LEFT: 4,
            UNBALANCED_LEFT: 5
        };
        switch(heightDifference) {
            case -2:
                return BalcanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalcanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalcanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalcanceFactor.UNBALANCED_LEFT;
            default:
                return BalcanceFactor.BALANCED;
        }
    }
    // 平衡操作-AVL旋转
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node)
    }
    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }
    insert(key) {
        this.root = this.insertNode(this.root, key);
    }
    insertNode(node, key) {
        if(node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === compareFn.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === compareFn.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; // 重复的键
        }
        // 如果需要,将树平衡
        const balanceFactor = this.getBalanceFactor(node);
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if(this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node)
            }
        }
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if(this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node)
            }
        }
        return node;
    }

    // 从AVL树移除节点
    removeNode(node, key) {
        node = super.removeNode(node,key);
        if(node == null) {
            return node; // null 不需要平衡
        }
        const balanceFactor = this.getBalanceFactor(node);
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if(
                balanceFactorLeft === BalanceFactor.BALANCED || balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node);
            }
            if(
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationLR(node.left);
            }
        }
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            const balanceFactorLeft = this.getBalanceFactor(node.right);
            if(
                balanceFactorRIGHT === BalanceFactor.BALANCED || balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationRR(node);
            }
            if(
                balanceFactorRIGHT === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationRL(node.right);
            }
        }
        return node;
    }
}