
const numbers = [3, 4];
// We cannot reassign the constant numbers as something else:
// numbers = []; but we can change or add it's elements
// Arrays are objects

// Adding an el. to the End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);