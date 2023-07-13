// //Practice exercise 5.1
// let max = 10;
// let ranNum = Math.floor(Math.random() * max) +1;
// let correct = true;
// while(correct){
//     let guess = prompt("Guess a Number 1 - " + max);
//     guess = Number(guess);
//     if (guess === ranNum){
//         console.log ("Well done you guessed " + ranNum + " correct");
//     } else if (guess > ranNum){
//         alert("The number is Too High");
//     } else {
//         alert("The number is too Low");
//     }
// }


// //Practice exercise 5.2
// let count = 0;
// let step = 5;
// do {
//     console.log(count);
//     count += step;
//     }
// while (count <= 100);

// //Practice exercise 5.3
// let myWork = [];
//  for(var i = 0; i < 10; i++){
//     let stat= i%2 ? true : false;
//     let temp ={
//       name: `Lession${i}` , status: stat    
//    };
//    myWork.push(temp);

//  }
//  console.log(myWork);

// //Practice exercise 5.4
// let myTable=[];
// let rows = 4;
// let cols=7;
// let count1 = 0;
// for(let x = 0; x < rows; x++){
//    let temTable=[];
//    for(let c = 0; c< cols; c++){
//       count1++;
//       temTable.push(count);
//    }
//    myTable.push(temTable);
// }
// console.log(myTable);

// //Practice exercise 5.5
// let grid = [];
// let cells = 65;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//    if (counter % 8 == 0) {
//       if (row != undefined) {
//          grid.push(row);
//       }
//       row = [];
//    }
//    counter++;
//    let temp = counter;
//    row.push(temp);
// }
// console.table(grid);

// //Practice exercise 5.6
// let arr=[];
// for(let q =0; q< 10; q++){
//    arr.push(q + 1);
// }
// console.log(arr);

// for (let o = 0; o<arr.length;o++){
//    console.log(arr[0]);
// }
// for (let val of arr){
//    console.log(val);
// }

// //Practice exercise 5.7
// let obj = {
//    a: 1,
//    b: 2,
//    c:3
// };
// for (let prop in obj){
//    console.log(prop,obj[prop]);
// }
// let arr1 = ["a","b","c"];
// for (let w = 0; w < arr1.length; w++){
//    console.log(w, arr1[w]);
// }
// for (el in arr1){
//    comsole.log(el, arr1[el]);
// }


// //Practice exercise 5.8
// let output ="";
// let skipNum = 5;
// for(let i = 0; i <10; i++ ){
//     if( i === skipNum){
//         continue

//     }
//     output += i;
    
// }
// console.log(output);