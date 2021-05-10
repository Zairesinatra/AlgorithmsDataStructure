// 算法步骤: 选择数组中间值 => 确认是待搜索值则搜索完毕,否则比较大小在子数组寻找
const err = "nonono"
function BinarySearch (array, value) {
    let low = 0;
    let high = array.length - 1;
    while( low <= high ) {
        var mid = parseInt((high + low) / 2);
        if (value == array[mid]) {
            return mid;
        } else if (value > array[mid]) {
            low = mid + 1;
        } else if (value < array[mid]) {
            high = mid - 1;
        }
    }
    return err;
}
let arr = [1,2,3,4,5]
let value = 1
console.log(BinarySearch(arr,value)); // 0
let array = [1,2,3,4,5]
let val = 0
console.log(BinarySearch(array,val)); // nonono
let array1 = [1,2,3,4,5]
let val1 = 3
console.log(BinarySearch(array1,val1)); // 2