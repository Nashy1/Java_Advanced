// //Practice exercise 3.1
// //1
// let cart = ['Milk','Bread','Apples'];
// //2
// console.log(cart.length);
// //3
// cart[1]= 'Bananas';
// //4
// console.log(cart);



// //Practice exercise 3.2
// //1
// let shoppingList = [];

// //2
// shoppingList.push('Milk', 'Bread', 'Apple');
// console.log(shoppingList);

// //3
// shoppingList.splice(1, 1, 'Bananas', 'Eggs');
// console.log(shoppingList);

// //4
// shoppingList.pop();
// console.log(shoppingList);
// //5
// shoppingList.sort();
// console.log(shoppingList);
// //6
// console.log(shoppingList.indexOf('Milk'));

// //7
// shoppingList.splice(1, 0, 'Carrots', 'Lettuce');
// console.log(shoppingList)

// //8
// let newList = ["Juice", "Pop"];

// //9
// let newList2 = shoppingList.concat(newList).concat(newList);

// //10
// console.log(newList2.indexOf('Pop'));

// //11
// console.log(newList2);

// //Practice exercise 3.3
// let arr = ['1', '2', '3'];
// let arr1 = [arr, arr, arr];
// console.log(arr1[1][1]);

// //Practice exercise 3.4
// let myCar = {
//     make: "BMW",
//     model: "M5",
//     tires: 4,
//     doors: 4,
//     color: "Red",
//     forSale: true
// };
// let propColor = "color";
// myCar[propColor] = "yellow";
// propColor = "forSale";
// console.log(myCar);
// console.log(myCar.color);
// myCar[propColor] = true;
// console.log(myCar.make + " " + myCar.model);
// console.log(myCar.forSale);

//Practice exercise 3.5
// let people ={friends:[]};
// let friend1 = {first: "Laurence", last: "Svekis", id: 1};
// let friend2 = {first: "Marry", last: "Leo", id: 2};
// let friend3 = {first: "John", last: "Doe", id: 3};
// people.friends.push(friend1, friend2, friend3);
// console.log(people);

//Chapter projects
let storeItems = [];
let item1 ={
    name:"Nike",
    model:"Air Force",
    cost: 1000,
    qty:1
};
let item2 ={
    name:"Puma",
    model:"City Rider",
    cost:1500,
    qty:4
};
let item3 = {
    name:"Adidas",
    model:"Predator",
    cost:2000,
    qty:2
};
storeItems.push(item1,itme2,item3);
console.log(storeItems);
console.log(storeItems[2].qty);
