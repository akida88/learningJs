class Student{
   name=undefined;
   schoolClasses =[];
   grades=[];
   constructor(name){
     this.name=name;
   }
   getAverageScorePerClass(schoolClass){
      const totalForClass = this.grades.filter(grade=>grade.schoolClass.topic===schoolClass)
                 .map(x=>x.score).reduce((acc, c) => acc + c, 0);
      return Number(totalForClass / grades.length).toFixed(2);
   }
   getAverageScore(){
      const total = grades.map(x=>x.score).reduce((acc, c) => acc + c, 0);
      return Number(total / grades.length).toFixed(2);
   }
   joinClass(schoolClass){
      this.schoolClasses.push(schoolClass);
   }
   removeClass(schoolClass){
      const classIndex = this.schoolClasses.findIndex(x=>x.topic===schoolClass);
      this.schoolClasses.splice(classIndex,1);
      //["Math","English","Sport","music"] =>classIndex=1=> this.schoolClasses.splice(1,1)=>["Math","Sport","Music"]
     //["Math","English","Sport","music"] =>classIndex=1=> this.schoolClasses.splice(1,1,new Grade("Korean"))=>["Math","Korean","Sport","Music"]
   }
   addGrade(grade){
      this.grades.push(grade);
   }
   isAttendingCourse=(courseName)=>this.schoolClasses.find(x=>x.topic ===courseName) !==undefined;
}
module.exports ={Student}

