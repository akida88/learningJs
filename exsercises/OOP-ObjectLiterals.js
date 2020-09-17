
const circle = {
   radius: 1, // key value pair
   location: {
      x: 1, // value pairs
      y: 1
   },
   draw: function() { // the key is draw, the value is a function
      console.log('draw');
   }
}

circle.draw(); // access it's members
