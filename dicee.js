var randomNumber1 = Math.floor(Math.random() *6) + 1;
var randomDice = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won!";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else document.querySelector("h1").innerHTML = "Draw!";