
const circle = {
   radius: 1, // to create a read only property we need a getter:
   get area() {
      return Math.PI * this.radius * this.radius;
   }
};

console.log(circle.area);