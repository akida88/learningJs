another.constructor
circle.constructor

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    // This references an empty object
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);


// let x = {};
// The program will understand it like: let x = new Object();

// new String(); // ''. ''''
//new Boolean(); // true, false
//new Number();