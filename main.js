/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
//the d6 is the id in html, the click is the type of event and roll_d6 is the function
document.getElementById("d6").addEventListener("click", roll_d6);
document.getElementById("d8").addEventListener("click", roll_d8);
document.getElementById("d6").addEventListener("mouseenter", d6_enter);
document.getElementById("d6").addEventListener("mouseleave", d6_leave);
document.getElementById("enter").addEventListener("click", greeting);

/*** Functions ***/

// Return a random integer from `min` to `max`, inclusive
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll_d6() {
    let roll = randInt(1, 6);
    document.getElementById("die_roll").textContent = roll;
}

function roll_d8() {
    let roll = randInt(1,8);
    document.getElementById("die_roll").textContent = roll;
}

function d6_enter() {
   document.getElementById("die").textContent = "🐊";
}

function d6_leave() {
    document.getElementById("die").textContent = "🐄";
}

function greeting() {
    let name = document.getElementById("user_input").value;
    document.getElementById("greeting").textContent = `Hello ${name}!`;
}


