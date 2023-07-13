// //exercise 9.1
//  console.dir(window)

// window.innerHeight
// window.innerWidth

//  //exercise 9.2

// window.location.protocol



// //exercise 9.3
// const op = document.querySelector(".output");
// op.textContent = "Hello!";

// op.classList.add('navy');
// op.id = 'tester';
// op.style.backgroundColor = 'skyblue';
// const url = document.URL;
// op.textContent = url;
// console.log(op);


// //Chapter project

// const op = document.querySelector(".output");
// const mainList = document.querySelector("ul");
// mainList.id = "mainList";
// const divTags = document.querySelectorAll("div");
// console.log(divTags);

// for( var i = 0; i<divTags.length;i++){
//     divTags[i].id = 'id' + (i+1);
//     if(i%3){
//         divTags[i].style.color = 'red';

//     } else{
//         divTags[i].style.color ='blue';
//     }
// }


// //Self-check quiz


// //1
// console.dir(document.body)
// //2
// document.body.textContent ="BELLO!"
// //3
// for (const property in document) {
//     console.log(`${property}: ${document[property]}`);
//     }
// //4
// for (const property in window) {
//     console.log(`${property}: ${document[window]}`);
//     }
// //5
// const header1 = document.querySelector("h1");
// console.log(header1);