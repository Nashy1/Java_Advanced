//Practice exercise 8.1
let ms1 = "How's%20it%20going%3F";
let ms2 = "How's it going?";


let decURI = decodeURIComponent(ms1);
console.log(decURI);

let enURI2 = encodeURIComponent(ms2);
console.log(enURI2);

let webURI = "http://www.basescripts.com?=Hello World";
let encode = encodeURIComponent(webURI);
console.log(encode);


//Practice exercise 8.2
let arr =["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike","Laurence", "Mike", "Laurence", "Mike"];
let filtered = arr.filter((value,index,array)=>{
    console.log(value,index,array.indexOf(value));
    return array.indexOf(value) === index;
});
console.log(filtered);


// //Practice exercise 8.3
// let arr1 = [5,55,555,5555];
// let arr2 = arr1.map(x => x * 2);
// console.log(arr2);

// //Practice exercise 8.4
// let str = 'thIs will be capiTalized for each word into This Will Be Capitalized For Each Word';
// function randWords(str1) {
//      str1 = str1.toLowerCase();
//     let arr = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//         arr.push(temp);
//     });
//     return arr.join(" ");
// }
// console.log(randWords(str));

// //Practice exercise 8.5
// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) =>{
// console.log(letter);
// val = val.replaceAll(letter,index);
// });
// console.log(val);

// //Practice exercise 8.6
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*11)); // 0-10
// console.log(Math.floor(Math.random()*10)+1); // 1-10;
// console.log(Math.floor(Math.random()*100)+1); // 1-100;
// function ranNum(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
// console.log(ranNum(1,100));
// }

// //Practice exercise 8.7
// let future = new Date(2025, 5, 15);
// console.log(future);
// const months = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);
