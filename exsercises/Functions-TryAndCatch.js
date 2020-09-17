const person = {
   firstName: 'Mosh',
   lastName: 'Hamedani',
   get fullName() {
      return `${person.firstName} ${person.lastName}`;
   },
   set fullName(value) {
      // const e = new Error(); // an error object
      // throw e; // we refer to that as an exception

      if (typeof value !== 'string')
         throw new Error('Value is not a string.'); // throw an exeption with throw

      const parts = value.split(' ');
      if (parts.length !== 2)
         throw new Error('Enter a first and last name.')

      this.firstName = parts[0];
      this.lastName = parts[1];
   }
};

try {
   person.fullName = ''; // here is where we receive the exception
}
catch (e) {
   alert(e);
}

console.log(person);