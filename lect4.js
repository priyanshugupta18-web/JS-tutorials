// Question 1

/*let marksOfStudents = [85, 97, 44, 37, 76, 60];

let sum = 0;
for(let val of marksOfStudents) {
    sum =  sum + val;
}

let avgMarks = (sum/(marksOfStudents.length));

console.log(`average marks of the class = ${avgMarks}`);
*/

// Question 2
/*
let prices = [250, 645, 300, 900, 50];

for(let i = 0; i < prices.length; i++){
    prices[i] = (prices[i] - (prices[i] * 0.1));
}
console.log("the prices after applying the discount:-");

for (let val of prices) {
    console.log(val);
}
*/

// val is just a copy variable, it is not a pointer so you need to understand that updating val is not going to help, rather update the pointers, it will directly update the array.

// Array methods
/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netfflix"];

// a
companies.shift();
console.log(companies);


// b
companies.splice(2, 1, "Ola");
console.log(companies);

// c
companies.push("Amazon");
console.log(companies)
*/



