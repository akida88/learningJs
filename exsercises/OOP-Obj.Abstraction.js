function Circle(radius) {
   this.radius = radius;

   let defaultLocation = { x: 0, y: 0};
   //let computeOptimumLocation = function(factor) {

   this.getDefaultLocation = function() {
      return defaultLocation;
   }


   this.draw = function(){
      //computeOptimumLocation(0.1);
      // defaultLocation
      // this.radius

      console.log('draw');
   };

   Object.defineProperty(this, 'defaultLocation', {
      get: function() {
         return defaultLocation;
      },
      set: function(value) {
         if (!value.x || !value.y)
            throw new Error('Invalid location.')

         defaultLocation = value;
      }
   });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();