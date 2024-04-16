// var username = "basit";

// username.toUpperCase();

// console.log(username);

// var a = "a";
// var A = "A";

// console.log(a.toUpperCase() == A.toUpperCase());

// var cities = ['karachi', 'lahore', 'sukkur'];
// var userCity = prompt("Enter your City");

// for (var i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
//     if (cities[i] === userCity.toLowerCase()) {
//         alert("city match");
//     }
// }

// var username = prompt("Enter your name")

// if(username.length < 3 || username.length > 12) {
//     alert("name should be grater then 3 less then 12")
// } else (
//     console.log(username)

// )
// console.log(a.length);

var a = "Hello my name is Bilal.";

console.log(a[2]);
console.log(a.slice(0, 5));

var username = "basit";
var sentence =
  "Send document on my email attari1235@gmail.com.After going through document I will be sending queries!.";

console.log(username[0].toUpperCase() + username.slice(1));

console.log(sentence.indexOf("document"));

console.log(sentence.lastIndexOf("document"));

//charAt

console.log(sentence.charAt(3));

// for (var i = 0; i < sentence.length; i++) {
//   if (sentence.charAt(i) === "!") {
//     console.log(i);
//     alert("Exclamation point found!");
//     break;
//   }
// }

//replace
var txt = "Bilal got first position in class.";
txt = txt.replace("first", "1st");
console.log(txt);

//trim
var email = "  attari1235@gmail.com   ";
console.log(email.length);
console.log("Trim=>", email.trim().length);
