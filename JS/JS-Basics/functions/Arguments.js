function sum() {
    // return a + b; // 1 + undefined
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 10, 20, 19));