
const movie = {
    title: 'a',
    releaseTear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj) {
    // showing all the properties of the object which are types of string
    for (let key in obj)
        // console.log(key);
        //should check the type and if its string should desplay the property and it's value
        // To get the value of the property use [] and to check the type use typeof
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}