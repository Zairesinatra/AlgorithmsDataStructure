# ZS的LeetCode刷题记录

------

#### [664. 奇怪的打印机](https://leetcode-cn.com/problems/strange-printer/)

有台奇怪的打印机有以下两个特殊要求：

- 打印机每次只能打印由 同一个字符 组成的序列。
- 每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。

给一个字符串 s ，你的任务是计算这个打印机打印它需要的最少打印次数。

示例 ：

```js
// 示例 1：
输入：s = "aaabbb"
输出：2
解释：首先打印 "aaa" 然后打印 "bbb"。
// 示例 2：
输入：s = "aba"
输出：2
解释：首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
```


提示：

```js
1 <= s.length <= 100
s 由小写英文字母组成
```

分析：

```
方法：动态规划
思路及算法
令 f[i][j] 表示打印完成区间 [i,j] 的最少操作数。

尝试计算出 f[i][j] 时，考虑两种情况：

1.s[i]=s[j]，即s字符串的区间里两端的字符相同，那么当打印左侧字符 s[i] 时，可以一路打印到右侧字符 s[j] ，这样即可忽略右侧字符对该区间的影响，只需要考虑如何尽快打印完区间 [i,j-1] 即可，即此时有 f[i][j]=f[i][j-1] 。

2.s[i]!=s[j]，即区间两端的字符不同，则需要分别完成该区间的左右两部分的打印。记两部分分别为区间 [i,k] 和区间 [k+1,j]（其中i≤k<j），此时 f[i][j]=min{f[i][k]+f[k+1][j]} 。

总结状态转移方程为：
1.当s[i]=s[j]时，f[i][j] = f[i][j-1]; 
2.当s[i]!=s[j]时，f[i][j] = f[i][k]+f[k+1][j]

边界条件为 f[i][i]=1，对于长度为 1 的区间，需要打印 1 次。最后的答案为 f[0][n-1]。

注意到 f[i][j] 的计算需要用到 f[i][k] 和 f[k+1][j] (其中i≤k<j)。为了保证动态规划的计算过程满足无后效性，在实际代码中，需要改变动态规划的计算顺序，从大到小地枚举 i，并从小到大地枚举 j，这样可以保证当计算 f[i][j] 时，f[i][k] 和 f[k+1][j] 都已经被计算过。

```

```js
var strangePrinter = function(s) {
    const n = s.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = n - 1; i >= 0; i--) {
        f[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] == s[j]) {
                f[i][j] = f[i][j - 1];
            } else {
                let minn = Number.MAX_SAFE_INTEGER;
                for (let k = i; k < j; k++) {
                    minn = Math.min(minn, f[i][k] + f[k + 1][j]);
                }
                f[i][j] = minn;
            }
        }
    }
    return f[0][n - 1];
};
```

------

#### [7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

示例：

- 输入：x = 123	输出：321
- 输入：x = -123	输出：-321
- 输入：x = 120	输出：21
- 输入：x = 0	输出：0

**提示：**

- `-231 <= x <= 231 - 1`

```js
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    // x -> String -> Array
    let str = x+'';
    let arr = str.split('');
    // 判断是否有负号
    if(arr[0]!=="-"){
        // let num = Number(arr.reverse().join('')); 
        let num = arr.reverse().join('')-0; 
        if(num <= 2147483647 && num >= -2147483648){
            return num;
        }else{
            return 0
        }
    }else if(arr[0]==="-"){
        delete arr[0];
        let num =arr.reverse().join('')-0;
        if(num <= 2147483647 && num >= -2147483648){
            return ~num+1;
        }else{
            return 0
        }
    }
};
```

