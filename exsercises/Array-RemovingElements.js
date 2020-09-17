
const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// Beginning
const first = numbers.shift();
// console.log(first);

// Middle
// numbers.slice(index of that Element, number of else. we want to delete)
numbers.splice(2, 1);
console.log(numbers);