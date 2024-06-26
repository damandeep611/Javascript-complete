// * function which checks prime number or not
function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
console.log(checkPrime(2));

// * function which finds all prime numbers upto a given number
function allPrime(num) {
  // initialize an array of booleans, assuming all numbers are prime
  const isPrime = new Array(num + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  // use the sieve of eratosthenes algorithm
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // mark multiples of i as not prime
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }
  // now collect all prime number found in n number
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}
// console.log(allPrime(30));

// *Reverse a String without using the reverse function
function reverseString(str) {
  // first we will convert the string to an array of characters
  const chars = str.split("");

  //swapping splitted characters using two pointers
  let left = 0,
    right = chars.length - 1;
  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }
  // join the character back into a string
  return chars.join("");
}

// console.log(reverseString("Invincible"));
