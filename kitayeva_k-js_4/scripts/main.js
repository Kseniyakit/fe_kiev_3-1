'use strict';
//Task1
function clickControl(control, action) {
    control.addEventListener('click', action);
}
function makeColorRed() {
    let paragraph = document.querySelectorAll('.task p');
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.backgroundColor = '#ff2f2c';
    }
}
makeColorRed();

//Task2
function makeShadow() {
    let paragraph = document.querySelectorAll('.task  p');
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.boxShadow = '5px 5px 5px rgba(68,68,68,0.4)';
    }
}
makeShadow();

//Task3
function makeNumeration() {
    let paragraph = document.querySelectorAll('.task p');
    for (let i = 0; i < paragraph.length; i++) {
        let number = i + 1;
        paragraph[i].innerHTML = number + ". " + paragraph[i].innerHTML;
    }
}
makeNumeration();

//Task4
let clicks = 0;

function getClickQuantity() {
    document.getElementById('getNumber').innerHTML = ++clicks;
}

document.getElementById('btn_1').addEventListener("click", getClickQuantity);
document.getElementById('btn_2').addEventListener("click", getClickQuantity);

//Task5

let submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    let number = document.getElementById('number').value;
    let exp = document.getElementById('exp').value;
    if (number !== "" && exp !== "") {
        powerOfNumbers(number, exp);
    }
});
function powerOfNumbers(num, exp) {
    let finalNumber = Math.pow(num, exp);
    alert(finalNumber);
}

//Task6

function getParagraphUnderlined() {
    let paragUnderlined = document.querySelectorAll('.task6 p');
    for (let i = 0; i < paragUnderlined.length; i++) {
        paragUnderlined[i].style.textDecoration = 'underline overline';
    }
}
getParagraphUnderlined()

//Task7-8
function getAgeFromClick() {
    let age = document.getElementById('txt_name').value;
    if (age === undefined || age !== "" && age > 16) {
        document.getElementById('enterResult').innerHTML = "Добро пожаловать!";
    } else if (age === undefined || age !== "" && age <= 16) {
        document.getElementById('enterResult').innerHTML = "Вы еще молоды";
    } else {
        document.getElementById('enterResult').innerHTML = "Введите ваш возраст";
    }
}
getAgeFromClick();

//Task9

let arr = [1, 2, 3, 4, 5];
function calcArrLength(array) {
    if (arr) {
        return arr.length
    } else {
        return 'Error'
    }
    ;
}
let result = calcArrLength(arr);
document.getElementById('enterArrLength').innerHTML = result;

//Task10
function calc() {
    let numberOfTen = document.getElementById('yourNumber').value;
    if (numberOfTen <= 7) {
        return document.getElementById('enterFinal').innerHTML = "Number is less or equal then 7";
    } else if (numberOfTen == 8 || numberOfTen == 9) {
        return document.getElementById('enterFinal').innerHTML = 'Number ' + (numberOfTen - 1);
    } else if (numberOfTen >= 10) {
        return document.getElementById('enterFinal').innerHTML = Math.pow(numberOfTen, 2);
    }
}

//Task11
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Поздравляю, Вы угадали!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 3) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Не угадали!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Ваше число меньше искомого!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Ваше число больше искомого!';
        }
    }
    guessCount++;
    guessField.value = '';
}
guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Начать игру заново';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    guessCount = 1;
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

