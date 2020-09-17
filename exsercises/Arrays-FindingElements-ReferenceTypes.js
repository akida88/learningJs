
const courses = [
   { id: 1, name: 'a'},
   { id: 2, name: 'b'},
];

// console.log(courses.includes({ id: 1, name: 'a' }));
// Gives false because the objects are different references, because are in different memory
// predicate or call back function(element) - we name the element course so it can be the precise as possible to the problem we salve
// the parameter of the function is called course because each element in the array is a course object
const course = courses.find(function(course) {
   // looking for a course with a name equal to 'a' so:
   return course.name === 'a';
});

console.log(course);