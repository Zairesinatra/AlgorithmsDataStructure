function minCoinChange(coins, amount) {
    const change = [];
    let total = 0;
    for (let i = coins.length-1; i >= 0; i--) {
        const coin = coins[i];
        while (total+coin<=amount) {
            change.push(coin);
            total += coin;
        }
    }
    return change;
}
let c = [0.5,1,5,10],
am = 34;
console.log(minCoinChange(c,am)); // [10, 10, 10, 1,  1,  1,  1]
