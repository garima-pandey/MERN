// pascal notation
// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
//   return this;
}

const circle = new Circle(5);
console.log(circle);
