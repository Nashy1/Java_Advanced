// //Practice exercise 7.1
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname= lastname;
//     }
// }

// let p1 = new Person("Jake","Leez");
// let p2 = new Person("Merley","P");
// alert(`Hey ${p1.firstname} Welcome back!!`);
// alert(`Hey ${p2.firstname} Welcome back!!`);


// //Practice exercise 7.2
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// let p1 = new Person("Jake","Leez");
// let p2 = new Person("Merley","P");
// alert(p1.fullname());
// alert(p2.fullname());

// //Practice exercise 7.3
// class Animal {
//     constructor(species, sounds) {
//         this.species = species;
//         this.sounds = sounds;
//     }
//     speak() {
//         console.log(this.species + " " + this.sounds);
//     }
// }
// Animal.prototype.eat = function () {
//     return "The "  + this.species + " is eating";
// }
// let cow = new Animal("Cow", "mooo");
// let dog = new Animal("dog", "Woofwoof");
// console.log(cow.speak());
// alert(dog.eat());
// console.log(dog);


