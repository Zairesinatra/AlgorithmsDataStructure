// 思路:
// 选定Pivot中心轴、大于Pivot的数字放在Pivot右边、小于Pivot数字放在Pivot左边
// 分别对左右子序列进行重复操作
function swap (array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
}
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};
function defaultCompare(a, b) {
    if(a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
function quickSort (array, compareFn = defaultCompare) {
    // 传入数组、索引为零、最末位置做参数
    return quick(array, 0, array.length - 1, compareFn)
}
function quick (array, left, right, compareFn) {
    let index;
    if (array.length>1) {
        index = partition(array, left, right, compareFn);
        if (left < index-1) {
            quick(array, left, index-1, compareFn);
        }
        if (index < right) {
            quick(array, index, right, compareFn)
        }
    }
    return array;
}
function partition (array, left, right, compareFn) {
    // 取中间值为主元
    const pivot = array[Math.floor((right + left) / 2)];
    // 初始化两个指针: left数组第一个元素 right数组最后一个元素
    let i = left;
    let j = right;
    // 只要指针不交错则执行划分操作
    while(i <= j) {
        // 移动指针找比主元大等于的元素
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        // 移动指针找比主元小等于的元素
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}
let arr = [2,4,1,5,3]
let zsarr = quickSort(arr)
console.log(zsarr); // [ 1, 2, 3, 4, 5 ]