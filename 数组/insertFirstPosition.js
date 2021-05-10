arr = new Array("zaire","sinatra","xie","zy")
Array.prototype.insertFirstPosition = function(value){
    for(let i = arr.length; i > 0; i--) {
        arr[i]=arr[i-1]
    }
    arr[0]=value;
};
arr.insertFirstPosition(1)
console.log(arr)

// 2.使用unshift()
arr.unshift(1) // [ 1, 'zaire', 'sinatra', 'xie', 'zy' ]
console.log(arr)