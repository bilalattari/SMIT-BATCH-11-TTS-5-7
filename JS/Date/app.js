var obj = {
  name: "Bilal", // property
  age: 18, // property
  isVerified: true, // property
  result: function () {
    // method
    console.log("Chal raha he");
  },
};

// console.log(obj);
// console.log("get single property ", obj.name);

// obj.name = "Huzaifa"
// console.log(obj);

// console.log(obj.result());

var now = new Date();

console.log(now); // date
console.log(typeof now); // get date type

console.log(now.getDate()); // get date for date object
console.log("Date", now.toLocaleDateString()); // full date

var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

console.log("Day ", dayNames[now.getDay()]);

console.log(now.getMonth());
console.log(now.getFullYear());

console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")


setInterval(function(){
    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    hours.innerText = currentDate.getHours();
    minutes.innerText = currentDate.getMinutes();
    seconds.innerText = currentDate.getSeconds();
}, 1000);