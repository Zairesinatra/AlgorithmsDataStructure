function swap (array, a, b) {
    [array[a], array[b]] = [array[b],array[a]];
}

function bubbleSort (array) {
    // 解构赋值
    const { length } = array
    // 外循环从数组第一位迭代最后一位
    for (let i = 0; i < length; i++) {
        // 内循环从数组第一位迭代最后一位并减少内循环不必要比较
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j]>array[j+1]) {
                swap(array, j, j+1)
                // let tmp = array[j];
                // array[j] = array[j+1];
                // array[j+1] = tmp
            }
        }
    }
    return array;
}

function createNonSortedArray(size) {
    const array = [];
    for (let i = size; i > 0; i--) {
        array.push(i)
    }
    return array;
}

let array = createNonSortedArray(5);
console.log(array); // [ 5, 4, 3, 2, 1 ]
array = bubbleSort(array);
console.log(array.join()); // 1,2,3,4,5
