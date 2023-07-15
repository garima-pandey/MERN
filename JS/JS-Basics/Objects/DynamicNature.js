const circle = {
  radius: 1,
};

// circle = {};

circle.color = 'red';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

circle.radius = 2;

console.log(circle);
