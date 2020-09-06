import { CustomMap} from "./helpers/CustomMap";
import Farm from "./helpers/Farm";
import Animal from "./helpers/Animal";
import {createFarmStock,removeFarmStock,getAnimalByName} from "./helpers/helperFunctions";
const map = new CustomMap("map");
let farm =  new Farm();
////43.332247, 22.998738
const TinaFarm = new Farm(43.332247,22.998738,"Tina's farm");
console.log(TinaFarm);
farm = createFarmStock(farm);
console.log(farm);
map.addMarker(farm);
map.addMarker(TinaFarm);

const farmChangedAnimals = removeFarmStock(farm,"goat");
console.log(farmChangedAnimals);
console.log(getAnimalByName(farmChangedAnimals,farmChangedAnimals.liveStock[0].name))
console.log(getAnimalByName(farmChangedAnimals,farmChangedAnimals.liveStock[farmChangedAnimals.liveStock.length-1].name))
//const animal = new Animal("fish",["vodorasli","plankton"],"Tina");
//console.log(`${animal.caloriesYield()} ${animal.animalGreat()}`)
//console.log(animal.animalInfo())