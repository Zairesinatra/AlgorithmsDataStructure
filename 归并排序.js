var zaire = [1,3,5,8,10]
var sinatra = [2,6,7,17]

function merge(leftArr,rightArr){
    var result = [];
    while(leftArr.length > 0 &&rightArr.length>0){
        if(leftArr[0]<rightArr[0]){
            result.push(leftArr.shift());
        }
        else 
            result.push(rightArr.shift());
    }
    return result.concat(leftArr).concat(rightArr)
}
var arr = merge(zaire,sinatra)
console.log(arr)
// function mergeSort(array){  
//     if (array.length == 1) return array;  
//     var middle = Math.floor(array.length / 2);       //求出中点  
//     var left = array.slice(0, middle);               //分割数组  
//     var right = array.slice(middle);  
//     return merge(mergeSort(left), mergeSort(right)); //递归合并与排序  
// }  



var zaire = [1,3,5,8,10]
var sinatra = [2,6,7,17]
function sortNumber(a,b)
{
return a - b
}
var zs = zaire.concat(sinatra)
console.log(zs.sort(sortNumber))

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

console.log(arr.concat(arr2))

//csdn
var arrSimple=new Array(1,18,17,6,2,5);
arrSimple.sort();
// document.writeln(arrSimple.join());
console.log(arrSimple.sort())
console.log(arrSimple.join())