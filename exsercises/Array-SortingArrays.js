// for numbers and strings in an array
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// for objects
const courses = [
   { id: 1, name: 'Node.js' },
   { id: 2, name: 'javaScript' },
];

courses.sort(function(a, b) {
   // a < b => -1
   // a > b => 1
   // a===b => 0
   // za da se napravqt s glavna bukva:
   const nameA = a.name.toUpperCase();
   const nameB = b.name.toUpperCase();
 //  const nameC = c.name.toLowerCase();

   if (nameA < nameB) return -1;
   if (nameA > nameB) return 1;
   return 0;
});

console.log(courses);