class School{
   students=[];
   teachers =[];
   schoolClasses =[]
   year=undefined;
   name=undefined;

   constructor(name=x,year=x){
      this.name=name,
      this.year=year
   }

   addTeacher(teacher){
      this.teachers.push(teacher);
   }
   removeTeacher(teacher){
      const teacherIndex = this.teachers.findIndex(x=>x.name===teacher);
      this.schoolClasses.splice(teacherIndex,1);
   }
   addStudent(student){
      this.students.push(student);
   }
   removeStudent(student){
      const studentIndex = this.students.findIndex(x=>x.name===student);
      this.students.splice(studentIndex,1);
   }
   addClass(course){
      this.schoolClasses.push(course);
   }
   removeClass(course){
      const courseIndex = this.schoolClasses.findIndex(x=>x.name===course);
      this.schoolClasses.splice(courseIndex,1);
   }

}

module.exports ={School}
