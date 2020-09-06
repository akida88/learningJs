import {getCaloriesByAnimalType} from "./helperFunctions";
export default class Animal{
    type=undefined;
    food=[];
    name=undefined;
   constructor(type,food,name){
      this.type=type;
      this.food=food;
      this.name=name;
   }
   animalGreat=()=>{
      return `My name is: ${this.name}, my type is: ${this.type} i like ${this.food.join()}`;
   }
   caloriesYield =()=>{
      return  getCaloriesByAnimalType(this);
   }
   animalInfo=()=>{
      return `my calories:${this.caloriesYield()} ${this.animalGreat()}`;
   }
}