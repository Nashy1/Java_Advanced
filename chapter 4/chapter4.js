// //Practice exercise 4.1
// //1
// let value = true;
// //2
// console.log(value);
// //3
// if (value === true){
//     console.log("I love Coding")
// };


// //Practice exercise 4.2
// let age =Number(prompt("How old are you?"));
// let message ;
// if (age >= 21){
//     message="You are allowed in the venue and to buy alcohol";
// }else if(age >= 19){
//     message="You are allowed in the venue, but you are not allowed to buy alcohol";
// } else {
//     message="Not allowed in the venue";
// };

// alert(message)


// //Practice exercise 4.3
// let id = true;
// let message1 = (id) ? "allowed in" : "Denied Entry";
// console.log(message1);

// //Practice exercise 4.4
// let ranNum = Math.floor(Math.random() * 5);
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (ranNum) {
//     case 0:
//         answer = "It will work out";
//         break;
//     case 1:
//         answer = "Maybe, maybe not";
//         break;
//     case 2:
//         answer = "Probably not";
//         break;
//     case 3:
//         answer = "Highly likely";
//         break;
//     default:
//         answer = "I don't know about that";
// }
// let output1 = "You asked me " + question + ". I think that " + answer;
// alert(output1);

// //Practice exercise 4.5
// let prize = prompt("Pick a number 0-10");
// prize = Number(prize);
// let output = "My Selection: ";
// switch (prize) {
//     case 0:
//         output += "Gold ";
//     case 1:
//         output += "Coin ";
//         break;
//     case 2:
//         output += "Big ";
//     case 3:
//         output += "Box of ";
//     case 4:
//         output += "Silver ";
//     case 5:
//         output += "Bricks ";
//         break;
//     default:
//         output += "Sorry Try Again";
// }
// console.log(output);

// //Chapter projects
// //Evaluating a number game answers
// let num = prompt("What number");
// num = Number(num);
// let val = 50;
// let message = "nothing";
// if(num > val){
//     message = num + ' was greater than' + val;
//     } else if (num === val){
//         message = num + ' was equal to ' + val;
//     } else {
//         message = num + ' is less than ' + val;
//     }
//     console.log(message);
    

// //Friend checker game answers
// let person = prompt('Enter a name');
// let message;
// switch (person){
//     case 'Mark':
//     case 'Mac':
//     case 'Zake':
//     case 'Jake':
//     message = person + ' is my friend';
//     break;
//     default:
//     message = "I don't know "+ person;
// }
// console.log(message);

// Rock paper scissors game answers
let rps = ['Rock', 'Paper', 'Scissors'];
let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);
let message1 = "player " + rps[player] + " vs computer " + rps[computer] + " ";
if (player === computer) {
    message += "it's a tie";
} else if (player > computer) {
    if (computer == 0 && player == 2) {
        message += "Computer Wins";
    } else {
        message += "Player Wins";
    }
} else {
    if (computer == 2 && player == 0) {
        message += "Player Wins";
    } else {
        message += "Computer Wins";
    }
}
alert(message);
