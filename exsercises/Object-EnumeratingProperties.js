
const circle = {
   radius: 1,
   draw() {
      console.log('draw');
   }
}

// Preminava prez vsichkite properties and methods na obekta const
for (let key in circle)
   console.log(key, circle[key]);

// Can only be used with iterables (arrays, maps)
for (let key of Object.keys(circle))
   console.log(key);

for (let key of Object.entries(circle))
   console.log(key);

// If a given object has a given property or method
if ('radius' in circle) console.log('yes');