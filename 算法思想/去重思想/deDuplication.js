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
        // indexOf()方法返回在数组中可以找到一个给定元素的第一个索引,如果不存在,则返回-1
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}
var ttarr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zsindex(ttarr)) // [ 0, 6, 'xzy', true, undefined, null, NaN, NaN, {}, {} ]

// includes 去重 => 与 indexOf 类似
function zsin(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
        if(!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array
}
var arrr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zsin(arrr)) // [ 0, 6, 'xzy', true, undefined, null, NaN, {}, {} ]

// sort()去重
function zssort(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var array= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            array.push(arr[i]);
        }
    }
    return array;
}
var xarr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zssort(xarr)) // [ 0, 6, NaN, NaN, {}, {}, null, true, 'xzy', undefined ]

// filter() 方法创建一个新数组,其包含通过所提供函数实现的测试的所有元素
function zsfilter(arr) {
    return arr.filter((item, index, arr) => {
        // 当前元素在原始数组中的第一个索引 === 当前索引值，否则返回当前元素
        return arr.indexOf(item) === index;
        // 或者 hasOwnProperty 去重
        // hasOwnProperty()方法会返回一个布尔值,指示对象自身属性中是否具有指定的属性
    });
}
let ffarr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zsfilter(ffarr)); // [ 0, 6, 'xzy', true, undefined, null, {}, {} ]

// Map 数据结构去重
// Map 对象保存键值对,并且能够记住键的原始插入顺序
function zsMap(aarr) {
    let map = new Map();
    let array = new Array();  // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {  // 如果有该key值
            map.set(arr[i], true); 
        } else { 
            map.set(arr[i], false); // 如果没有该key值
            array.push(arr[i]);
        }
    } 
    return array ;
}
var aarr = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zsMap(aarr)) // [ 0, 6, 'xzy', true, undefined, null, NaN, {}, {} ]

// reduce()
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行),将其结果汇总为单个返回值
// Accumulator (acc) (累计器)、Current Value (cur) (当前值)、Current Index (idx) (当前索引)、Source Array (src) (源数组)
function zszs(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur], []);
}
var arro = [0,0,6,6,'xzy','xzy',true,true,undefined,undefined,null,null,NaN,NaN,{},{}];
console.log(zszs(arro)); // [ 0, 6, 'xzy', true, undefined, null, NaN, {}, {} ]