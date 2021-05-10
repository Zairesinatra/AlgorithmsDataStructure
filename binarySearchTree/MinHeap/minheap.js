// 二叉堆

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

// 定义最小堆类
class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = []; // 空堆
    }
    getLeftIndex (index) {
        return 2*index + 1;
    }
    getRightIndex (index) {
        return 2*index + 2;
    }
    getParentIndex (index) {
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index-1)/2);
    }
}