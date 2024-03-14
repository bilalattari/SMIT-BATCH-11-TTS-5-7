// var city1 = "Karachi";
// var city2 = "Lahore";
// var city3 = "Hyderabad";

var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad"];

console.log(cities[0]);
cities[0] = "Karachi-The City of Lights";

document.write(cities[0] + " is the largest city of Pakistan. <br>");
document.write(cities[1] + " is the capital of Punjaab. <br>");
document.write(cities[2] + " is the industrial hub. <br>    ");
document.write(cities[3] + " is the capital of Pakistan.");

console.log(cities);
// index , variable ke naam ke baad [] brackets aenge , square brackets mein index ka number likh denge

// length
// show single value
// update single value

// methods
// push , add 1 or more element in the last of an array
// pop , remove one element from last of an array
// unshift , add 1 or more element in the start of an array
// shift , remove one element from start of an array

// push
cities.push("Peshawar", "Swat", "Quetta", "Kashmir");
console.log("cities after push-->", cities);

//pop
cities.pop();
console.log("cities after pop-->", cities);

// unshift
cities.unshift("Behria Town", "Larkana", "Hyderabad");
console.log("cities after unshift-->", cities);

//shift
cities.shift();
console.log("cities after shift-->", cities);

// length of an array

var length = cities.length;
console.log(length);

// cities.length = 1;
// console.log(cities);

// console.log(cities[cities.length - 1])

console.log(cities[0]);
