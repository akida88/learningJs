
const person = {
   firstName: 'Mosh',
   lastName: 'Hamedani',
   get fullName() {
      return `${person.firstName} ${person.lastName}`;
   },
   set fullName(value) {
      const parts = value.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
   }
};

person.fullName = 'John Smith';

// console.log(person.firstName + ' ' + person.lastName)
// Using template literal:
//console.log(`${person.firstName} ${person.lastName}`);

// better approach is to define a method in the object called fullName
// console.log(person.fullName()); -is a method
// getters => access properties; setters => change (mutate) them

console.log(person);