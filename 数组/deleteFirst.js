// 定义一个数组
arr = new Array("zaire","sinatra","xie","zy")
// 3.除去 undefined
Array.prototype.deleteUn = function(arr){
    const newArr = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]!==undefined){
            newArr.push(arr[i])
        }
    }
    return newArr
}
// 手动删除第一个元素重新排序
Array.prototype.removeFirstPosition = function(){
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i+1]
    }
    // 1.先从这里入手理解,此处若不使用deleteUn方法,则输出[ 'sinatra', 'xie', 'zy', 'undefined' ]
    // 2.那么需要去除 undefined => 使用deleteUn除去 undefined返回新数组
    return arr.deleteUn(arr)
}
arr = arr.removeFirstPosition()
console.log(arr)
// 实际项目中还是使用 shift() 删除第一项