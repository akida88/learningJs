import Animal from "./Animal";
import faker from "faker";

export const createFarmStock =(farm)=> {
   //TODO: make min max as coming outside values not hard codded
  const animalNumber =Math.floor(Math.random() * (50-2) + 1);
  const animalTypes = ["pig","goat","dog","fish"];
  const animalFoods ={
     "pig":["erma","hlab","chicken"],
     "goat":["grass","wheat","salt"],
     "dog":["meat","bread","grass"],
     "fish":["fish","vodorasli","plankton"],
  }
  const animals=[];
  for (let i = 0; i < animalNumber; i++) {
   const animalTypeFaker= faker.random.arrayElement(animalTypes);
   console.log(`${animalType} i am coming from faker random`);
   const animalTypeIndex =Math.floor(Math.random() * (3 - 0) + 0);
   const animalType= animalTypes[animalTypeIndex];
   const animalFood = animalFoods[animalType];
   const animalName= faker.name.firstName();
   const animal = new Animal(animalType,animalFood,animalName);
   animals.push(animal);
}
   farm.addAnimals(animals);
   return farm;
};
export const removeFarmStock=(farm,type)=>{
   const liveStock = farm.liveStock;
   const newAnimals = liveStock.filter(animal=>animal.type!==type);
   farm.liveStock=newAnimals;
   return farm;
}

export const getAnimalByName=(farm,animalName)=>{
   const liveStock = farm.liveStock;
   const  animalFromLiveStock= liveStock.find(animal=>animal.name ===animalName);
   const index = liveStock.findIndex(x=>x.name ===animalName);
   return `${animalFromLiveStock.animalGreat()} and my liveStock index is ${index}`;
}
export const getCaloriesByAnimalType=(animal)=>{
    switch (animal.type) {
       case "pig":
         return 500;
      case "goat":
         return 200;
      case "dog":
         return 100;
      case "fish":
         return 50;
       default:
         return 0;
    }
}
