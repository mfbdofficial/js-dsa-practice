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

//Power of Two
export function isPowerOfTwo(n) {
    if (n < 1) {
        return false; //(1)
    } else if (n === 1) {
        return true; //(1)
    }
    let accumulation = 1; //(1)
    for (let i = 1; accumulation <= n; i++) { //no loop just based on n, but based on n "with length decreasing for every loop"
        accumulation *= 2; //(1 log n)
        if (accumulation == n) {
            return true; //(1 log n)
        }
    }
    return false; //(1)
} //remember when we do Big-O notation, the rule is like this :
//- adds or subtracts -> i++ or i-- -> O(n)
//- multiplies or divides -> i *= 2 or i /= 2 -> O(log n) 
//- nested loop -> O(n^2)
//Big-O Time Complexity = 2 log n + 4 = (2 log n) -> O(log n) - Logaritmic
//Pro solution 1
export function isPowerOfTwo1(n) {
    if (n < 1) {
        return false; //(1)
    }
    while (n > 1) { 
        if (n % 2 !== 0) {
            return false; //(1 log n)
        }
        n = n/2; //(1 log n) -> reducing the input sized n by half make it the loop 2 times less
    } //that's why this is considered as log n in Big-O Time Complexity
    return true; //(1)
} //Big-O Time Complexity = 2 log n + 2 = (2 log n) -> O(log n) - Logaritmic
//Pro solution 2
export function isPowerOfTwoBitWise(n) {
    if (n < 1) { 
        return false; //(1)
    }
    return (n & (n - 1)) === 0; //(1)
} //Big-O Time Complexity = 2 -> O(2) - Constant

//Recursive Fibonacci Sequence
export function recursiveFibonacci(n) {
    if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1
    }
    return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
} //Big-O Time Complexity = O(2^n) - Recursive
//Pro solution 1
export function recursiveFibonacci1(n) {
    if (n < 2) {
        return n;
    } 
    return recursiveFibonacci1(n - 2) + recursiveFibonacci1(n - 1); //everytime recursive happen, 2 function more is execute
} //Big-O Time Complexity = O(2^n) - Recursive

//Recursive Factorial of a Number
export function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1); //1 recursive execute based from how much the n is
} //Big-O Time Complexity = O(n) - Recursive


//CJS (Common JS) syntax
/*
function sum(a, b) {
    return a + b;
};

module.exports = {sum};
*/