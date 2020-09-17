
// Creating a Blog Post Object with the properties: title, body, author, views, comment (author, body), isLive (true false)
//Using an object literal syntax

let post = {
   title: 'a',
   body: 'b',
   author: 'c',
   views: 10,
   // Comments should be an array so we write [] and because it has 2 properties, so each comment should be an object
   comments: [
      { author: 'a', body: 'b' }, // Object literal syntax
      { author: 'c', body: 'd' },
   ],
   isLive: true
};

console.log(post);