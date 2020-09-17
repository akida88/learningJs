
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));

// That will return the last index of the given element or -1 if it doesn't exist
console.log(number.lastIndexOf(1));

// if a given element exist in array:
console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

// All the methods have a second argument called fromIndex which is optional
//indexOf(1, 2) is searching for 1 but starting from where the search will begin