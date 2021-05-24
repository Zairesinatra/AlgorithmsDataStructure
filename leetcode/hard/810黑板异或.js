// 非负整数数组 nums[i], A 和 B 轮流从擦掉一个数字, A 先手.
// 擦除一个数字后,剩余的所有数字按位异或运算得出的结果等于 0 的话,当前玩家失败
// 只剩一个数字,按位异或运算得到它本身;如果无数字剩余,按位异或运算结果为 0
// 轮到某个玩家时,如果当前黑板上所有数字按位异或运算结果等于 0,这个玩家获胜
// 当且仅当 A 获胜时返回 true

// A 入手 => A 赢 => 1.初始异或为0(true)、2.初始不为0(分类)
// 每人每次面对的剩余数字的奇偶性一致 => 都是偶数 A 会输吗?
// 若 A 失败,则表示擦去一个数字后,剩余数字异或为0 => 验证

// let nums = []
// let nums.length = n && n % 2 == 0
// S = nums[0]^nums[1]^...^nums[n-1] != 0

// 若擦去nums[i] 后余下数字异或结果 Si => Si^nums[i] = S
// 等式两边同时 ^ => 由于 x^x = 0 => Si = S ^ nums[i]

// 若擦去后剩下数字的异或结果都为0 => Si = 0 => S1^S2^...Sn-1 = 0

// 带入 Si = S ^ nums[i] => S = 0 => 前提就是 S !== 0 因为 S = 0 直接就赢了

// 结果是数组长度为偶数 => A 总可以找到一个数字擦去后余下数字异或不为0

var xorGame = function (arr) {
  if (arr.length % 2 == 0) {
    return true
  }
  let xor = 0;
  for (let item of arr) {
    xor ^= item;
  }
  return xor == 0;
}

let zsarr = [1,2,3,4]
console.log(xorGame(zsarr));