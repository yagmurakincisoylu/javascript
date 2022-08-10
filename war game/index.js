const scoresInfoText = document.getElementById("scoresInfoText");
const remainingCardsEl = document.getElementById("remainingCardsEl");
const cards = document.getElementById("cards");
const computerScoreText = document.getElementById("computerScoreText");
const playerScoreText = document.getElementById("playerScoreText");
const newDeckBtn = document.getElementById("newDeckBtn");
const newCardBtn = document.getElementById("newCardBtn");

const cardCount = 2;
let deckId;
let computerScore = 0;
let playerScore = 0;

newCardBtn.disabled = true;

const getNewDeck = async () => {
  const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  const data = await response.json()

  deckId = data.deck_id;
  remainingCardsEl.textContent = `${data.remaining}`
  resetGame();
}

const getNewCard = async () => {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`)
  const data = await response.json()

  remainingCardsEl.textContent = `${data.remaining}`

  for(let i = 0; i < cardCount; i++) {
    cards.children[i].innerHTML = `
      <img src="${data.cards[i].image}" />
    `
  }

  const card1Value = data.cards[0].value;
  const card2Value = data.cards[1].value;

  scoresInfoText.textContent = getScoreTexts(card1Value, card2Value);

  if(data.remaining === 0) {
    newCardBtn.disabled = true;
    determineWinner();
  }
}

const getScoreTexts = (card1, card2) => {
  const cardsArr = 
    ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "KING", "QUEEN", "ACE"];

  const card1Score =  cardsArr.indexOf(`${card1}`);
  const card2Score =  cardsArr.indexOf(`${card2}`);

  if(card1Score > card2Score) {
    computerScore++;
    computerScoreText.textContent = computerScore;
    return "Computer got 1 point!"
  } else if (card1Score < card2Score) {
    playerScore++;
    playerScoreText.textContent = playerScore;
    return "Player got 1 point!"
  } else {
    return "It's WAR!"
  }
}

const determineWinner = () => {
  if(computerScore > playerScore) {
    scoresInfoText.textContent = "Computer Won!";
  } else if (computerScore < playerScore) {
    scoresInfoText.textContent = "Player Won!";
  } else {
    scoresInfoText.textContent = "It's Tie!";
  }
}

const resetGame = () => {
  for(let i = 0; i < cardCount; i++) {
    cards.children[i].innerHTML = ""
  }

  newCardBtn.disabled = false;
  scoresInfoText.textContent = "Draw A Card";
  computerScore = 0;
  playerScore = 0;
  computerScoreText.textContent = computerScore;
  playerScoreText.textContent = playerScore;
}

newDeckBtn.addEventListener("click", getNewDeck);
newCardBtn.addEventListener("click", getNewCard)




