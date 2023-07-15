const lists = [3, 4, 5, 1, 2]; // empty array
// console.log(arr.length);

// let result = arr.pop();
// console.log(result);

// arr.push(6);
// console.log(arr);

// console.log(arr.reverse());

// console.log(arr.sort());

// => - fat arrow

function access(lists) {
    lists.map((list) => console.log(list));
}

access(lists);