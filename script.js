'use strict';

// Selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
});
