
// function sum() {
//    let total = 0;
//    for (let value of arguments)
//       total += value;
//    return total;
// }

// console.log(sum(1, 2, 3, 4));

console.log(sum([1,2,3,4]));

function sum(...items) { // the rest operator ...
   if (items.length === 1 && Array.isArray(items[0]))
      items = [...items[0]];

   return items.reduce((a, b) => a+b);
}