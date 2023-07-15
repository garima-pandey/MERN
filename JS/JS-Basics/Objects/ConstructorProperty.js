//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const factory = createCircle(5);
console.log(factory);

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  //   return this;
}

const construct = new Circle(5);
console.log(construct);
