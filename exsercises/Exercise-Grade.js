
const marks = [80, 80, 50];
// Average is 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));


function calculateGrade(marks) {
    // To calculate the avarege we need to declare a variable sum:
    let sum = 0;
    // Using the For loop to calculate the marks and calculate the sum of it
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}
----------------------------

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

// The array can be anything. Calculating the average of a bunch of numbers
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    // let average = sum / array.length;
    // return average;
    // Combining the let and return:
    return sum / array.length;
}