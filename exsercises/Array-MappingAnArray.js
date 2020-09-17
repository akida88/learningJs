
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// Maping the numbers into strings
// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);


// Maping the numbers to an object

// const items = filtered.map(n => {
//   return { value: n };
// });

// to shorten the code we need to put the object in ()
// const items = filtered.map(n => ({ value: n}));
// but we can chain them into:
numbers
   .filter(n => n >= 0)
   .map(n => ({ value: n})) // because it returns a new array we can call the filter or map array again
   .filter(obj => obj.value > 1)
   .map(obj =>obj.value);

console.log(items);