//1.variable banate hen
//2.condition
//3.increment ya decrement

//simple loop
// for (var i = 1; i <= 10; i++) {
//   console.log("Hello " + i);
// }

//print from 1 to 100
// for (var i = 1; i <= 100; i++) {
//   console.log(i);
// }

//print square from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i * i);
// }

//print square msg from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log("Square of " + i + " is " + i * i);
// }

//print even numbers only
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//print odd numbers only
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

//print table of 4 from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i * 4);
// }

//
// var num = 0;
// 1 3 6 10 15 21 28 36 45
// for (var i = 0; i < 10; i++) {
//   console.log("num=>", num, "i=>", i);
//   num = num + i;
//   console.log(num);
// }

//9,8,7,6,5,4,3,2,1
// for (var i = 0; i < 10; i++) {
//   console.log(9 - i);
// }

//19, 28, 37, 46, 55, 64, 73, 82, 91;
// for (var i = 1; i < 10; i++) {
//   console.log(i, 10 - i);
// }

//
var nums = [20, 3, 12, 34, 21, 25, 6, 2];
var largestNum = 0;
for (var i = 0; i < nums.length; i++) {
  if (nums[i] > largestNum) {
    largestNum = nums[i];
  }
}
console.log("Largest number is-> ", largestNum);

// var nums = [20, 3, 12, 34, 21, 25, 6, 2];
var smallestNum = nums[0];
for (var i = 0; i < nums.length; i++) {
  //block scope
  if (nums[i] < smallestNum) {
    smallestNum = nums[i];
  }
}
console.log("Smallest number is-> ", smallestNum);

// var bonds = [2155, 1513, 1522, 2135, 1413, 1621, 2125, 1113, 1222];
// var bondNumber = prompt("Enter your bond number");
// var won = false;
// for (var i = 0; i < bonds.length; i++) {
//   console.log(bonds[i], i);
//   if (bonds[i] == bondNumber) {
//     won = true;
//     break;
//   }
// }
// if (won) {
//   document.write("You won");
// } else {
//   document.write("You loss");
// }

// var karachiKeAlaqe = [
//   "Saddar",
//   "Shah Faisal",
//   "Gulshan",
//   "Korangi",
//   "Dha",
//   "Lyari",
//   "Maleer",
//   "Nazimabad",
//   "Hyderi",
// ];
// var userElaqa = prompt("Aap kahan tashref rakhte hen");
// var deliveryAvailable = false;
// for (var i = 0; i < karachiKeAlaqe.length; i++) {
//   if (karachiKeAlaqe[i] === userElaqa) {
//     deliveryAvailable = true;
//     document.write("Delivery Available");
//     break;
//   }
// }
// if (!deliveryAvailable) {
//   document.write("Delivery Not Available");
// }

//nested loop=>
// var userPrizeBond = [234, 235, 236, 237, 238, 323, 21, 313, 434, 124, 360];
// var prizeBondWinner = [
//   112, 152, 190, 201, 220, 236, 238, 250, 285, 310, 315, 320, 341, 360, 355,
//   380, 400,
// ];
// var userWon = [];
// for (var i = 0; i < userPrizeBond.length; i++) {
//   for (var j = 0; j < prizeBondWinner.length; j++) {
// console.log(
//   "i=>",
//   userPrizeBond[i],
//   "j=>",
//   prizeBondWinner[j],
//   userPrizeBond[i] === prizeBondWinner[j]
// );
//     if (userPrizeBond[i] === prizeBondWinner[j]) {
//       userWon.push(userPrizeBond[i]);
//     }
//   }
// }
// console.log("Prize bond ye nikle hen=>", userWon);

var students1 = ["Ahmed", "Abdul", "Bilal", "Raza", "Haris", "Shoab"];
var students2 = ["Hasan", "Tabish", "Usman", "Abdul", "Ahsan", "Hamza", "Bilal",];

var duplication = []
for(var i = 0; i < students1.length; i++){
  for(var j = 0; j < students2.length; j++){
    if(students1[i] === students2[j]){
      duplication.push(students1[i])
    }
  }
}
console.log('These names are  in both list=>',duplication)
