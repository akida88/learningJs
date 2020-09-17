
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

//pointing to the same object in memory:
let address3 = address1;

// Using the ConFunc to create two address objects
// Constructor Function
function Address(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

// To check if 2 objects are equal we need to check their properties first
function areEqual(address1, address2) {
   return address1.street === address2.street &&
      address1.city === address1.city &&
      address1.zipCode === address2.zipCode;
}

// check if the 2 variables are referencing to the same object
function areSame(address1, address2) {
   return address1 === address2;
}