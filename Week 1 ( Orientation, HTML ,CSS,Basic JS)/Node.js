// Assignment
// Create a variable for each of the following: 
// your favorite color, your height in centimeters, 
// and whether you like pizza.Use appropriate variable declarations(let, const, or var).
//Try logging it using console.log
const favoriteColor = "Black";
let height = 68;
let likePizza = true;
console.log(favoriteColor);
console.log(height);
console.log(likePizza);
// Assignment #1
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
function sum(numOne, numTwo) {
    return (numOne + numTwo);
}
console.log(sum(5, 7));
console.log(sum(-6, 4));
console.log(sum("one", " Two"));

// Assignment #2
// Write a function called canVote that returns true or false
//if the age of a user is > 18
function canVote(age)
{
    return (age > 18);
}
let person1_age = 16;
let person2_age = 20;
if (canVote(person1_age)) {
    console.log("You are eligible to cast a vote.");
}
else {
    console.log("You are not eligible to cast a vote.");
}
let castVoteCheck = canVote(person2_age);
if (castVoteCheck) {
    console.log("You are eligible to cast a vote.");
} else {
    console.log("You are not eligible to cast a vote.");
}
// Assignment
// Write an if/else statement that checks if a number is even or odd. 
// If it's even, 
// print "The number is even." Otherwise, print "The number is odd."
let num_One = 15;

if (num_One % 2 === 0) {
    console.log(num_One, "is even number");
} else {
    console.log(num_One, "is odd number");
}
let num_Two = 88;
if (num_Two % 2 === 0) {
    console.log(num_Two, "is even number");
} else {
    console.log(num_Two, "is odd number");
}
// Assignment
// Write a function called sum that finds the sum from 1 to a number
function findSum(num)
{
    let sum = 0;
    let i = 1;
    while (i<=num) {
        sum += i;
        i++
    }
    return sum;
}
let num = 10;
console.log("sum of Number from 1 to  ", num, " = ", findSum(num));

let user = ["Harkirat", "singh", "zafar", "diljit"];
let totaluser = user.length;
for (let i = 0; i < totaluser; i++)
{
    console.log(user[i]);
}
let User = {
    name: "harkirat",
    age: 20,
    gender : "male"
}
console.log(User.name);
console.log(User["gender"]);
console.log(User["age"]);


// Assignment #1
// Write a function that takes a user as an input and greets them with 
// their name and age
function greetUser(name, age) {
    console.log('Hello ' ,name, ' you are ', age , ' years old.');
}

greetUser("Harkirat", 21);


// Assignment #2
// Write a function that takes a new object as input which has name,
//     age  and gender and greets the user with 
// their gender(Hi Mr / Mrs / Others harkirat, your age is 21)
// Assignment #3
// Also tell the user if they are legal to vote or not
function greetUserWithGender(user) {
    let salutation;

    const gender = user.gender.toLowerCase();

    if (gender === "male") {
        salutation = "Mr.";
    } else if (gender === "female") {
        salutation = "Mrs.";
    } else {
        salutation = "Mx.";
    }

    console.log(`Hi ${salutation} ${user.name}, your age is ${user.age}.`);
    if (user.age) {
    console.log("You are eligible to cast a vote.");
} else {
    console.log("You are not eligible to cast a vote.");
}
}

let person = {
    name: "Harkirat",
    age: 21,
    gender: "Male" // This can be "male", "Male", "MALE", etc.
};

greetUserWithGender(person);


// Assignment
// Write a function that takes an array of numbers as input, and
//  returns a new array with only even values.Read about filter in JS

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.filter(evenArray);
function evenArray(num)
{
    return (num % 2 === 0);
}

// let length = result.length;
// for (let i = 0; i < length; i++)
// {
//     console.log(result[i]);
// }
result.forEach(num => console.log(num));
console.log("*********************************")
// Assignment
// Write a function that takes an array of users as inputs
//  and returns only the users who are more than 18 years old

let arrayUser = [
    {
        firstName: "Harkirat",
        Age: 21
    },
    {
        firstName: "Zafar",
        Age: 17
    }
];

// Function to filter users who are more than 18 years old
function getAdultUsers(users) {
    return users.filter(user => user.Age > 18);
}

let adults = getAdultUsers(arrayUser);

// Print the adult users
adults.forEach(adult => {
    console.log(adult.firstName, "  ", adult.Age);
});


// Assignment
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

const info = [
    {
        name: "Harkirat",
        age: 21,
        gender: "Male"
    },
    {
        name: "Hafsa",
        age: 17,
        gender: "female"
    },
    {
        name: "Mahi",
        age: 21,
        gender: "female"
    }
];

function ageMale(info) {
    return info.filter(i => i.age > 18 && i.gender.toLowerCase() === "male");
}

let male = ageMale(info);
male.forEach(male => {
    console.log(male.name, "  ", male.age, "  ", male.gender);
});
