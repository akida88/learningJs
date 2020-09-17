
walk();
// we can call the function before it is define only with the function declaration happens automatically. It's called Hoisting.
function walk() {
   console.log('walk');
}


const run = function() {
   console.log('run');
};