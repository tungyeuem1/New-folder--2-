// Hàm kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function findPrimes(N) {
    let primes = [];
    for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
 n = parseInt(prompt("Nhập số N:"));
console.log(findPrimes(n)); 

