let res = [];

const board = new Array(4);
for (let i = 0; i < 4; i++) {
    board[i] = new Array(4).fill('.');
}
console.log(board);

const copyBoard = board.slice();
console.log(copyBoard);

for (let i = 0; i < 4; i++) {
    copyBoard[i] = copyBoard[i].join(''); // 将每一行拼成字符串
}
res.push(copyBoard);
console.log(res);