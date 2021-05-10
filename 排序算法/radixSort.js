// 基数排序是一种非比较型整数排序算法,其原理是将整数按位数切割成不同的数字,然后按每个位数分别比较.由于整数也可以表达字符串(比如名字或日期)和特定格式的浮点数,所以基数排序也不是只能使用于整数
// 对桶的使用方法上的差异: 基数排序:根据键值的每位数字来分配桶、计数排序:每个桶只存储单一键值、桶排序:每个桶存储一定范围的数值
function radixSort(arr) {
    // 取最大值 最大值的位数就是要循环遍历的次数
    const max = Math.max(...arr);
    // Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
    // 定义桶数据结构 digit从0-9的桶 每个桶都是数组
    const buckets = Array.from({ length: 10 }, () => []);
    // m定义当前要遍历的位数 个位 十位 百位...
    let m = 1;
    // m < 最大值 => 保证遍历完所有可能的位数而不超过max
    while (m < max) {
      // 放入桶
      arr.forEach(number => {
        // digit表示某位数的值、取余 % 取整 /
        const digit = ~~((number % (m * 10)) / m);
  
        // 把该位数的值放到桶buckets中
        // 通过索引确定顺序 类比计数排序
        buckets[digit].push(number);
      });
  
      // 从桶buckets中取值完成位数排序
      let zs = 0;
      buckets.forEach(bucket => {
        while (bucket.length > 0) {
          // shift从头部取值、保证按照队列先入先出
          arr[zs++] = bucket.shift();
        }
      });
      // 每次遍历增加一位
      // 每次最外层while循环后m要乘等10、也就是要判断下一位 比如当前是个位 下次就要判断十位
      m *= 10;
    }
}
const arr = [1, 10, 9680, 577, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127];
radixSort(arr);
console.log(arr.join()); // 1,10,82,577,743,2030,2599,3138,4127,4793,5622,9680

console.log(Math.trunc(1.234));
console.log(Math.trunc(1.834));
console.log(~~(1.234));
console.log(~~(1.834));