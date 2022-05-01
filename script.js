'use strict';

//selecting elements

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');

let currentScore = 0;

//Rolling dice function
rollButton.addEventListener('click', function () {
  //1. Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display dice
  diceImg.classList.remove('d-none');
  diceImg.src = `imgs/dice-${dice}.png`;
  //3. check if dice roll === 1
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // Switch player
  }
});
