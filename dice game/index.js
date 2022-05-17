const message = document.getElementById("message");

const player1ScoreBoard = document.getElementById("player1ScoreBoard");
const player2ScoreBoard = document.getElementById("player2ScoreBoard");

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");

const rollBtn = document.getElementById("rollBtn");
const dblBtn = document.getElementById("dblBtn");
const resetBtn = document.getElementById("resetBtn");

const catDiv = document.querySelector(".catDiv");
const catImg = document.querySelector(".catImg");

let player1Score = 0;
let player2Score = 0;

let player1Turn = true;

const dices = [
	{dice: "⚀", point: 1},
	{dice: "⚁", point: 2},
	{dice: "⚂", point: 3},
	{dice: "⚃", point: 4},
	{dice: "⚄", point: 5},
	{dice: "⚅", point: 6}
];

const dblDices = [
	{dice: "⚀", point: 1},
	{dice: "x", point: 0},
	{dice: "⚁", point: 2},
	{dice: "x", point: 0},
	{dice: "⚂", point: 3},
	{dice: "x", point: 0},
	{dice: "⚃", point: 4},
	{dice: "x", point: 0},
	{dice: "⚄", point: 5},
	{dice: "x", point: 0},
	{dice: "⚅", point: 6},
	{dice: "x", point: 0}
];

const diceChanges = (player1, player2, randomDice) => {
	player1.classList.remove("active");
	player2.classList.add("active");
	player1.textContent = randomDice;
};

const catAnimation = () => {
	catDiv.style.animation = "cat 5s infinite";
	catImg.classList.remove("hidden-cat");
};

const btnVisibility = () => {
	rollBtn.style.display = "none";
	dblBtn.style.display = "none";
};

const rollDice = (arr, number) => {
	let randomNumber = arr[Math.floor(Math.random() * 6)];
	let randomDice = randomNumber.dice;
	let randomPoint = randomNumber.point * number;
	if(player1Turn) {
		player1Score += randomPoint;
		player1ScoreBoard.textContent = `${player1Score}`;
		message.textContent = `Player 2 Turn`;
		diceChanges(player1Dice, player2Dice, randomDice);
	} else {
		player2Score += randomPoint;
		player2ScoreBoard.textContent = `${player2Score}`;
		message.textContent = `Player 1 Turn`;
		diceChanges(player2Dice, player1Dice, randomDice);
	}
	player1Turn = !player1Turn;
	
	if(player1Score >= 20 && player1Turn === true && player1Score !== player2Score && player1Score > player2Score) {
		message.textContent = `Player 1 has won! 🥳`;
		btnVisibility();
		catAnimation();
	} else if (player2Score >= 20 && player1Score !== player2Score && player2Score > player1Score) {
		message.textContent = `Player 2 has won! 🥳`;
		btnVisibility();
		catAnimation();
	} else if (player1Score >= 20 && player2Score >= 20 && player1Score === player2Score) {
		message.textContent = `It's a draw! 😤`;
		btnVisibility();
	}
};

rollBtn.addEventListener("click", () => {
	rollDice(dices, 1);
});

dblBtn.addEventListener("click", () => {
	rollDice(dblDices, 2);
});

const reset = () => {
	player1Score = 0;
	player2Score = 0;
	player1Turn = true;
	message.textContent = `Player 1 Turn`;
	player1ScoreBoard.textContent = `0`;
	player2ScoreBoard.textContent = `0`;
	player1Dice.textContent = dices[0].dice;
	player2Dice.textContent = dices[0].dice;
	player1Dice.classList.add("active");
	player2Dice.classList.remove("active");
	rollBtn.style.display = "block";
	dblBtn.style.display = "block";
	catDiv.style.animation = null;
	catImg.classList.add("hidden-cat");
}

resetBtn.addEventListener("click", () => {
	reset();
});

