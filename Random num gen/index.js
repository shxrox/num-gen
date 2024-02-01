const myButton = document.getElementById("myButton");
const myLabel1 = document.querySelector(".myLabel1");
const myLabel2 = document.querySelector(".myLabel2");
const myLabel3 = document.querySelector(".myLabel3");
let min = 1;
let max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}
