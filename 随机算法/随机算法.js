function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        // ~~ 视为 Math.truc() 或者 Math.floor()
        const randomIndex = ~~(Math.random() * (i+1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }
    return array;
}

let arr = [1,2,3,4,5]
let zsarr = shuffle(arr)
console.log(shuffle(zsarr))