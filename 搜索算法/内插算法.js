const no = "nonono"
function interpolationSearch(arr, value) {
    let low = 0
    let high = arr.length - 1
    let position = -1
    let delta = -1
  
    while (low <= high && value >= arr[low] && value <= arr[high]) {
      delta = (value - arr[low]) / (arr[high] - arr[low])
      position = low + Math.floor((high - low) * delta)
      if (arr[position] === value) {
        return position
      }
      if (arr[position] < value) {
        low = position + 1
      } else {
        high = position - 1
      }
    }
    return no
}
let arr = [1,2,3,4,5]
let value = 1
console.log(interpolationSearch(arr,value));

let array = [1,2,3,4,5]
let val = 0
console.log(interpolationSearch(array,val));