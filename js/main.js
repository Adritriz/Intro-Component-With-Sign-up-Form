/* const input = document.querySelectorAll("input"); 
const submitBtn = document.querySelector(".freeTrialBtn");
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
const email = document.querySelector("div #email"); */

const form01 = document.forms["myForm"];

form01.addEventListener("invalid", getErrorMsg, true);
form01.addEventListener("input", removeErrorMsg);

function getErrorMsg(e) {
    e.preventDefault();
    e.target.classList.add('invalid');
}

function removeErrorMsg(e) {
    if (e.target.validity.valid) {
        e.target.classList.remove('invalid');
    }
}



 
    











  