
// let address = createAddress('a', 'b', 'c');

// to create a new Address object using the constructor function:
let address = new Address('a', 'b', 'c');

console.log(address);

// Factory function
function createAddress(street, city, zipCode) {
   return {
      street,
      city,
      zipCode
   };
}

// Constructor function
function Address(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
}

showAddress(address);