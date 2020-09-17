// Ways to define a function:
// function declaration
function walk() {
   console.log('walk');
}

// functions are objects
// Anonymous function expression
let run = function() { // by declaring a variable let or a constant const and setting it to a function
   console.log('run');
};
// let x = 1;

let move = run;

// Calling the function by using the reference
run();
move();

// Name function expression:
// let run = function walk() {}