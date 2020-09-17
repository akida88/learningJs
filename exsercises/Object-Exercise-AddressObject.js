// Creating an Address Object with 3 properties:
// street
// city
// zipCode
// Then create a function called showAddress that takes the address object and
//  displays all the properties in this object along with their value

const address = {
  street: 'a',
  city: 'b',
  zipCode: 'c'
};

// The function takes the address object: showAdress(adress)
function showAddress(address) {
   for (let key in address)
   // Using the bracket notation to add the
      console.log(key, address[key]);
}

showAddress(address);