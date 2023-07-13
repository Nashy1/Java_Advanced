// //Practice exercise 2.1
// //What are the types of these variables listed below?
// let str1 = 'Laurence'; //string
// let str2 = "Svekis"; //string
// let val1 = undefined; //undefined
// let val2 = null; //object
// let myNum = 1000; // number


// //Practice exercise 2.2
// var firstname = "Mac";
// var age = "20";
// var js = true;

// console.log(`Hello my name is ${firstname}, I am ${age} years old an I can code JavaScript: ${js}`);


// // Practice exercise 2.3
// let a2 = window.prompt("Value 1?");
// let b2 = window.prompt("Value 2?");
// a = Number(a);
// b = Number(b);
// let hypotenuseVal = ((a * a) + (b * b))**0.5;
// console.log(hypotenuseVal);

// // Practice exercise 2.4
// var a = 2;
// var b = 5;
// var c = 7;

// a = b+a
// b = a /c
// c = c%b
// console.log(a ,b ,c);


//Chapter project

var miles = 111;
var km = miles * 1.60934;
console.log(`The distance of ${miles} miles is equal to ${km.toFixed(2)} kilometers`);

let inches = prompt('Enter your height in inches');
let pounds = prompt('Enter your weight is pounds');
let weight = pounds / 2.2046;
let height = inches * 2.54; 
alert(`This is your weight: ${weight}kg and your  height is ${height}cm`);
let bmi = weight/(height/100*height/100);
alert(`Your BMI is ${bmi}`);

