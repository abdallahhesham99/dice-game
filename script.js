'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const rollButton = document.querySelector('.btn--roll');
const newButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');

//default values
let currentScore = 0;
let activePlayer = 0;

//for enter players names
function addPlayerName() {
  const firstPlayerName = prompt('Enter first player name');
  const seconedPlayerName = prompt('Enter seconed player name');
  const player0Name = document.getElementById('name--0');
  const player1Name = document.getElementById('name--1');

  player0Name.textContent =
    firstPlayerName === '' ? 'Player 1' : firstPlayerName;

  player1Name.textContent =
    seconedPlayerName === '' ? 'Player 2' : seconedPlayerName;
}
addPlayerName();
// =================================================================
//Rolling dice function
rollButton.addEventListener('click', function () {
  //1.Generating a random dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.display dice
  diceImg.classList.remove('d-none');
  diceImg.src = `imgs/dice-${dice}.png`;
  //check dice != 1
  if (dice !== 1) {
    //add dice number to current score value
    currentScore += dice;

    //add current score value to  player depends on activeplayer 0 or 1
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  //switch player
  else {
    //when dice === 1 reset activeplayer current score
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //reset current score value
    currentScore = 0;

    //if activePlayer ===0 make it === 1 and vice versa
    activePlayer = activePlayer === 0 ? 1 : 0;

    //add and remove player--active class
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
