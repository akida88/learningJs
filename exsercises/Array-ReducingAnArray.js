
const numbers = [1, -1, 2, 3];

// Calculating the sum of the elements in the array
// let sum = 0;
// for (let n of numbers)
//    sum += n; // sum = sum + n;


// a = 0, c = 1 => a=1
// a=1, c=-1 => a=0
// a=0, c=2 => a=2
// a=2, c=3 => a=5
const sum = numbers.reduce(
   (accumulator, currentValue) =>  accumulator + currentValue
);
// } 0); - 0 is initial value of the accumulator

console.log(sum);