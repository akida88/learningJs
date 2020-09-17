
// declaring a variable, set it to number and then change it's type and set it to a string
// let x = 1;
// x = 'a';

function sum() {
   let total = 0;
   for (let value of arguments)
      total += value;
   return total;
   // console.log(arguments);
   // return a + b; // 1 + undefined =NaN
}

console.log(sum(1,2,3,4,5));