// sum of two numbers

/*function reverseAnArray(arr) {
    let len = arr.length
    let temp = null;
    for(let i = 0; i<((arr.length)/2); i++){
        temp = arr[i];
        arr[i] = arr[len - (i+1)];
        arr[len - (i+1)] = temp;
    }
    console.log(arr);
}

let arr = ["Arjun", "Vijay", "Sonu", "Rajat"];
reverseAnArray(arr);
*/

// sum of two numbers

/*
function sumOfTwoNumbers(a, b){
    console.log(a + b);
}


sumOfTwoNumbers(3, 4);
*/


// we can also use return keyword
/*
function sumOfTwoNumbers(a, b){
    return (a + b);
}

console.log(`Output = ${sumOfTwoNumbers(3, 4)}`);
*/

// arrow functions

/*
const mult = (op1, op2) => {
    return (op1*op2);
}
*/

// practice questions

// Question 1
/*
function vowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count ++;
        }
    }
    return count;
}
*/

//Question 2
/*
const vowels = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count ++;
        }
    }
    return count;
}
*/

// forEach loop: method of array used to perform some operation on individual values of arrays. But changes the original array.

// question
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((val) => {
    console.log(val*val);
})
*/

// .map: method of array used to perform some operation on inndividual values of arrays. It can update the original array and can also create a new array with all the updation(using return)

// question
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

let newArray = arr.map((val) => {
    return val * val;
})
*/

// .filter: method of array used to filter some values from an array and store it in some other array on the basis of some filter condition (with the help of return keyword).

// question

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArray = arr.filter((val) => {
    return (val % 2 === 0);
})
*/

// .reduce: method of array used to reduce the whole array to a single value(number or string...etc) (like if we have to calculate mean or calculate sum...etc)

// question 

// return max
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArray = arr.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
} )
*/

//return min
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArray = arr.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
})
*/

// return sum 
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArray = arr.reduce((acc, curr) => {
    let sum = acc + curr
    return sum;
})
*/

// Question1
/*
let marks = [80, 95, 34, 92, 93, 91, 60];

let aceScores = marks.filter((val) => {
    return val > 90;
})
*/

//Question2
/*
let n = prompt("Enter the number of elements in arr");

let arr = [];

for(let i = 0; i < n; i++) {
    arr.push(i+1);
}

let sum = arr.reduce((acc, curr) => {
    summation = acc + curr;
    return summation;
})

let prod = arr.reduce((acc, curr) => {
    product = acc * curr;
    return product;
})
*/

