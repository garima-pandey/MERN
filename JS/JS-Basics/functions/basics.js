//function declaration
//Hoisting
demo();
function demo() {
    console.log("demo");
}


//function expression

const walk = function() {
    console.log("walk");
}
walk();