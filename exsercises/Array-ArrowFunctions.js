
const courses = [
   { id: 1, name: 'a' },
   { id: 2, name: 'b' },
];

// (Course goes to course.name equals 'a')
// So we are finding a Course with a name equal to 'a'
const course = courses.find(courses => courses.name === 'a');

console.log(course);