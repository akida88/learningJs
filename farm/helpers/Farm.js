import faker from "faker";
export default class Farm{
   farmName= undefined;
   location=undefined;
   constructor(latConst=null,lngConst=null,farmName=null){
      this.location={
         lat: latConst!==null?latConst:parseFloat(faker.address.latitude()),
         lng:lngConst!==null?lngConst:parseFloat(faker.address.longitude())
      },
      this.farmName=farmName!==null?farmName:faker.company.companyName()
   }
   liveStock=[];
   markerContent=()=>{
      return `${this.farmName} with location ${this.location.lat} ${this.location.lng}`;
   }
   addAnimals = (animals)=>{
      this.liveStock=[...animals];
   }
}
