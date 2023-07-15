//symbol - value types

// let x = 10;
// let y = x;

// x = 20;

// console.log(x);
// console.log(y);

let obj = { value: 10 };
function increase(number) {
  obj.value++;
  //   console.log(number);
}

increase(obj);
console.log(obj);
