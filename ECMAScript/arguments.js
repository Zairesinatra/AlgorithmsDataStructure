// 函数的参数默认值
function sum(x=1,y=2,z=3){
    return x+y+z
}

// 没有JS内置对象arguments对象写法
function summ (){
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0]:1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1]:2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2]:3;
    return x+y+z
}

console.log(sum(4,2))
console.log(summ(4,2));

// 声明展开与剩余参数
let params = [3,4,5]
// ...展开运算符,把数组转化为参数
console.log(sum(...params));

// apply()函数也可以把数组转化为参数
console.log(sum.apply(undefined,params));

// 展开运算符可以代替arguments
function restParamaterFunction (x,y,...a){
    return (x+y) * a.length
}
console.log(restParamaterFunction(1,2,"zairesinatra",true,6));

// 等同于以上代码
function restParamaterFunctionn (x,y) {
    // slice() 方法可从已有的数组中返回选定的元素。
    // [].slice.call(arguments)能将具有length属性的对象转成数组。
    var a = Array.prototype.slice.call(arguments,2)
    return (x+y) * a.length
}
console.log(restParamaterFunctionn(1,2,"zairesinatra",true,6));