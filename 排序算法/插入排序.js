// 选择排序是原址比较排序算法-数据结构中最小值放置第一位、第二小值放在第二位,以此类推
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

function insertionSort(array, compareFn = defaultCompare) {
    const { length } = array;
    let tmp;
    // 迭代数组给第i项找正确的位置
    // 从数组[1]开始找,默认数组第一项已经排序
    for (let i = 1; i < length; i++) {
        let j = i;
        // tmp赋值可能插入其他位置的当前数组项
        tmp = array[i];
        while(j > 0 && compareFn(array[j-1],tmp) === Compare.BIGGER_THAN) {
            array[j] = array[j-1];
            j--;
        }
        array[j] = tmp;
    }
    return array;
}
let arr = [2,4,5,1,3]
let zsarr = insertionSort(arr)
console.log(zsarr); // [ 1, 2, 3, 4, 5 ]