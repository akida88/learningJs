const {School} = require("./School");
const SchoolClass = require("./SchoolClass");
const Student = require("./Student");
const Teacher = require("./Teacher");

const run=()=>{

   const school  = new School("testSchool",new Date().toLocaleDateString());
   console.log(school.year);
   const students = [new Student(),new Student(), new Student()];
   school.teachers=[new Teacher("Teo"),new Teacher("Tina")];
   const teacherOne = school.teachers[0];
   const teacherTwo = school.teachers[1];
   school.schoolClasses=[new SchoolClass(teacherOne,"Cs"),new SchoolClass(teacherTwo,"Painting"),new SchoolClass(teacherOne,"Chemistry")];
   school.students=students;


}
run();