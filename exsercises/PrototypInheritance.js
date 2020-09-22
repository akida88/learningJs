
function Shape(color) {
   this.color = color;
}

Shape.prototype.duplicate = function() {
   console.log('duplicate');
}

function Circle(radius, color) {
   Shape.call(this, color);

   this.radius = radius;
}
// Circle.prototype.constructor = Circle;
//new Circle.prototype.constructor() => new Circle();
function extend(Child, Parent) {
   Circle.prototype = Object.create(Parent.prototype);
   Circle.prototype.constructor = Child;
}

Circle.prototype.draw = function() {
   console.log('draw');
}

function Square(size) {
   this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');