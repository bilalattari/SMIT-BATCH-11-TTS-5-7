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
  console.log(
    "index->",
    i,
    "arr value=>",
    nums[i],
    "largest number=>",
    largestNum,
    "condition=>",
    nums[i] > largestNum
  );
  if (nums[i] > largestNum) {
    largestNum = nums[i];
  }
}
console.log("Largest number is-> ", largestNum);
