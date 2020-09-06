// Max of two numbers

let number = max(1, 3);
// let number = max(5, 10);
console.log(number);

function max(a, b) {
    return (a > b) ? a : b;
    
    // is the same as:
    // if (a > b) return a;
    // return b;

    // (condition) ? a : b
    (a > b) ? a : b
}