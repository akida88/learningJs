class SchoolClass {
   teacher=undefined;
   students=[];
   topic=undefined;
   constructor(teacher,topic){
      this.topic=topic;
      this.teacher=teacher;
   }
   addStudents(student){
      this.students.push(student);
   }
   getAverageCourseScore(){
      //[ [] [] []] arr.flat()
      //"Math"         "Math"
      const total = this.students.map(x=>x.grades)
       .flat()
       .filter(grade=>grade.schoolClass===this.topic)
       .reduce((acc, c) => acc + c, 0);
      return Number(total / students.length).toFixed(2);
   }
}

module.exports ={SchoolClass}
