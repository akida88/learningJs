const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, 'а', ...second, 'б'];
// [...first, ...second] = [1, 2, 3, 4, 5, 6]

//const copy = combined.slice(2, 4);
const copy = [...combined];
// this will return all the elements of the combined array and put them into this new array