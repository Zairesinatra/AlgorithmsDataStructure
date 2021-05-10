// 默认情况使用5个桶
// 元素密集使用较少筒;元素稀少用使用较多桶
// 使用的映射函数能够将输入的 N 个数据均匀的分配到 M 个桶中
function bucketSort (array, bucketSize = 5) {
    if (array.length < 2) {
        return array;
    }
    const buckets = createBuckets(array, bucketSize);
    return sortBuckets(buckets)
}

function createBuckets(array, bucketSize) {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = [];
    for (let i = 0; i < array.length; i++) {
        // buckets是数组、buckets包含的内容也是数组
        buckets[i] = [];
    }
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(array[i]);
    }
    return buckets;
}

function insertionSort (array) {
    const { length } = array;
    for(let i = 1; i < length; i++) {
        let temp = array[i];
        let j = i;
        while(j>0 && (array[j-1]>temp)) {
            array[j] = array[j-1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}

function sortBuckets(buckets) {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++){
        if(buckets[i] != null)
        insertionSort(buckets[i]);
        sortedArray.push(...buckets[i]);
    }
    return sortedArray;
}

let arr = [2,4,5,1,3]
let zsarr = bucketSort(arr)
console.log(zsarr); // [ 1, 2, 3, 4, 5 ]