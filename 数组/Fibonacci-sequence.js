// 创建斐波那契数组
const fibonacci = [] ;
// 定义前两项为1
fibonacci[1] = 1 ;
fibonacci[2] = 2 ;
// 斐波那契额数组的第三项到二十项位置的数字
for(let i = 3 ; i < 20 ; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
// 输出斐波那契数组每一项
for(let i = 1 ; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}

// 递归版本
function zsfibonacci(n){
    if(n==0)return 0
    else if(n==1)return 1
    else return zsfibonacci(n-1) + zsfibonacci(n-2)
 }
 console.log(zsfibonacci(20))