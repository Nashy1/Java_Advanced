// //Practice exercise 6.1
// //1
// let add =(x,y) =>{
//     return x + y;
// };
// //2
// let num = 9;
// let num2 = 4;

// //3
// console.log(add(num,num2));

// //
// console.log(add(5,8));


// //Practice exercise 6.2
// //1
// let words = ['kind','happy','lazy','Ugly','Beatiful','Usually','tall','short','smelly'];
//  let func=()=> {
//     let username = prompt('what is your name?');
//     let nameWord = Math.floor(Math.random()*words.length);
//     console.log(words[nameWord] + " " + username);
// }
// func();


// // //Practice exercise 6.3
// let num = 5;
// let num2 = 7;
// let holder= '-';
// let func =(a,b,op)=>{
//     if(op === '+'){
//         return a + b;
//     } else (op === '-') 
//         return b - a
//     }   



// // console.log(func(num,num2,holder));



// //Practice exercise 6.4
// let arr = [];
// for( let i =0; i < 10; i++){
//     let val1 =5 *i;
//     let val2 = i *i;
//     let res = func(val1,val2,'+');
//     arr.push(res);
// }
// console.log(arr);

// //Practice exercise 6.5
// let strNum = '1000';


// (()=>{
//     let str ="1000";
//     console.log(str);


// })();
// let result =(()=>{
//     let value= "Nash";
//     return value;

// })();
// console.log(result);

// (function (v){
//     console.log("My name is " + v);

// })('nash');

// //Practice exercise 6.6
// let calcFractor = (nr)=>{
//     console.log(nr);
//     if(nr === 0){
//         return 1;
//     } else{
//         return nr * calcFractor(--nr);
//     }
// }
// calcFractor(7);


// //Practice exercise 6.7
// let start = 10;
// let loop1 = (val) =>{
//     console.log(val);
//     if(val < 1){
//         return;
//     } 
//     return loop1(val - 1);
// };
// loop1(start);
// let loop2 = (val) =>{
//     console.log(val);
//     if(val >0){
//         val--;
//         return loop2(val);
//     }
//     return;
// }
// loop2(start);


// //Practice exercise 6.8
// let test = (val)=>{
//     console.log(val);
// }
// test ("Hello 11");
//  let test1 = (val)=>{
//     console.log(val);
//  }
//  test1("Hello 22")
 
