var quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
    　　if (arr[i] < pivot) {
    　　　　left.push(arr[i]);
    　　} else {
    　　　　right.push(arr[i]);
    　　}
    }
    return quickSort(left).concat([pivot], quickSort(right));
};
let arr = [2,4,1,5,3]
let zsarr = quickSort(arr)
console.log(zsarr); // [ 1, 2, 3, 4, 5 ]