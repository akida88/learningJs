
showPrimes(20);

// Prime numbers (whose factors are only 1 and itself, cant be divided evenly into another number)
// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

// Composite numbers ()

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        // 2 - current number (i)
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0){
                isPrime = false;
                break;         
            }
        }

        if (isPrime) console.log(number);
    }
}