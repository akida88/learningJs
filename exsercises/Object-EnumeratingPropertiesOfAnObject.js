
const circle = {
   radius: 1,
   draw() {
      console.log('draw');
   }
};

for (let key in circle)
   console.log(key, circle[key]);

for (let key of circle) // can be used only with an iterable -arrays and maps
   console.log(key);
