
let school(virus);
let teachers = {
    teacherOne: 'a',
    teacherTwo: 'b',
 };
let students = 1;
 function increase(students) {
    students++;
 };
let classes = {
   first: 'a',
   second: 'b',
   third: 'c',
};




function calculateGrade(marks) {
   let sum = 0;
   for (let mark of marks)
       sum += mark;
   let average = sum / marks.length;

   if (average < 60) return 'F';
   if (average < 70) return 'D';
   if (average < 80) return 'C';
   if (average < 90) return 'B';
   return 'A';
};

console.log(calculateGrade(marks));

