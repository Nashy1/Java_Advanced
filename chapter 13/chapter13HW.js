// //Practice exercise 13.1
// function greet(fullName){
// console.log(`Welcome, ${fullName[0]} ${fullName[1]}`)
// }
// function processCall(user, callback){
// const fullName = user.split(" ");
// callback(fullName);
// }
// processCall("Laurence Svekis", greet);


// //Practice exercise 13.2
// const myPromise = new Promise((resolve, reject) => {
// resolve("Start Counting");
// });
// function counter(val){
// console.log(val);
// }
// myPromise
// .then(value => {counter(value); return "one"})
// .then(value => {counter(value); return "two"})
// .then(value => {counter(value); return "three"})
// .then(value => {counter(value);});


// //Practice exercise 13.3
// let cnt = 0;
// function outputTime(val) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             cnt++;
//             resolve(`x value ${val} counter:${cnt}`);
//         }, 1000);
//     });
// }
// async function aCall(val) {
//     console.log(`ready ${val} counter:${cnt}`);
//     const res = await outputTime(val);
//     console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//     aCall(x);
// }