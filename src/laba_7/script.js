// Функція для перевірки чи є аргумент числом і чи воно парне чи непарне
function checkNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return ""; 
    }
    return num % 2 === 0 ? "Парне" : "Непарне";
}

// Функція для перевірки чи є число простим та повернення суми перших п'яти простих чисел
function sumOfFirstFivePrimes() {
    let primes = [];
    let num = 2;
    while (primes.length < 5) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
        num++;
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}

// Функція для обчислення суми ряду чисел з постійно зростаючою кількістю одиниць
function sumOfSeries(n) {
    let sum = 0;
    let current = 0;
    for (let i = 1; i <= n; i++) {
        current = current * 10 + 1;
        sum += current;
    }
    return sum;
}

console.log(checkNumber(2)); 
console.log(sumOfFirstFivePrimes()); 
console.log(sumOfSeries(5));
