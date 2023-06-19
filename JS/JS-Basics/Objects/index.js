//OOPs

// const circle = {
//     radius: 1,
//     location: {
//       x: 1,
//       y: 1,
//     },
//     isVisible: true,
//     draw: function () {
//       console.log("draw");
//     },
//   };

//Factory Function
function createCircle(radius) {
  return {
    // radius: radius,
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(5);
console.log(circle1);

// circle.draw(); //method
