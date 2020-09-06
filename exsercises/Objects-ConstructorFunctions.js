
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Constructor Function
function Circle(radius) {
    // This references an empty object
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);