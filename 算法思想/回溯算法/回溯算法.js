// 解决一个回溯问题,实际上就是一个决策树的遍历过程
// 路径:已经做出的选择、选择列表:当前可以做的选择、结束条件:到达决策树底层,无法再做选择的条件
// 穷举整棵决策树是无法避免的
// 这也是回溯算法的一个特点,不像动态规划存在重叠子问题可以优化,回溯算法就是纯暴力穷举,复杂度一般都很高

// 回溯算法——N皇后问题
// N*N棋盘放N个皇后,彼此不攻击(棋盘任一行、任一列、任一对角线上不能放置两个皇后)
const NQueens = (n) => {
    // 棋盘的初始化
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
      board[i] = new Array(n).fill('.');
    }
    const res = [];
    const isValid = (row, col) => {  
      for (let i = 0; i < row; i++) { // 之前的行
        for (let j = 0; j < n; j++) { // 所有的列
          if (board[i][j] == 'Q' &&   // 发现了皇后，并且和自己同列/对角线
            (j == col || i + j === row + col || i - j === row - col)) {
            return false;             // 不是合法的选择
          }
        }
      }
      return true;
    };
    const putqueen = (row) => {   // 放置当前行的皇后
      if (row == n) {           // 递归的出口，超出了最后一行
        const copyBoard = board.slice(); // 拷贝一份放完成功的board
        for (let i = 0; i < n; i++) {
          copyBoard[i] = copyBoard[i].join(''); // 将每一行拼成字符串
        }
        res.push(copyBoard); // 推入res数组
        return;
      }
      for (let col = 0; col < n; col++) { // 枚举出所有选择
        if (isValid(row, col)) {          // 剪掉无效的选择
          board[row][col] = "Q";          // 作出选择，放置皇后
          putqueen(row + 1);              // 继续选择，往下递归
          board[row][col] = '.';          // 撤销当前选择
        }
      }
    };
    putqueen(0);  // 从第0行开始放置
    return res;
  };

console.log(NQueens(4)); // [[ '.Q..', '...Q', 'Q...', '..Q.' ], [ '..Q.', 'Q...', '...Q', '.Q..' ]]