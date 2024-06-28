/* Dicee Challenge Step 2 - Add Dice Images */
/* Dicee Challenge Step 3 - Create a Random Number */

var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomNumber2 = Math.floor(Math.random()*6) +1;

/* Dicee Challenge Step 4 - Change the <img> to a Random Dice */

document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1+".png");

/* Dicee Challenge Step 5 - Change both <img> Elements */


document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2+".png");

/* Dicee Challenge Step 6 - Change the Title to Display a Winner */

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
    
   } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
    
   } else {
   document.querySelector("h1").textContent = "Draw!";
   }