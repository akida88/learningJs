
let number = 10;

function increase(number) {
    number++; // is indipendant than the let number
}
increase(number);
console.log(number);

// if Let is an object:

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
// the object will point to the same object in let
