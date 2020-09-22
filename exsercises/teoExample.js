const  functionA = ()=>{
   const x = 1;
   const y = 2;
   const obj ={y,x}
   const objTwo = {...obj};
   const objThree = obj;
   obj.x=3;
   objTwo.x=6;
   console.log(obj.x);
   objThree.x=9;
   console.log(x);
   console.log(obj.x);
   console.log(objTwo.x);
}
functionA();