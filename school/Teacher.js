const Grade = require("./Grade");

class Teacher {
   name=undefined;
   schoolClasses=[];
   constructor(name){
      this.name=name;
   }
   gradeClassStudents(students,schoolClass){
      const max =6;
      const min =2;
      for (const student of students) {
         //TODO: math.floor maybe needed
         const grade = Math.random() * (max - min) + min;
         const studentGrade = new Grade(schoolClass,grade);
         student.addGrade(studentGrade);
      }
   }

   presentTeacher(){
      //console.log(this) //object object
      return `${this.name} number of courses: ${this.schoolClasses.length} average students grade: ${this.getTeacherStudentsAverageGrade()} `
   }
   holdClassExam(courseName){
      const course =this.getCourseByName(courseName);
      this.gradeClassStudents(course.students,courseName);
   }
   getTeacherStudentsAverageGrade(){
      let totalGrades=[];
      for (const schoolClass of this.schoolClasses) {
         //"music"-> 5 6  sport->4,5 'painting"-2-3
           schoolClass.students.forEach(student =>{
                  student.grades
                  .filter(x=>x.schoolClass===schoolClass)
                  .forEach(g=> totalGrades.push(g.score));
           })
      }
      const total = totalGrades.reduce((x,grade)=>x+grade,0);
      return Number(total / totalGrades.length).toFixed(2);
   }

   getCourseByName =(courseName)=> this.schoolClasses.find(x=>x.topic===courseName);

   getAverageScoreForTeacherCourse(courseName){
      const course =this.getCourseByName(courseName);
      return course.getAverageCourseScore();
   }
}

module.exports ={Teacher}
