// 归并排序复杂度为O(nlog(n))
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
function mergeSort(array, compareFn = defaultCompare) {
    // 递归满足的停止条件
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length/2);
        // 大数组转换为小数组直到其中只有一个项
        // slice() 方法返回一个新的数组对象,这一对象是一个由 begin 和 end 决定的原数组的浅拷贝(包括 begin 不包括 end )原始数组不会被改变
        const left = mergeSort(array.slice(0,middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn)
        array = merge(left, right, compareFn);
    }
    return array
}
function merge(left, right, compareFn) {
    let i = 0;
    let j = 0;
    const result = [];
    while(i < left.length && j < right.length) {
        result.push(
            compareFn(left[i],right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
        );
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
let arr = [2,4,3,5,1]
let zsarr = mergeSort(arr)
console.log(zsarr); // [ 1, 2, 3, 4, 5 ]