function sum(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum(1, 2, 3, 10, 20, 19));