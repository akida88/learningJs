
function extend(Child, Parent) {
   Circle.prototype = Object.create(Parent.prototype);
   Circle.prototype.constructor = Child;
}

function Shape() {
}

Shape.prototype.duplicate = function() {
   console.log('duplicate');
}

function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
   // Shape.prototype.duplicate.call(this);

   console.log('duplicate circle');
}

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
   console.log('duplicate square');
}

//const c = new Circle();

const shapes = [
   new Circle(),
   new Square()
]

for (let shape of shapes) {
   if (shape.type === 'circle')
      duplicateCircle();
   else if (shape.type === 'square')
      duplicateSquare();
   else
      duplicateShape();
} // instead of this you can use:

for (let shape of shapes) {
   shape.duplicate();
}