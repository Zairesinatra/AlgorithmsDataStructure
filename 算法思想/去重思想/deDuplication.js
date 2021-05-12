// 利用 set 集合 => 无重复、无顺序数组
// ES5 解构赋值
let zsset = (arr)=>{ return [...new Set(arr)] }
console.log(zsset([1,1,2,3,true,true])); // [ 1, 2, 3, true ]

// ES6 中 Array.from
function zsunique (arr) {
  return Array.from(new Set(arr))
}
var arr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zsunique(arr)) // [ 0, 6, 'xzy', true, undefined, null, NaN, {}, {} ]

// 嵌套
function zsNested(arr){            
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            // 第一个等同于第二个则splice方法删除第二个
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
return arr;
}
var tarr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zsNested(tarr)) // [ 0, 6, 'xzy', true, undefined, NaN, NaN, {}, {} ]

// indexOf
// 判断结果数组是否存在当前元素,如果有相同的值则跳过,不相同则push进数组
function zsindex(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var ttarr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zsindex(ttarr)) // [ 0, 6, 'xzy', true, undefined, null, NaN, NaN, {}, {} ]