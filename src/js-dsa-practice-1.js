//ESM (ES Module) syntax
/*
export default function sum(a, b) {
    return a + b;
};
*/
export function sum(a, b) {
    return a + b; //(1)
};//Big-O Time Complexity = 1 -> O(1) - Constant
export function substraction(a, b) {
    return a - b; //(1)
}; //Big-O Time Complexity = 1 -> O(1) - Constant

//Fibonacci Sequence
export function fibonacci(n) {
    let sequence = []; //(1)
    for (let i = 1; i <= n; i++) {
        let current; //(1n) 
        if (i == 1) { 
            current = 0; 
        } else if (i == 2) { 
            current = 1;
        } else if (i > 2) { 
            current = sequence[i - 2] + sequence[i - 3];
        } //(1n), this kind of if else will be considered as 1 execution in the worst case (because the system is choose)
        sequence.push(current); //(1n)
    }
    return sequence; //(1)
} //Big-O Time Complexity = 3n + 2 = 3n = n -> O(n) - Linear
//Pro Solution 1
export function fibonacci1(n) {
    /*
    if (n == 1) { //this part is my custom code to handle n = 1
        return [0];
    } 
    */
    let sequence = [0, 1]; //(1)
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]; //(1n)
    }
    return sequence; //(1)
} //Big-O Time Complexity = n + 2 = n -> O(n) - Linear
//this solution doesn't cover if the n is 1 or n is 0 or n < 0

//Factorial 
export function factorial(n) {
    if (n == 0) {
        return 1; //(1)
    }
    let result = 1 //(1)
    for (let i = n; i > 0; i--) {
        result *= i; //(1n)
    }
    return result; //(1)
} //Big-O Time Complexity = n + 3 = n -> O(n) - Linear
//Pro Solution 1
export function factorial1(n) {
    let result = 1; //(1)
    for (let i = 2; i <= n; i++) {
        result = result * i; //(1n)
    }
    return result; //(1)
} //Big-O Time Complexity = n + 2 = n -> O(n) - Linear

//Prime Number
export function isPrime(n) {
    if (n < 2) {
        return false; //(1)
    }
    let divider = n / 2; //(1)
    for (let i = 2; i <= divider; i++) { //check only the number from 2 untill half
        if (Number.isInteger(n / i) == true) {
            return false; //(1n)
        }
    }
    return true; //(1)
} //Big-O Time Complexity = n + 3 = n -> O(n) - Linear
//Pro Solution 1
export function isPrime1(n) {
    if (n < 2) {
        return false; //(1)
    }
    for (let i = 2; i < n; i++) { //check all number untill last number before n
        if (n % i === 0) {
            return false; //(1n)
        }
    }
    return true; //(1)
} //Big-O Time Complexity = n + 2 = n -> O(n) - Linear
//Pro Solution 2
export function isPrime2(n) {
    if (n < 2) {
        return false; //(1)
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { //check only i untill square root of n, because 
        if (n % i === 0) { //whenever n = a * b, a or b (or both) must be less or equal to square root of n
            return false; //(1 sqrt(n))
        }
    }
    return true; //(1)
} //Big-O Time Complexity = sqrt(n) + 2 = sqrt(n) -> O(sqrt(n)) - Linear

//CJS (Common JS) syntax
/*
function sum(a, b) {
    return a + b;
};

module.exports = {sum};
*/