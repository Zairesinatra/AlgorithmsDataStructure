// 最基本的搜索算法 —— 顺序搜索
const noExist = "不存在"
function sequentialSearch (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i;
        }
    }
    return noExist
}
let arr = [1,2,3,4,5]
let value = 0
console.log(sequentialSearch(arr,value)); // 不存在

let zsarr = [1,2,3,4,5]
let val = 1
console.log(sequentialSearch(zsarr,val)); // 0