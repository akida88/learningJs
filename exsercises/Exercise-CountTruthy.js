
// const isActive = true;
// const name = 'Mosh'; // Truthy value (true)
// const name = ''; // Falsy (false)
// if (isActive) console.log('Hello');

// List of falsy values: undefined, null, '', false, 0, NaN

const array = [0, null, undefined, 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {  
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}