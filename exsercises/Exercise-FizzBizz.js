// If the numner is divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => the same number/input
// If it's not a number => 'Not a number'

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
// function fizzBuzz(15) {
// implemanting the function
    // is given input and returns string
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (typeof input !== 'number')
       return NaN;
    
    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;

}