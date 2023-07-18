const numbers = [1, 2, 3, 4];
let sum = 0;

// for(let n of numbers)
// sum += n;

sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue);

console.log(sum);
