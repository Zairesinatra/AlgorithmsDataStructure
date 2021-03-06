// 664.奇怪的打印机
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
const f = new Array(3).fill(0).map(() => new Array(3).fill(0));
f[2][2] = 1;
console.log(f);