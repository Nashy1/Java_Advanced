// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }

// let dog1 = new Dog("Jacky", 30, "brown", "labrador");
// let dog2 = new Dog("JJ",25,"red",'cateater')

// console.log(dog1);
// console.log(dog2);


// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

// let dog6 = new Dog("Roof", 2.4, "brown", "WoofWoof");
// console.log(dog);

// console.log(dog6);


// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let P = new Person("Mack","D");
// console.log (P);
// console.log("Hi", P.firstname);
// console.log("Hi", P.firstname, P.lastname);


// class Person {
//     #firstname;
//     #lastname;
//     #object;
//     constructor(firstname, lastname = "Doe", object = "Shoes") {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//         this.#object = object;

//     }
//     greet() {
//         console.log("Hi there! I'm", this.#firstname);
//     }
//     compliment() {
//         return "That's a wonderful " + this.#object + ", " + this.#firstname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         if (firstname > 1) {
//             this.#firstname = firstname;
//         } else {
//             alert('Name is too short!!')
//         }

//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
//     get object() {
//         return this.#object;
//     }
//     set object(object) {
//         this.#object = object;
//     }

// }



// let o = new Person('Kelly');
// let o2 = new Person('PK', 'Leonel', 'hairstyle');

// console.log('Hey' ,o.firstname,o.lastname);
// console.log('Hey' ,o2.firstname,o2.lastname);

// o.greet();
// o2.greet();
// console.log(o2.compliment());
// console.log(o.compliment())
// o.firstname = 'a';






//Inheritance
// 


//Prototypes

class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;

    }

    greet(){
        console.log('Hi there!')
    }
}

Person.prototype.introduce = function() {
    console.log( `Hi, I'm , ${this.firstname}`);
};

Person.prototype.favoriteColor = "green";


let p = new Person('Maria', 'Saga');
console.log(p.favoriteColor);
p.introduce();