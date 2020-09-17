try {
   const number = [1, 2, 3, 4];
   const count = countOccurrences(null, 1);
   console.log(count); // try catch block
}

catch (e) {
   console.log(e.message);
}

function countOccurrences(array, searchElement) {
   if (!Array.isArray(array)) // if is not an array throw an exeption
      throw new Error('Invalid array.');

   return array.reduce((accumulator, current) => {
      const occurrence = (current === searchElement) ? 1 : 0;
      return accumulator + occurrence;
   }, 0);
}