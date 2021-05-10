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
let arr = [2,4,5,1,3]
let zsarr = insertionSort(arr)
console.log(zsarr); // [ 1, 2, 3, 4, 5 ]