
function start() {
   for (let i = 0; i < 5; i++)
      console.log(i);

   console.log(i);
}

start();

// because we used var the variable is accessible anywhere in the function
function start() {
   for (let i = 0; i < 5; i++) {
      if (true) {
         var color = 'red';
      }
   }

   console.log(color);
}

start();