const circle = {
   radius: 1,
   draw() {
      console.log('draw');
   }
}

// coping the properties of an object into another object
// old version
// const another = {};
// for (let key in circle)
//   another[key] = circle[key];

//another['radius'] = circle['radius'];

// 1vi variant- const another = Object.assign({}, circle);
// it takes all the properties and methods of the other objects

// ako ima obekt
// const another = object.assign({
//   color: 'yellow'
//}, circle);

//2ri nachin=
const another = { ...circle };

console.log(another);