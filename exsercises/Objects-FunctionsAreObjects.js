
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// Calling a functions
Circle.call({}, 1)
Circle.apply // with array [] if there is other array

// Functions are objects

const another = new Circle(1);