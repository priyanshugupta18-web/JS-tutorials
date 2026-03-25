// Question 1
// print all the even numbers from 1 to 100

/*
let count = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
        count = count + 1;
    }
}

console.log("count =", count)
*/

// Question 2
// create a game of number guessing and asking user to input a number untill he guesses it correctly
/*
let num = 25;

let userInput;
do{
    userInput = Number(prompt("Enter the number"));
    if (userInput !== num) {
        console.log("Retry!");
    }
} while(userInput !== num);

console.log("You have guessed it right!");
*/

// strings

// Question 1
/*
let fullName = prompt("Enter your fullname without whitespaces");

let userName = "@" + fullName + fullName.length;
console.log(`The username = ${userName}`);
*/