function swap (array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
}

// 选择排序是原址比较排序算法-数据结构中最小值放置第一位、第二小值放在第二位,以此类推
function selectionSort(array) {
    const { length } = array;
    // 声明当前索引最小值
    let indexMin;
    // 外循环迭代数组,控制循环轮次
    for (let i = 0; i < length-1; i++) {
        indexMin = i;
        // 从当前i值至数组结束比较是否有位置j比当前值小
        for (let j = i+1; j < length; j++) {
            if (array[indexMin]>array[j]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin);
        }
    }
    return array;
}
let arr = [2,4,1,5,3]
let zsarr = selectionSort(arr)
console.log(zsarr); // [ 1, 2, 3, 4, 5 ]