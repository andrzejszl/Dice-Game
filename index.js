var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");

var src1 = ("images/dice" + randomNumber1 + ".png");
var src2 = ("images/dice" + randomNumber2 + ".png");

function roll() {
    randomNumber1;
    randomNumber2;
    if (randomNumber1 > randomNumber2) {
        dice1.setAttribute("src", src1);
        dice2.setAttribute("src", src2);
        h1.innerHTML = "🚩 Player 1 Wins";
    } else if (randomNumber1 === randomNumber2) {
        dice1.setAttribute("src", src1);
        dice2.setAttribute("src", src2);
        h1.innerHTML = "Draw";
    } else {
        dice1.setAttribute("src", src1);
        dice2.setAttribute("src", src2);
        h1.innerHTML = "Player 2 Wins 🚩";
    }
}

h1.addEventListener('click', roll);