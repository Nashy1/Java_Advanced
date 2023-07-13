// let s = 'Hello';
// console.log(
//     s.concat(" there!")
//         .toUpperCase()
//         .replace("THERE", "you")
//         .concat(" You're amazing!")
// );

// let x = 7;
// console.log(isNaN(x));



//Decoding and encoding URIs




// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:",encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:",decoded_uri);




// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);


// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);


// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
// console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);




// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
// return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));
// console.log(filterArr.every(checkString));



// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0,3, 5);
// console.log(arr)
//   let go = (e)=>{
//     eval(e.value)
//  }

// let arr = [1,2,3,4];
// let mapped_arr = arr.map(x => x+1);
// console.log(mapped_arr);


// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);


// let letter =["a","b","c"];
// let x = letter.join();
// console.log(x);

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";




// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);


// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);


// let caps ="HI HOW ARE YOU";
// let fixed_cap = caps[0] + caps.slice(1).toLowerCase();
// console.log(fixed_cap);



// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_start3 = encouragement.toLowerCase().startsWith("you");
// console.log(bool_start3);

// let bool_end = encouragement.endsWith("Something else");
// console.log(bool_end);


// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));



// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));


// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);
// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);
// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// console.log(5**3);



// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));
// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);


let currentDateTime = new Date();
console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(1000);
console.log(milliDate);