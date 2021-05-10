// 斐波那契数列: 0 1 1 2 3 5 8 13 ...(0不是第一项,而是第0项)
function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(3)); // 2
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13