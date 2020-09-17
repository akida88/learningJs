
const numbers = [1, 2, 3];

// To check if all the numbers are positive
const allPositive = numbers.every(function(value) {
   return value >= 0;
});

console.log(allPositive);

// To check if we have at least 1 element that matches the criteria
const atLeastOnePositive = numbers.some