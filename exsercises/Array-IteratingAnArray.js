
const numbers = [1, 2, 3];

// to itterate an array use for of loop
for (let number of numbers)
   console.log(number);

numbers.forEach(function(number) {
   console.log(number);
});

numbers.forEach(number => console.log(number));