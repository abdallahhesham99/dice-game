'use strict';
alertify.alert('Hello Welcome ❤', 'Win from score 50 🥇🏆');

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

let scores, currentScore, activePlayer, playing;
// ==================================================================
//Reset values function

function init() {
  scores = [0, 0];
  //default values
  currentScore = 0;
  activePlayer = 0;
  //to set state for the game
  playing = true;

  //hide dice image
  current0El.textContent = 0;
  current1El.textContent = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  //add and remove player--active class

  diceImg.classList.add('d-none');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}
init();
// ==================================================================

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

      //remove active class to current player
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
// ===============================================================
// New game button
newButton.addEventListener('click', init);
