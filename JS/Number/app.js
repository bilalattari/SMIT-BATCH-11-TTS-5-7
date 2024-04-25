var number = 5.0;
//round
console.log(Math.round(number));
//floor
console.log(Math.floor(number));
//ceil
console.log(Math.ceil(number));

// number ko string mein convert krna
console.log(typeof number);
console.log(typeof number.toString());

var price = "340a45.4";
console.log("parseInt=>", parseInt(price.replace("a", "")));
//string to number mein convert krna
//1. + lagado pehle
//2. Number() ke function mein dedo
//3. parseInt() ye decimal ko covert nahn krta
//4. parseFloat() ye decimal ko bhe covert krta he
// console.log("+=>", +price);
// console.log("Number=>", Number(price));
console.log("parseFloat=>", parseFloat(price));

//decimal ki length ko control krne ke lye
var divide = 10 / 3;
console.log(divide.toFixed(2));

var heading = document.getElementById("random");
function generateOTPNumber() {
  var random = Math.round(Math.random() * 10000);
  heading.innerText = random;
}

// Generate Dice Number
var dice = document.getElementById("dice");
var win_loss = document.getElementById("win_loss");
var dice_input = document.getElementById("dice_input");

function generateDiceNumber() {
  var userValue = dice_input.value;
  if (userValue < 7) {
    var diceNumber = Math.ceil(Math.random() * 6);
    dice.innerText = diceNumber;
    if (userValue == diceNumber) {
      win_loss.innerText = "You win";
      win_loss.style.color = "Green";
    } else {
      win_loss.innerText = "You loss, Try Again";
      win_loss.style.color = "red";
    }
  } else {
    win_loss.innerText = "Number sahi daalo!";
    win_loss.style.color = "orange";
  }
}

var string = "ABCSD123asSALNFzALIsadWQnkdaslnd";
var password_h1 = document.getElementById("password");

var password = "";

function generatePassword() {
  password = "";
  for (var i = 0; i < 10; i++) {
    var randomNumber = Math.round(Math.random() * string.length);
    console.log("randomNumber=>", randomNumber, string.charAt(randomNumber));
    password = password + string.charAt(randomNumber);
    console.log(password);
  }
  password_h1.innerText = password;
}
