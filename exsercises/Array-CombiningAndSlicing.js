
const first = [1, 2, 3];
const second = [4, 5, 6];

//If its an object - a reference type. The object is not copied, only its type
//const first = [{ id: 1 }];

const combined = first.concat(second);

const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);
