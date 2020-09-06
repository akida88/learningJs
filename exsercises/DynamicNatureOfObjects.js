const circle = {
    radius: 1
};
// when writing a constant we cant reasign the variable 'circle'

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;
delete circle.draw;

console.log(circle);