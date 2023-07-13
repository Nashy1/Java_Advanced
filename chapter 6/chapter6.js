// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);
// addTwoNumbers(10);

// one param arrow function

//     let doingArrowStuff = x => console.log(x);

// doingArrowStuff(33);

// two param arrow function
//     let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(5, 3);



// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

// let ll = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...ll, "and", "very",
//     "powerful"];
// alert(message);

// function addTwoNumbers(x, y) {
//     return (x + y);
// }


// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);


// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");


// function addTwoNumbers(x, y) {
//     return (x + y);
// }
// let result = addTwoNumbers(4, 5);
// alert(result);

// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);


// let addTwoNumbers = (x, y) => x + y;

// let result = addTwoNumbers(12, 15);
// console.log(result);

// function testAvailability(x) {
//     console.log("Available here:", x);
// }
// testAvailability("Hi!");
// console.log("Not available here:", x);

// function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
// }

// testAvailability();
// console.log("Not available here:", y);

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);

// function doingStuff() {
//     if (true) {
//         var x = "local";
//     }
//     console.log(x);
// }

// doingStuff();

// function doingStuff() {
//     if (true) {
//         let x = "local";
//         console.log(x);
//     }

// }

// doingStuff();


// function doingStuff() {
//     if (true) {
//         console.log(x);
//         let x = "local";
//     }
// }
// doingStuff();

// function doingStuff() {
//     if (true) {
//         console.log(x);
//         var x = "local";
//     }
// }
// doingStuff();

// function doingStuff() {
//     if (true) {
//         const X = "local";
//     }
//     console.log(X);
// }
// doingStuff();


// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
// function creatingNewScope(x) {
//     console.log("Access to global vars inside function.", globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);



// let x = "global";
// function doingStuff() {
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x = "global";
// function doingStuff(x) {
//     console.log(x);
// }
// doingStuff("param");

// function confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
// }
// confuseReader();
// console.log("Outside of function:", x);


// (function () {
//     console.log("IIFE!");
// })();

// (() => {
//     console.log("run right away");
// })();


// let x = '1000';
// (() => {
//     let x = '2000';
//     console.log(x)
// })();

// let result = (() => {
//     let x = '3000';
//     return x
// })();

// let result2 = ((y, w) => {
//     let x = '2222';
//     return y + w

// })(55, 33);

// console.log(`x = ${x}`);
// console.log(`result is ${result}`);
// console.log(`result is ${result2}`);

// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);
// function getRecursive(nr) {
//     alert(nr);
//     if (nr > 0) {
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// function logRecursive(nr) {

//     if (nr > 0) {
//         alert("Started function:" + nr);
//         logRecursive(nr - 1);
//     } else {
//         alert("done with recursion");
//     }
//     alert("Ended function:" + nr);
// }
// logRecursive(3);

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(2);

// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }
// doOuterFunctionStuff(2);


// ((nr) => {

//     ((x) => {
//         let z = 10;
//         console.log(z - nr)
//     })(nr)
// })(3);

// let functionVariable = function () {
//     console.log("Not so secret though.");
//     };

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// }
// // doFlexibleStuff(functionVariable);

// let anotherFunctionVariable = function() {
//     console.log("Another anonymous function implementation.");
//     }
//     doFlexibleStuff(anotherFunctionVariable);

// let youGotThis = (() => {
//     console.log("You're doing really well, keep coding!");
// })();

// setTimeout(youGotThis, 10);  
// setInterval(youGotThis,5);


