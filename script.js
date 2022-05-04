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

const scores = [0, 0];
//default values
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// ==================================================================
//function ==> enter players names
function addPlayerName() {
  const firstPlayerName = prompt('Enter first player name');
  const seconedPlayerName = prompt('Enter seconed player name');
  const player0Name = document.getElementById('name--0');
  const player1Name = document.getElementById('name--1');

  if (
    (firstPlayerName == null && seconedPlayerName == null) ||
    (firstPlayerName === '' && seconedPlayerName === '')
  ) {
    player0Name.textContent = 'Player 1';
    player1Name.textContent = 'Player 2';
  } else {
    player0Name.textContent = firstPlayerName;
    player1Name.textContent = seconedPlayerName;
  }
}
// addPlayerName();
// =================================================================
function switchPlayer() {
  //when dice === 1 reset activeplayer current score
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  //reset current score value
  currentScore = 0;

  //if activePlayer ===0 make it === 1 and vice versa
  activePlayer = activePlayer === 0 ? 1 : 0;

  //add and remove player--active class
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  //hide dice image every switching player
  diceImg.classList.add('d-none');
}
// =================================================================
//Rolling dice function
rollButton.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.display dice
    diceImg.classList.remove('d-none');

    //set image in src depends on dice number
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

      switchPlayer();
    }
  }
});
// =================================================================

holdButton.addEventListener('click', function () {
  if (playing) {
    //1. add current score to player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check of player's score >= 100
    if (scores[activePlayer] >= 50) {
      //finish the game

      //set false value to playing var to stop the game
      playing = false;

      //hide dice image
      diceImg.classList.add('d-none');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      //add winner class to current player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});
