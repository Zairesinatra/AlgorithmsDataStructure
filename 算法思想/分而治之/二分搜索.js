// 分而治之思想手撕二分法
const no = "nonono"
function binarySearchRecursive(array,value,low,high) {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] < value) {
            return binarySearchRecursive(array,value,mid+1,high)
        } else if (array[mid] > value) {
            return binarySearchRecursive(array,value,low,mid-1)
        } else {
            return mid;
        }
    }
    return no
}
function binarySearch (array, value) {
    const low = 0;
    const high = array.length - 1;
    return binarySearchRecursive(array, value, low, high)
}
let arr = [1,2,3,4,5]
let array = [1,2,3,4,5]
let val = 1
let value = 0
console.log(binarySearch(arr,val)); // 0
console.log(binarySearch(array,value)); // nonono